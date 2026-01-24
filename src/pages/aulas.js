import React, { useState, useMemo, useEffect } from 'react';
import aulas from '../data/aulas.json'; // Importação direta do JSON
import Footer from '../components/footer/footer';

const Aulas = ({ navigate }) => {
    const [filter, setFilter] = useState('Todos');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Categorias dinâmicas baseadas no que existe no JSON
    const categories = useMemo(() => {
        return ['Todos', ...new Set(aulas.map(l => l.category))];
    }, []);

    // Filtra as aulas localmente
    const filteredLessons = useMemo(() => {
        return filter === 'Todos' ? aulas : aulas.filter(l => l.category === filter);
    }, [filter]);

    // Resetar para página 1 quando trocar o filtro
    useEffect(() => {
        setCurrentPage(1);
    }, [filter]);

    // Lógica de Paginação
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentLessons = filteredLessons.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredLessons.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

                {currentLessons.length === 0 && <p>Nenhuma aula encontrada.</p>}

                <div className="lessons-list">
                    {currentLessons.map(lesson => (
                        <div 
                            key={lesson.id} 
                            onClick={() => navigate(`/post/${lesson.id}`)} 
                            className="lesson-card"
                            style={{ cursor: 'pointer' }}
                        >
                            <img 
                                src={lesson.image_url || lesson.image} 
                                alt={lesson.title} 
                                className="lesson-card-image" 
                            />
                            <div className="lesson-card-content">
                                <span>{lesson.category}</span>
                                <h3>{lesson.title}</h3>
                                <p>{lesson.excerpt}</p>
                                <p className="post-date">
                                    {lesson.published_at ? new Date(lesson.published_at).toLocaleDateString('pt-BR') : ''}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {totalPages > 1 && (
                    <div className="pagination">
                        <button 
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="pag-btn"
                        >
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button 
                                key={i + 1} 
                                onClick={() => paginate(i + 1)}
                                className={currentPage === i + 1 ? 'active' : ''}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button 
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="pag-btn"
                        >
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                )}
            </section>
            <Footer/>
        </div>
    );
};

export default Aulas;