import React from 'react';
import { metrics } from '../utils/AppConfig.js';

const Grafico = ({ navigate }) => (
    <div className="container">
        <section className="main-section">
            <div className="page-header">
                <h2>Impacto e Resultados das Aulas</h2>
                <p>Uma visão geral das métricas e conquistas alcançadas através das metodologias ativas implementadas.</p>
            </div>

            <div className="metrics-grid">
                {metrics.map((metric, index) => (
                    <div key={index} className="metric-card">
                        <div className="metric-icon-wrapper">
                            <span className="material-symbols-outlined">{metric.icon}</span>
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
                <a href="#" className="cta-button" onClick={() => navigate('/aulas')}>
                    Ver Todas as Aulas
                </a>
            </div>
        </section>
    </div>
);

export default Grafico;