import React, { useEffect, useState } from 'react';
import Header from './components/header/header';
import Inicial from './pages/inicial';
import Aulas from './pages/aulas';
import Equipe from './pages/equipe';
import Galeria from './pages/galeria';
import Grafico from './pages/grafico';
import Post from './pages/post';

const App = () => {
    const [currentPath, setCurrentPath] = useState(() => window.location.pathname || '/');

    useEffect(() => {
        const onPop = () => setCurrentPath(window.location.pathname || '/');
        window.addEventListener('popstate', onPop);
        return () => window.removeEventListener('popstate', onPop);
    }, []);

    const navigate = (to) => {
        if (to === currentPath) return;
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };

    const renderRoute = (path) => {
        // rota exata
        if (path === '/') return <Inicial navigate={navigate} currentPage={path} />;
        if (path === '/aulas') return <Aulas navigate={navigate} currentPage={path} />;
        if (path === '/equipe') return <Equipe navigate={navigate} currentPage={path} />;
        if (path === '/galeria') return <Galeria navigate={navigate} currentPage={path} />;
        if (path === '/grafico') return <Grafico navigate={navigate} currentPage={path} />;

        // rota /post/:id
        if (path.startsWith('/post/')) {
            const parts = path.split('/');
            const id = parts[2] || null;
            return <Post postId={id} navigate={navigate} currentPage={'/post'} />;
        }

        // 404 simples
        return (
            <div className="container">
                <main className="main-section">
                    <h2>Página não encontrada</h2>
                    <p>O caminho <strong>{path}</strong> não existe nesta aplicação.</p>
                </main>
            </div>
        );
    };

    return (
        <div className="app-container">
            <Header currentPage={currentPath} navigate={navigate} />
            <main>
                {renderRoute(currentPath)}
            </main>
        </div>
    );
};

export default App;