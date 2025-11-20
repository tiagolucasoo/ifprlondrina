import React from 'react';
import Inicial from './Itens/Inicial.jsx';
import Aulas from './Itens/Aulas.jsx';
import Equipe from './Itens/Equipe.jsx';
import Galeria from './Itens/Galeria.jsx';
import Grafico from './Itens/Grafico.jsx';
import Post from './Itens/Post.jsx';

/**
 * Simula o roteamento principal baseado no caminho atual (currentPage).
 * @param {string} currentPage - O caminho atual (ex: '/', '/aulas', '/post/1').
 * @param {function} navigate - Função para mudar o caminho.
 */
const Main = ({ currentPage, navigate }) => {
    const [basePath, postId] = currentPage.split('/');

    // Simulação do Switch/Routes
    switch (basePath) {
        case '': // Rota base '/'
            return <Inicial navigate={navigate} />;
        case 'aulas':
            return <Aulas navigate={navigate} />;
        case 'equipe':
            return <Equipe navigate={navigate} />;
        case 'galeria':
            return <Galeria navigate={navigate} />;
        case 'grafico':
            return <Grafico navigate={navigate} />;
        case 'post':
            // Se o caminho for /post/ID, renderiza o componente Post com o ID
            return <Post postId={postId} />;
        default:
            return (
                <div className="container" style={{paddingTop: '50px'}}>
                    <h2>Página Não Encontrada</h2>
                    <p>Caminho: {currentPage}</p>
                    <a href="#" className="cta-button" onClick={() => navigate('/')}>Voltar para Home</a>
                </div>
            );
    }
};

export default Main;