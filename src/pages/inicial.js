import React from 'react';
import aulas from '../data/aulas.json';
import Footer from '../components/footer/footer';

const Inicial = ({ navigate }) => {
    // Pegamos os 3 registros mais recentes do JSON
    const aulasRecentes = aulas.slice(0, 3);

    return (
        <div className="container">
            <section className="hero">
                <div className="hero-text">
                    <h1>Compartilhando as jornadas do ensino, uma aula de cada vez.</h1>
                    <p>Explore reflexões, estratégias e experiências reais da sala de aula.</p>
                </div>
                <button 
                    className="cta-button" 
                    style={{ border: 'none', cursor: 'pointer' }}
                    onClick={() => navigate('/aulas')}
                >
                    Ver Todas as Aulas
                </button>
            </section>

            <section className="main-section recent-posts">
                <h2 className="section-title">Registros Recentes</h2>
                
                {aulasRecentes.length === 0 && <p>Nenhuma aula encontrada.</p>}

                <div className="cards-grid">
                    {aulasRecentes.map(lesson => (
                        <div 
                            key={lesson.id} 
                            onClick={() => navigate(`/post/${lesson.id}`)} 
                            className="home-card"
                            style={{ cursor: 'pointer' }}
                        >
                            <div 
                                className="home-card-image" 
                                style={{ backgroundImage: `url(${lesson.image_url || lesson.image})` }}
                            ></div>
                            <div className="home-card-content">
                                <div>
                                    <h3>{lesson.title}</h3>
                                    <p>{lesson.excerpt ? lesson.excerpt.substring(0, 75) : 'Sem resumo'}...</p>
                                </div>
                                <div className="card-action">
                                    <span>Ler Post</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Inicial;