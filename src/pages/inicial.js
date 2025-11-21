import React, { useState, useEffect } from 'react'; // <--- Adicionado useState e useEffect
import { lessons } from '../utils/AppConfig.js'; // 'lessons' agora é a função assíncrona fetchLessons

const Inicial = ({ navigate }) => {
    const [recentLessons, setRecentLessons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadLessons = async () => {
            try {
                const allLessons = await lessons(); // Chama a função assíncrona
                // Exibe os 3 primeiros (assumindo que a ordenação está no fetch)
                setRecentLessons(allLessons.slice(0, 3)); 
            } catch (error) {
                console.error("Erro ao carregar aulas: ", error);
                setRecentLessons([]);
            } finally {
                setLoading(false);
            }
        };

        loadLessons();
    }, []);

    return (
        <div className="container">
            <section className="hero">
                <div className="hero-text">
                    <h1>Compartilhando as jornadas do ensino, uma aula de cada vez.</h1>
                    <p>Explore reflexões, estratégias e experiências reais da sala de aula.</p>
                </div>
                <a href="#" className="cta-button" onClick={(e) => { e.preventDefault(); navigate('/aulas'); }}>
                    Ver Todas as Aulas
                </a>
            </section>

            <section className="main-section recent-posts">
                <h2 className="section-title">Registros Recentes</h2>
                
                {loading && <p>Carregando aulas recentes...</p>} {/* <--- Indicador de carregamento */}
                {!loading && recentLessons.length === 0 && <p>Nenhuma aula encontrada.</p>} {/* <--- Indicador de array vazio */}

                <div className="cards-grid">
                    {recentLessons.map(lesson => ( // Usa o estado 'recentLessons'
                        <a key={lesson.id} href="#" onClick={(e) => { e.preventDefault(); navigate(`/post/${lesson.id}`); }} className="home-card">
                            <div className="home-card-image" style={{ backgroundImage: `url(${lesson.image || lesson.img})` }}></div>
                            <div className="home-card-content">
                                <div>
                                    <h3>{lesson.title}</h3>
                                    <p>{lesson.excerpt ? lesson.excerpt.substring(0, 60) : 'Sem resumo'}...</p>
                                </div>
                                <div className="card-action">
                                    <span>Ler Post</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Inicial;