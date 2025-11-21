import React, { useEffect, useState } from 'react';
import { galleryPhotos } from '../utils/AppConfig.js';
import { fetchGallery } from '../utils/supabaseClient.js';

const Galeria = ({ navigate }) => {
    const [photos, setPhotos] = useState(galleryPhotos || []);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        const load = async () => {
            try {
                const remote = await fetchGallery();
                if (mounted && Array.isArray(remote) && remote.length > 0) {
                    setPhotos(remote);
                }
            } catch (err) {
                console.error('Erro ao carregar galeria do Supabase:', err);
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
                    <h2>Momentos em Sala de Aula</h2>
                    <p>Registros visuais de projetos, atividades práticas e interações em diferentes módulos de ensino.</p>
                </div>

                {loading && <p>Carregando galeria...</p>}

                <div className="gallery-grid">
                    {photos.map(photo => (
                        <a key={photo.id || photo.src} href="#" onClick={(e) => e.preventDefault()} className="gallery-item">
                            <img src={photo.src || photo.image || photo.url} alt={photo.alt || ''} />
                        </a>
                    ))}
                </div>

                <div className="gallery-cta">
                    <h4>Quer saber mais sobre o contexto de cada foto?</h4>
                    <p>Os posts do nosso diário detalham as atividades e aprendizados de cada momento.</p>
                    <a href="#" className="cta-button" onClick={(e) => { e.preventDefault(); navigate('/aulas'); }}>
                        Ver Todas as Experiências
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Galeria;