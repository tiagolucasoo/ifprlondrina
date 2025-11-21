import React, { useState, useMemo, useEffect } from 'react'; // <--- Adicionado useEffect
import { lessons } from '../utils/AppConfig.js'; // 'lessons' agora é a função assíncrona fetchLessons

const Aulas = ({ navigate }) => {
    const [allLessons, setAllLessons] = useState([]); // <--- Novo estado para todas as aulas
    const [filter, setFilter] = useState('Todos');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAllLessons = async () => {
            try {
                const fetchedLessons = await lessons(); // Chama a função assíncrona
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

    // Determina categorias únicas para os botões de filtro, agora a partir de 'allLessons'
    const categories = useMemo(() => {
        return ['Todos', ...new Set(allLessons.map(l => l.category))];
    }, [allLessons]);

    // Filtra as aulas baseado no estado de 'filter'
    const filteredLessons = useMemo(() => {
        return filter === 'Todos' ? allLessons : allLessons.filter(l => l.category === filter);
    }, [filter, allLessons]); // Depende de 'allLessons'

    return (
        <div className="container">
            <section className="main-section">
                <div className="page-header">
                    <h1>Arquivo do Diário</h1>
                    <p>Explore todas as aulas e experiências documentadas, filtrando por categoria.</p>
                </div>
                
                {/* Filtros */}
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

                {/* Lista de Aulas */}
                {loading && <p>Carregando arquivo de aulas...</p>} {/* <--- Indicador de carregamento */}
                {!loading && filteredLessons.length === 0 && <p>Nenhuma aula encontrada para a categoria selecionada.</p>}

                {!loading && (
                    <div className="lessons-list">
                        {filteredLessons.map(lesson => (
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