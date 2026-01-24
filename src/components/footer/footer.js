import React from 'react';

const Footer = () => (
    <footer>
        <div className="container">
                <p>© {new Date().getFullYear()} - Diário de Bordo | Extensão IFPR Londrina</p>
                <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>
                    Desenvolvido por <a href="https://github.com/tiagolucasoo" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 'bold', marginLeft: '5px' }}>
                        Tiago Lucas Oliveira
                    </a> e Equipe ADS IFPR Londrina.
                </p>
            </div>
    </footer>
);

export default Footer;
