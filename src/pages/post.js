import React from 'react';
import { getPostContent } from '../utils/AppConfig.js';

const Post = ({ postId }) => {
    // Simula a busca do post, dependendo do postId (extraído da rota)
    const post = getPostContent(postId);

    if (!post) {
        return (
            <div className="container">
                <section className="main-section">
                    <div className="post-article">
                        <h1>Post não encontrado</h1>
                        <p>Desculpe, o artigo com o ID {postId} não pôde ser carregado.</p>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="container">
            <section className="main-section">
                <article className="post-article">
                    {/* Imagem como elemento <img> para melhor compatibilidade e acessibilidade */}
                    <img src={post.image} alt={`Imagem relacionada ao post: ${post.title}`} className="post-image" />

                    <div className="post-meta">
                        <span className="post-tag">Por {post.author}</span>
                        <span className="post-date">Publicado em {post.date}</span>
                    </div>

                    <h1>{post.title}</h1>

                    <div className="post-content">
                        {/* Renderiza o conteúdo JSX mockado */}
                        {post.content}
                    </div>
                </article>
            </section>
        </div>
    );
};

export default Post;