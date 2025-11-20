import React from 'react';
import { teamMembers } from '../utils/AppConfig.js';

const Equipe = () => (
    <div className="container">
        <section className="main-section">
            <div className="page-header">
                <h2>Nossa Equipe de Educadores</h2>
                <p>Conheça os professores e colaboradores responsáveis por ministrar as aulas e documentar as experiências neste diário.</p>
            </div>

            <div className="team-grid">
                {teamMembers.map(member => (
                    <div key={member.id} className="team-member">
                        <img src={member.img} alt={`Foto de perfil de ${member.name}`} className="team-member-img" />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                        <p className="team-member-desc">{member.desc}</p>
                        
                        <div className="team-links">
                            <a href={`mailto:${member.email}`}>
                                <span className="material-symbols-outlined icon-sm">mail</span>
                                {member.email}
                            </a>
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                {/* Icone SVG do LinkedIn, mantido do layout original */}
                                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.357 15.393h-2.143v-4.99c0-1.18-.84-1.63-1.53-1.63-.83 0-1.42.54-1.42 1.68v4.94h-2.143V10.35h2.143v.92c.28-.43.76-.84 1.63-.84 1.18 0 2.21.75 2.21 2.38v4.93zM5.893 8.357c-.77 0-1.28-.51-1.28-1.23 0-.71.51-1.23 1.28-1.23.77 0 1.28.52 1.28 1.23 0 .72-.51 1.23-1.28 1.23zM4.75 15.393h2.143V10.35H4.75v5.043z"></path></svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
);

export default Equipe;