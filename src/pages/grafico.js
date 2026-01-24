import React from 'react';
import métricas from '../data/graficos.json';
import Footer from '../components/footer/footer';

const Grafico = ({ navigate }) => {
    return (
        <div className="container">
            <section className="main-section">
                <div className="page-header">
                    <h2>Impacto e Resultados das Aulas</h2>
                    <p>Uma visão geral das métricas e conquistas alcançadas através das metodologias ativas implementadas.</p>
                </div>

                <div className="metrics-grid">
                    {métricas.map((metric) => (
                        <div key={metric.id} className="metric-card">
                            <div className="metric-icon-wrapper">
                                {metric.icon && (metric.icon.startsWith('http') || metric.icon.startsWith('/')) ? (
                                    <img src={metric.icon} alt={metric.title} className="metric-icon-img" />
                                ) : (
                                    <span className="material-symbols-outlined">{metric.icon}</span>
                                )}
                            </div>
                            <p>{metric.value}</p>
                            <h3>{metric.title}</h3>
                            <p className="metric-card-desc">{metric.desc}</p>
                        </div>
                    ))}
                </div>
                
                <div className="dashboard-cta">
                    <h4>Quer ver como chegamos a esses resultados?</h4>
                    <p>Explore os detalhes de cada experiência de aula em nosso arquivo completo.</p>
                    <button 
                        className="cta-button" 
                        style={{ border: 'none', cursor: 'pointer' }}
                        onClick={() => navigate('/aulas')}
                    >
                        Ver Todas as Aulas
                    </button>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Grafico;