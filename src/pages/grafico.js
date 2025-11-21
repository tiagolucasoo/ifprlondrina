import React, { useEffect, useState } from 'react';
import { fetchMetrics } from '../utils/supabaseClient.js';
import { metrics as metricsFallback } from '../utils/AppConfig.js';

const Grafico = ({ navigate }) => {
    const [metrics, setMetrics] = useState(metricsFallback || []);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        const load = async () => {
            try {
                const remote = await fetchMetrics();
                if (mounted && remote && remote.length > 0) {
                    setMetrics(remote);
                }
            } catch (err) {
                // Mantém fallback
                // eslint-disable-next-line no-console
                console.error('Erro ao carregar métricas remotas', err);
            } finally {
                if (mounted) setLoading(false);
            }
        };
        load();
        return () => { mounted = false; };
    }, []);

    return (
        <div className="container">
            <section className="main-section">
                <div className="page-header">
                    <h2>Impacto e Resultados das Aulas</h2>
                    <p>Uma visão geral das métricas e conquistas alcançadas através das metodologias ativas implementadas.</p>
                </div>

                <div className="metrics-grid">
                    {loading && metrics.length === 0 && (
                        // mostra fallback simples enquanto carrega
                        <div style={{gridColumn: '1 / -1', textAlign: 'center'}}>Carregando métricas...</div>
                    )}

                    {metrics.map((metric, index) => (
                        <div key={index} className="metric-card">
                            <div className="metric-icon-wrapper">
                                {/* Se o campo icon for uma URL, renderiza imagem; caso contrário, assume material symbol */}
                                {metric.icon && (metric.icon.startsWith('http') || metric.icon.startsWith('/')) ? (
                                    <img src={metric.icon} alt={metric.title || 'icone'} className="metric-icon-img" />
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
                    <a href="#" className="cta-button" onClick={(e) => { e.preventDefault(); navigate('/aulas'); }}>
                        Ver Todas as Aulas
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Grafico;