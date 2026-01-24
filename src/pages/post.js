import React from 'react';
import aulas from '../data/aulas.json';
import Footer from '../components/footer/footer';

const Post = ({ postId }) => {
    // Busca o post no JSON local pelo ID
    const post = aulas.find(item => item.id === Number(postId));

    // Se o post não existir (ex: ID errado na URL)
    if (!post) {
        return (
            <div className="container">
                <section className="main-section">
                    <div className="post-article">
                        <h1>Post não encontrado</h1>
                        <p>Desculpe, o artigo com o ID {postId} não pôde ser localizado.</p>
                    </div>
                </section>
            </div>
        );
    }

    // Formatação da data (caso queira tratar o formato do banco)
    const dataFormatada = post.published_at 
        ? new Date(post.published_at).toLocaleDateString('pt-BR') 
        : 'Data não disponível';

    return (
        <div className="container">
            <section className="main-section">
                <article className="post-article">
                    {/* Imagem do Cabeçalho */}
                    {(post.image_url || post.image) && (
                        <img 
                            src={post.image_url || post.image} 
                            alt={`Imagem de: ${post.title}`} 
                            className="post-image" 
                        />
                    )}

                    <div className="post-meta">
                        <span className="post-tag">Por {post.author || 'Equipe IFPR'}</span>
                        <span className="post-date"> • {dataFormatada}</span>
                    </div>

                    <h1>{post.title}</h1>

                    {/* Conteúdo Renderizado (HTML vindo do JSON) */}
                    <div className="post-content">
                        {post.content ? (
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        ) : (
                            <p>{post.excerpt}</p>
                        )}
                    </div>
                </article>
            </section>
            <Footer/>
        </div>
    );
};

export default Post;