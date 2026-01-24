import React from 'react';
import fotos from '../data/galeria.json';
import Footer from '../components/footer/footer';

const Galeria = ({ navigate }) => {
    return (
        <div className="container">
            <section className="main-section">
                <div className="page-header">
                    <h2>Momentos em Sala de Aula</h2>
                    <p>Registros visuais de projetos, atividades práticas e interações em diferentes módulos de ensino.</p>
                </div>

                <div className="gallery-grid">
                    {fotos.map(photo => (
                        <div key={photo.id} className="gallery-item">
                            <img 
                                src={photo.src} 
                                alt={photo.alt || 'Registro de atividade IFPR'} 
                                loading="lazy" // Boa prática para performance em galerias grandes
                            />
                        </div>
                    ))}
                </div>

                <div className="gallery-cta">
                    <h4>Quer saber mais sobre o contexto de cada foto?</h4>
                    <p>Os posts do nosso diário detalham as atividades e aprendizados de cada momento.</p>
                    <button 
                        className="cta-button" 
                        style={{ border: 'none', cursor: 'pointer' }}
                        onClick={() => navigate('/aulas')}
                    >
                        Ver Todas as Experiências
                    </button>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Galeria;