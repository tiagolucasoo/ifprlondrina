import React from 'react';
import './header.css';

// Header.jsx (Simula a navegação com 'navigate' passado via props)
const Header = ({ currentPage, navigate }) => {
    const navItems = [
        { name: 'Inicial', path: '/' },
        { name: 'Aulas', path: '/aulas' },
        { name: 'Equipe', path: '/equipe' },
        { name: 'Galeria', path: '/galeria' },
        { name: 'Gráficos', path: '/dashboard' }
    ];

    // Função auxiliar para determinar se um link está ativo (incluindo sub-rotas como /post/1)
    const isActive = (path) => {
        if (path === '/') {
            return currentPage === '/';
        }
        return currentPage.startsWith(path);
    };

    return (
        <header className="app-header">
            <div className="container">
                <div className="header-content">
                    <div className="logo-area">
                        {/* Ao clicar na logo, volta para a página inicial */}
                        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                            <img src="/logo.png" alt="Logo IFPR" className="ifpr-logo" /> 
                        </a>
                        <div className="titles">
                            <h1>Extensão IFPR  •  Turma 2023</h1>
                            <h2>Empreendedorismo em Inglês</h2>
                        </div>
                    </div>
                    <nav>
                        {navItems.map(item => (
                            <a 
                                key={item.path} 
                                href="#" 
                                onClick={(e) => { e.preventDefault(); navigate(item.path); }}
                                className={isActive(item.path) ? 'active' : ''}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;