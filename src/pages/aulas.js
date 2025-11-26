import React, { useState, useMemo, useEffect } from 'react';
import { lessons } from '../utils/AppConfig.js';

const Aulas = ({ navigate }) => {
    const [allLessons, setAllLessons] = useState([]);
    const [filter, setFilter] = useState('Todos');
    const [loading, setLoading] = useState(true);
    
    // 1. NOVO: Estado para paginação
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Quantidade de aulas por página

    useEffect(() => {
        const loadAllLessons = async () => {
            try {
                const fetchedLessons = await lessons();
                setAllLessons(fetchedLessons);
            } catch (error) {
                console.error("Erro ao carregar todas as aulas: ", error);
                setAllLessons([]);
            } finally {
                setLoading(false);
            }
        };
        loadAllLessons();
    }, []);

    const categories = useMemo(() => {
        return ['Todos', ...new Set(allLessons.map(l => l.category))];
    }, [allLessons]);

    const filteredLessons = useMemo(() => {
        return filter === 'Todos' ? allLessons : allLessons.filter(l => l.category === filter);
    }, [filter, allLessons]);

    // 2. NOVO: Resetar para página 1 quando trocar o filtro
    useEffect(() => {
        setCurrentPage(1);
    }, [filter]);

    // 3. NOVO: Lógica para pegar apenas as aulas da página atual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentLessons = filteredLessons.slice(indexOfFirstItem, indexOfLastItem);
    
    // 4. NOVO: Calcular total de páginas
    const totalPages = Math.ceil(filteredLessons.length / itemsPerPage);

    // Função para mudar de página
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

                {loading && <p>Carregando arquivo de aulas...</p>}
                {!loading && currentLessons.length === 0 && <p>Nenhuma aula encontrada.</p>}

                {!loading && (
                    <div className="lessons-list">
                        {/* 5. ALTERADO: Usar 'currentLessons' em vez de 'filteredLessons' */}
                        {currentLessons.map(lesson => (
                            <a key={lesson.id} href="#" onClick={(e) => { e.preventDefault(); navigate(`/post/${lesson.id}`); }} className="lesson-card">
                                <img src={lesson.image || lesson.img} alt={lesson.title} className="lesson-card-image" />
                                <div className="lesson-card-content">
                                    <span>{lesson.category}</span>
                                    <h3>{lesson.title}</h3>
                                    <p>{lesson.excerpt}</p>
                                    <p>{lesson.date}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
                
                {/* 6. ALTERADO: Renderização Dinâmica da Paginação */}
                {totalPages > 1 && (
                    <div className="pagination">
                        {/* Botão Anterior (opcional, pode remover se quiser simplificar) */}
                        <a href="#" 
                           onClick={(e) => { e.preventDefault(); if(currentPage > 1) paginate(currentPage - 1); }}
                           style={{ opacity: currentPage === 1 ? 0.5 : 1, pointerEvents: currentPage === 1 ? 'none' : 'auto' }}>
                           <span className="material-symbols-outlined">chevron_left</span>
                        </a>

                        {/* Números das páginas */}
                        {Array.from({ length: totalPages }, (_, i) => (
                            <a 
                                key={i + 1} 
                                href="#" 
                                onClick={(e) => { e.preventDefault(); paginate(i + 1); }}
                                className={currentPage === i + 1 ? 'active' : ''}
                            >
                                {i + 1}
                            </a>
                        ))}

                        {/* Botão Próximo */}
                        <a href="#" 
                           onClick={(e) => { e.preventDefault(); if(currentPage < totalPages) paginate(currentPage + 1); }}
                           style={{ opacity: currentPage === totalPages ? 0.5 : 1, pointerEvents: currentPage === totalPages ? 'none' : 'auto' }}>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </a>
                    </div>
                )}

            </section>
        </div>
    );
};

export default Aulas;
