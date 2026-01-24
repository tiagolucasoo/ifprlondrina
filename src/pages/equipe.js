import React from 'react';
import equipe from '../data/equipe.json'; // O nome 'equipe' aqui representa o array dentro do JSON
import Footer from '../components/footer/footer';

const Equipe = () => {
    return (
        <div className="container">
            <section className="main-section">
                <div className="page-header">
                    <h2>Nossa Equipe de Educadores</h2>
                    <p>Conheça os professores e colaboradores responsáveis por ministrar as aulas e documentar as experiências neste diário.</p>
                </div>

                <div className="team-grid">
                    {/* Mapeamos diretamente a variável 'equipe' importada */}
                    {equipe.map(member => (
                        <div key={member.id} className="team-member">
                            <img 
                                src={member.img} 
                                alt={`Foto de perfil de ${member.name}`} 
                                className="team-member-img" 
                            />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                            
                            {/* Verifica se a descrição existe antes de renderizar */}
                            {member.description && (
                                <p className="team-member-desc">{member.description}</p>
                            )}
                            
                            <div className="team-links">
                                {member.email && (
                                    <a href={`mailto:${member.email}`} className="email-btn">
                                        <span className="material-symbols-outlined icon-sm">mail</span>
                                        <span className="email-text">{member.email}</span>
                                    </a>
                                )}
                                
                                {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-btn">
                                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.357 15.393h-2.143v-4.99c0-1.18-.84-1.63-1.53-1.63-.83 0-1.42.54-1.42 1.68v4.94h-2.143V10.35h2.143v.92c.28-.43.76-.84 1.63-.84 1.18 0 2.21.75 2.21 2.38v4.93zM5.893 8.357c-.77 0-1.28-.51-1.28-1.23 0-.71.51-1.23 1.28-1.23.77 0 1.28.52 1.28 1.23 0 .72-.51 1.23-1.28 1.23zM4.75 15.393h2.143V10.35H4.75v5.043z"></path>
                                        </svg>
                                        LinkedIn
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Equipe;