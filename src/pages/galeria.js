import React from 'react';
import { galleryPhotos } from '../utils/AppConfig.js';

const Galeria = ({ navigate }) => (
    <div className="container">
        <section className="main-section">
            <div className="page-header">
                <h2>Momentos em Sala de Aula</h2>
                <p>Registros visuais de projetos, atividades práticas e interações em diferentes módulos de ensino.</p>
            </div>

            <div className="gallery-grid">
                {galleryPhotos.map(photo => (
                    <a key={photo.id} href="#" onClick={(e) => e.preventDefault()} className="gallery-item">
                        <img src={photo.src} alt={photo.alt} />
                    </a>
                ))}
            </div>
            
            <div className="gallery-cta">
                <h4>Quer saber mais sobre o contexto de cada foto?</h4>
                <p>Os posts do nosso diário detalham as atividades e aprendizados de cada momento.</p>
                <a href="#" className="cta-button" onClick={() => navigate('/aulas')}>
                    Ver Todas as Experiências
                </a>
            </div>
        </section>
    </div>
);

export default Galeria;