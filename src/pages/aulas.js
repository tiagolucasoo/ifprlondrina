import React, { useState, useMemo } from 'react';
import { lessons } from '../utils/AppConfig.js';

const Aulas = ({ navigate }) => {
    const [filter, setFilter] = useState('Todos');

    // Determina categorias únicas para os botões de filtro
    const categories = ['Todos', ...new Set(lessons.map(l => l.category))];

    // Filtra as aulas baseado no estado de 'filter'
    const filteredLessons = useMemo(() => {
        return filter === 'Todos' ? lessons : lessons.filter(l => l.category === filter);
    }, [filter]);

    return (
        <div className="container">
            <section className="main-section">
                <div className="page-header">
                    <h1>Arquivo do Diário</h1>
                    <p>Explore todas as aulas e experiências documentadas, filtrando por categoria.</p>
                </div>
                
                <div className="filters">
                    {categories.map(cat => (
                        <button 
                            key={cat} 
                            onClick={() => setFilter(cat)}
                            className={filter === cat ? 'active' : ''}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="lessons-list">
                    {filteredLessons.map(lesson => (
                        <a key={lesson.id} href="#" onClick={() => navigate(`/post/${lesson.id}`)} className="lesson-card">
                            <img src={lesson.img} alt={lesson.title} className="lesson-card-image" />
                            <div className="lesson-card-content">
                                <span>{lesson.category}</span>
                                <h3>{lesson.title}</h3>
                                <p>{lesson.excerpt}</p>
                                <p>{lesson.date}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Paginação Mockada */}
                <div className="pagination">
                    <a href="#" className="active" onClick={(e) => e.preventDefault()}>1</a>
                    <a href="#" onClick={(e) => e.preventDefault()}>2</a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        <span className="material-symbols-outlined">chevron_right</span>
                    </a>
                </div>

            </section>
        </div>
    );
};

export default Aulas;