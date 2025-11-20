import React from 'react';
import { lessons } from '../utils/AppConfig.js';

const Inicial = ({ navigate }) => (
    <div className="container">
        <section className="hero">
            <div className="hero-text">
                <h1>Compartilhando as jornadas do ensino, uma aula de cada vez.</h1>
                <p>Explore reflexões, estratégias e experiências reais da sala de aula.</p>
            </div>
            <a href="#" className="cta-button" onClick={() => navigate('/aulas')}>
                Ver Todas as Aulas
            </a>
        </section>

        <section className="main-section recent-posts">
            <h2 className="section-title">Registros Recentes</h2>
            <div className="cards-grid">
                {lessons.slice(0, 3).map(lesson => (
                    <a key={lesson.id} href="#" onClick={() => navigate(`/post/${lesson.id}`)} className="home-card">
                        <div className="home-card-image" style={{ backgroundImage: `url(${lesson.img})` }}></div>
                        <div className="home-card-content">
                            <div>
                                <h3>{lesson.title}</h3>
                                <p>{lesson.excerpt.substring(0, 60)}...</p>
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

export default Inicial;