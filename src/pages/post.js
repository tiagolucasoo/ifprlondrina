import React, { useEffect, useState } from 'react';
import { getPostContent } from '../utils/AppConfig.js';
import { fetchPostContent } from '../utils/supabaseClient.js';

const Post = ({ postId }) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        const load = async () => {
            setLoading(true);
            // tenta buscar no Supabase primeiro
            try {
                const idNum = Number(postId);
                const remote = await fetchPostContent(idNum);
                if (remote && mounted) {
                    // mapeia os campos retornados para o shape esperado
                    const mapped = {
                        id: remote.id,
                        title: remote.title,
                        author: remote.author || 'Equipe IFPR',
                        date: remote.published_at || remote.date || '',
                        image: remote.image_url || remote.image || '',
                        // se o conteúdo vier em HTML, usa dangerouslySetInnerHTML no render;
                        // caso contrário, tenta usar texto/summary
                        content: remote.content_html || remote.content || remote.excerpt || '',
                    };
                    setPost(mapped);
                    setLoading(false);
                    return;
                }
            } catch (err) {
                console.error('Erro ao buscar post remoto:', err);
            }

            // fallback para conteúdo local mockado
            const local = getPostContent(postId);
            if (mounted) {
                setPost(local);
                setLoading(false);
            }
        };

        load();
        return () => { mounted = false; };
    }, [postId]);

    if (loading && !post) {
        return (
            <div className="container">
                <section className="main-section">
                    <div className="post-article">
                        <h1>Carregando...</h1>
                    </div>
                </section>
            </div>
        );
    }

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
                    {post.image ? (
                        <img src={post.image} alt={`Imagem relacionada ao post: ${post.title}`} className="post-image" />
                    ) : null}

                    <div className="post-meta">
                        <span className="post-tag">Por {post.author}</span>
                        <span className="post-date">Publicado em {post.date}</span>
                    </div>

                    <h1>{post.title}</h1>

                    <div className="post-content">
                        {/* Se content for string HTML do Supabase, renderiza com dangerouslySetInnerHTML */}
                        {typeof post.content === 'string' ? (
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        ) : (
                            post.content
                        )}
                    </div>
                </article>
            </section>
        </div>
    );
};

export default Post;