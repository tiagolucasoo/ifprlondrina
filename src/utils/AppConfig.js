import React from 'react';

// --- DADOS MOCKADOS E ROTAS ---

export const navItems = [
    { name: "Home", path: "/" },
    { name: "Equipe", path: "/equipe" },
    { name: "Dashboard", path: "/grafico" },
    { name: "Galeria", path: "/galeria" },
    { name: "Aulas", path: "/aulas" },
];

export const teamMembers = [
    { id: 1, name: "Prof(a). Maria de Souza", role: "Coordenadora do Módulo de Programação", desc: "Especialista em metodologias ativas e apaixonada por transformar conceitos complexos em projetos práticos e acessíveis.", email: "maria.souza@ifpr.edu.br", linkedin: "https://linkedin.com/in/mariadesouza", img: "https://picsum.photos/300/300?random=31" },
    { id: 2, name: "Prof. João Carlos", role: "Especialista em Infraestrutura e Redes", desc: "Focado em desmistificar a área de redes e segurança, incentivando a abordagem prática para resolver problemas reais de TI.", email: "joao.carlos@ifpr.edu.br", linkedin: "https://linkedin.com/in/joaocarlos", img: "https://picsum.photos/300/300?random=32" },
    { id: 3, name: "Lucas Ferreira", role: "Estudante Colaborador (Documentação)", desc: "Responsável por auxiliar na organização e estruturação dos conteúdos do Diário de Bordo e na curadoria de mídia.", email: "lucas.ferreira@ifpr.edu.br", linkedin: "https://linkedin.com/in/lucasferreira", img: "https://picsum.photos/300/300?random=33" },
];

export const lessons = [
    { id: 1, category: "Módulo 1", title: "Implementando Aprendizagem Baseada em Projetos", excerpt: "Nesta aula, exploramos os conceitos fundamentais de variáveis e como os dados são armazenados...", date: "25 de Outubro de 2023", img: "https://picsum.photos/400/225?random=4" },
    { id: 2, category: "Módulo 1", title: "Aula 02: Estruturas de Repetição", excerpt: "Aprenda como utilizar 'for' e 'while' para otimizar tarefas repetitivas no seu código.", date: "18 de Outubro de 2023", img: "https://picsum.photos/400/225?random=5" },
    { id: 3, category: "Módulo 1", title: "Aula 03: Estruturas de Dados", excerpt: "Uma visão geral sobre arrays, listas e suas aplicações práticas no desenvolvimento de software.", date: "11 de Outubro de 2023", img: "https://picsum.photos/400/225?random=6" },
    { id: 4, category: "Técnicas de Ensino", title: "Gamificação: Engajamento com Desafios", excerpt: "Transforme sua sala de aula em um jogo com pontuações e rankings para motivar os alunos.", date: "05 de Setembro de 2023", img: "https://picsum.photos/400/225?random=7" },
];

export const galleryPhotos = [
    { id: 11, alt: "Estudantes trabalhando em grupo em um laboratório.", src: "https://picsum.photos/400/400?random=11" },
    { id: 12, alt: "Diagrama complexo desenhado em um quadro branco.", src: "https://picsum.photos/400/400?random=12" },
    { id: 13, alt: "Professor(a) interagindo com um aluno durante a aula.", src: "https://picsum.photos/400/400?random=13" },
    { id: 14, alt: "Robôs programados por alunos em uma bancada de testes.", src: "https://picsum.photos/400/400?random=14" },
    { id: 15, alt: "Close-up de um código-fonte em um monitor.", src: "https://picsum.photos/400/400?random=15" },
    { id: 16, alt: "Alunos fazendo uma apresentação de slides na frente da turma.", src: "https://picsum.photos/400/400?random=16" },
    { id: 17, alt: "Livros e materiais didáticos organizados em uma mesa.", src: "https://picsum.photos/400/400?random=17" },
    { id: 18, alt: "Sessão de brainstorming com notas adesivas em um mural.", src: "https://picsum.photos/400/400?random=18" },
    { id: 19, alt: "Alunos utilizando microscópios em laboratório de ciências.", src: "https://picsum.photos/400/400?random=19" },
    { id: 20, alt: "Evento de apresentação de projetos com público.", src: "https://picsum.photos/400/400?random=20" },
];

export const metrics = [
    { value: "92%", title: "Taxa Média de Engajamento", desc: "Satisfação e participação ativa dos alunos nos projetos.", icon: "trending_up" },
    { value: "35", title: "Projetos de Software Entregues", desc: "Total de projetos funcionais desenvolvidos pelos estudantes.", icon: "assignment" },
    { value: "4", title: "Ferramentas Profissionais Usadas", desc: "Média de softwares ou linguagens exploradas por módulo.", icon: "build" },
    { value: "80+", title: "Horas de Feedback e Mentoria", desc: "Tempo dedicado ao desenvolvimento individual de cada aluno.", icon: "schedule" },
];

export const getPostContent = (postId) => {
    // garante número (postId pode vir como string)
    const id = Number(postId);

    // Conteúdo detalhado mockado para o post principal (id = 1)
    if (id === 1) {
        return {
            id: 1,
            title: "Implementando Aprendizagem Baseada em Projetos no Ensino Médio",
            author: "Prof. Joana da Silva",
            date: "15 de Agosto de 2024",
            image: "https://picsum.photos/1000/500?random=7",
            content: (
                <>
                    <p>Este é o parágrafo introdutório do artigo, descrevendo o contexto inicial da experiência de ensino. O objetivo deste diário de bordo é documentar a transição de um modelo de aula expositiva para uma abordagem de Aprendizagem Baseada em Projetos (PBL) com a turma do 2º ano de Informática, focando em como essa mudança impactou o engajamento e a autonomia dos estudantes.</p>
                    <h2>O Desafio Inicial</h2>
                    <p>O principal desafio era quebrar a passividade dos alunos. As aulas tradicionais, embora ricas em conteúdo, geravam pouco envolvimento prático. A hipótese era que, ao colocar os estudantes como protagonistas de um projeto real, com entregas concretas, o interesse e a retenção do conhecimento seriam significativamente maiores.</p>
                    <blockquote>
                        <p>"A chave não era apenas ensinar a programar, mas inspirá-los a resolver problemas usando a programação como ferramenta."</p>
                    </blockquote>
                    <h3>Etapas do Projeto</h3>
                    <p>A implementação foi dividida em fases claras para guiar os alunos ao longo do semestre. A estrutura foi pensada para construir o conhecimento de forma incremental:</p>
                    <ul>
                        <li>Definição do Problema: Brainstorming em grupo para identificar um problema real da escola ou da comunidade que pudesse ser resolvido com um software simples.</li>
                        <li>Planejamento e Escopo: Criação de um documento simples definindo os objetivos, funcionalidades essenciais e o cronograma do projeto.</li>
                        <li>Desenvolvimento e Sprints: Ciclos de desenvolvimento de duas semanas, com apresentações parciais do progresso para a turma.</li>
                        <li>Apresentação Final: Demonstração do projeto final para uma banca de professores e colegas.</li>
                    </ul>
                    <h2>Resultados e Reflexões</h2>
                    <p>O resultado superou as expectativas. O nível de engajamento aumentou drasticamente, e os alunos demonstraram uma notável capacidade de auto-organização e colaboração. Os projetos finais, embora simples, eram funcionais e demonstravam uma compreensão profunda dos conceitos ensinados. A principal lição aprendida foi que, ao confiar na capacidade dos alunos e dar-lhes autonomia, o processo de aprendizagem se torna mais significativo e duradouro.</p>
                </>
            ),
        };
    }

    // Se não for o post 1, tentar montar o post a partir da lista de aulas (fallback)
    const lesson = lessons.find(l => Number(l.id) === id);
    if (lesson) {
        return {
            id: lesson.id,
            title: lesson.title,
            author: lesson.author || 'Equipe IFPR',
            date: lesson.date || '',
            image: lesson.img || '',
            content: (
                <>
                    <p>{lesson.excerpt}</p>
                    <p>Detalhes da aula estão sendo preparados — este é um conteúdo gerado automaticamente a partir do registro da aula.</p>
                </>
            ),
        };
    }

    return null; // Caso o post não seja encontrado
};


export const globalStyles = `
    /* IMPORTANTE: Incluir fontes */
    @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,700;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

    :root {
        /* Cores Base IFPR */
        --color-primary: #007D40;
        --color-secondary: #4CAF50;
        --color-background-light: #F5F5F5;
        --color-surface: #FFFFFF;
        --color-text-main: #212121;
        --color-text-secondary: #616161;
        --color-dark-bg: #0f172a;
        --color-linkedin: #0A66C2; 
        --color-subtle-light: #F5F5F5;

        /* Fontes */
        --font-display: 'Lexend', sans-serif;
        --font-serif: 'Lora', serif;
    }

    /* Reset básico */
    .app-container * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: var(--font-display);
    }
    
    .app-container {
        min-height: 100vh;
        background: var(--color-background-light);
        color: var(--color-text-main);
        line-height: 1.4;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    /* Global Icons */
    .material-symbols-outlined { 
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; 
    }
    .icon-sm {
        width: 1.25rem;
        height: 1.25rem;
        font-size: 1.25rem;
        line-height: 1.25rem;
    }


    /* --- HEADER (NavBar) --- */

    .app-header {
        background: linear-gradient(90deg, var(--color-surface), rgba(0,0,0,0.02));
        border-bottom: 1px solid rgba(0,0,0,0.06);
        padding: 0;
    }

    /* Container de Conteúdo Centralizado */
    .container {
        max-width: 1100px; 
        margin: 0 auto; 
        padding: 0 16px; 
    }

    /* Conteúdo interno do Header */
    .header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        padding: 18px 0;
    }

    /* Logo e Títulos */
    .logo-area {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .ifpr-logo {
        width: 50px; 
        height: 50px;
        object-fit: contain;
    }
    .titles h1 {
        font-size: 1.5rem;
        color: var(--color-primary);
        line-height: 1.2;
    }
    .titles h2 {
        font-size: 1rem;
        color: var(--color-text-secondary);
        font-weight: 500;
    }

    /* Navegação */
    nav {
        display: flex;
        gap: 12px;
        align-items: center;
    }
    nav a {
        color: var(--color-text-secondary);
        padding: 8px 12px;
        border-radius: 8px;
        transition: all .18s ease;
        cursor: pointer;
    }
    nav a:hover, nav a.active {
        color: var(--color-surface);
        background: var(--color-primary);
    }
    nav a.active {
        font-weight: 600;
    }
    
    /* --- MAIN AREA - Estilos Gerais --- */
    main {
        padding: 40px 0;
    }
    .main-section {
        padding-top: 20px;
    }
    .page-header {
        margin-bottom: 30px;
    }
    .page-header h1, .page-header h2 {
        font-size: 2rem;
        margin-bottom: 8px;
        color: var(--color-dark-bg);
    }
    .page-header p {
        color: var(--color-text-secondary);
    }

    /* Botão CTA */
    .cta-button {
        display:inline-block;
        background: var(--color-primary);
        color: var(--color-surface);
        padding: 12px 18px;
        border-radius: 10px;
        text-decoration: none;
        transition: background-color 0.2s ease, transform 0.1s ease;
        font-weight: 600;
    }
    .cta-button:hover {
        background-color: var(--color-secondary);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    /* Cards e Grids (Geral) */
    .cards-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }

    /* --- HOME (inicial.js) --- */

    /* Hero / Chamada Principal */
    .hero {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        padding: 28px 0 60px 0;
    }
    .hero-text h1 {
        font-size: 2rem;
        margin-bottom: 12px;
        color: var(--color-dark-bg);
    }
    .hero-text p {
        color: var(--color-text-secondary);
        margin-bottom: 20px;
    }

    /* Cards na Home */
    .home-card {
        display: flex;
        width: calc(33.333% - 10.66px); /* 3 colunas */
        background: var(--color-surface);
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 6px 18px rgba(16,24,40,0.06);
        transition: transform .16s ease, box-shadow .16s ease;
        cursor: pointer;
    }
    .home-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 18px 30px rgba(16,24,40,0.08);
    }
    .home-card-image {
        width: 40%;
        background-size: cover;
        background-position: center;
        min-height: 110px;
    }
    .home-card-content {
        padding: 12px;
        display: flex;
        flex-direction: column; 
        justify-content: center;
        width: 60%;
    }
    .home-card-content h3 {
        font-size: 1rem;
        color: var(--color-dark-bg);
    }
    .card-action span {
        display:inline-block;
        color:var(--color-primary);
        padding:4px 8px;
        margin-top: 6px;
        border-radius:6px;
        font-size: 0.85rem;
        font-weight: 500;
        border: 1px solid var(--color-primary);
        transition: background 0.16s ease;
    }
    .home-card:hover .card-action span {
        background: var(--color-primary);
        color: var(--color-surface);
    }

    /* --- AULAS (aulas.js) --- */
    
    .filters {
        display: flex;
        gap: 10px;
        margin-bottom: 30px;
    }
    .filters button {
        background: var(--color-surface);
        color: var(--color-text-secondary);
        border: 1px solid rgba(0,0,0,0.1);
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 0.9rem;
    }
    .filters button:hover {
        background: var(--color-subtle-light);
    }
    .filters button.active {
        background: var(--color-primary);
        color: var(--color-surface);
        border-color: var(--color-primary);
    }
    
    /* Cards de Lista de Aulas */
    .lesson-card {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        background: var(--color-surface);
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(16,24,40,0.04);
        overflow: hidden;
        transition: box-shadow 0.2s ease;
        cursor: pointer;
    }
    .lesson-card:hover {
        box-shadow: 0 8px 16px rgba(16,24,40,0.08);
    }
    .lesson-card-image {
        width: 300px;
        height: 180px;
        object-fit: cover;
        flex-shrink: 0;
    }
    .lesson-card-content {
        padding: 20px;
    }
    .lesson-card-content span {
        display: block;
        color: var(--color-primary);
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.85rem;
        margin-bottom: 4px;
    }
    .lesson-card-content h3 {
        font-size: 1.3rem;
        color: var(--color-dark-bg);
        margin-bottom: 8px;
    }
    .lesson-card-content p:last-child {
        font-size: 0.85rem;
        color: var(--color-text-secondary);
        margin-top: 10px;
    }
    
    /* Paginação */
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        margin-top: 40px;
    }
    .pagination a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        background: var(--color-surface);
        border: 1px solid rgba(0,0,0,0.1);
        transition: background 0.1s;
        cursor: pointer;
    }
    .pagination a:hover, .pagination a.active {
        background: var(--color-primary);
        color: var(--color-surface);
        border-color: var(--color-primary);
    }
    .pagination .material-symbols-outlined {
        font-size: 1.25rem;
    }

    /* --- EQUIPE (equipe.js) --- */
    
    .team-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: flex-start;
        padding-top: 20px;
    }
    .team-member {
        width: calc(33.333% - 20px);
        background: var(--color-surface);
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 4px 12px rgba(16,24,40,0.05);
        text-align: center;
    }
    .team-member-img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        margin: 0 auto 15px auto;
        border: 3px solid var(--color-primary);
        box-shadow: 0 0 0 4px var(--color-surface);
    }
    .team-member h3 {
        font-size: 1.2rem;
        color: var(--color-dark-bg);
        margin-bottom: 4px;
    }
    .team-member p:nth-of-type(1) {
        color: var(--color-primary);
        font-weight: 500;
        margin-bottom: 15px;
    }
    .team-member-desc {
        font-size: 0.95rem;
        color: var(--color-text-secondary);
        margin-bottom: 20px;
        min-height: 55px;
    }
    .team-links a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 0.9rem;
        padding: 6px 0;
        border-radius: 6px;
        transition: background 0.15s;
        margin-bottom: 8px;
    }
    .team-links a:hover {
        background: var(--color-subtle-light);
    }
    .team-links a svg {
        width: 1.25rem;
        height: 1.25rem;
        color: var(--color-linkedin);
    }
    .team-links a:nth-child(1) svg {
        color: var(--color-text-secondary);
    }
    .team-links a:nth-child(1):hover {
        color: var(--color-primary);
    }

    /* --- GALERIA (galeria.js) --- */
    
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 15px;
    }
    .gallery-item {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s;
        height: 250px; /* Altura fixa para o grid */
    }
    .gallery-item:hover {
        transform: scale(1.03);
    }
    .gallery-item img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
    .gallery-cta {
        margin-top: 40px;
        padding: 30px;
        background: var(--color-surface);
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 4px 12px rgba(16,24,40,0.05);
    }
    .gallery-cta h4 {
        color: var(--color-dark-bg);
        margin-bottom: 8px;
        font-size: 1.4rem;
    }
    .gallery-cta p {
        color: var(--color-text-secondary);
        margin-bottom: 20px;
    }

    /* --- DASHBOARD (grafico.js) --- */

    .metrics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding-top: 20px;
    }
    .metric-card {
        background: var(--color-surface);
        border-radius: 10px;
        padding: 25px;
        box-shadow: 0 4px 12px rgba(16,24,40,0.05);
        text-align: center;
    }
    .metric-icon-wrapper {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: var(--color-primary);
        color: var(--color-surface);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 15px auto;
    }
    .metric-icon-wrapper .material-symbols-outlined {
        font-size: 30px;
        line-height: 1;
        font-variation-settings: 'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 30;
    }
    .metric-card p {
        font-size: 3rem;
        font-weight: 700;
        color: var(--color-dark-bg);
        margin-bottom: 5px;
        line-height: 1.1;
    }
    .metric-card h3 {
        font-size: 1.1rem;
        color: var(--color-primary);
        margin-bottom: 5px;
    }
    .metric-card-desc {
        font-size: 0.9rem;
        color: var(--color-text-secondary);
    }
    .dashboard-cta {
        margin-top: 50px;
        text-align: center;
    }


    /* --- POST (post.js) --- */
    .post-article {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px 0;
    }
    .post-article > h1 {
        font-size: 2.5rem;
        line-height: 1.2;
        margin-bottom: 10px;
        color: var(--color-dark-bg);
    }
    .post-article > p {
        font-size: 0.95rem;
        color: var(--color-text-secondary);
        margin-bottom: 25px;
    }
    .post-image {
        width: 100%;
        height: 350px;
        background-size: cover;
        background-position: center;
        border-radius: 10px;
        margin-bottom: 30px;
    }
    .post-content {
        font-family: var(--font-serif);
        line-height: 1.7;
        font-size: 1.15rem;
        color: #333;
    }
    .post-content h2 {
        font-family: var(--font-display);
        font-size: 1.8rem;
        color: var(--color-dark-bg);
        margin-top: 35px;
        margin-bottom: 15px;
        border-left: 4px solid var(--color-primary);
        padding-left: 15px;
        font-weight: 700;
    }
    .post-content h3 {
        font-family: var(--font-display);
        font-size: 1.4rem;
        color: var(--color-primary);
        margin-top: 25px;
        margin-bottom: 10px;
    }
    .post-content p {
        margin-bottom: 20px;
    }
    .post-content ul {
        margin: 20px 0 20px 20px;
        padding-left: 15px;
        list-style-type: disc;
    }
    .post-content li {
        margin-bottom: 8px;
    }
    .post-content blockquote {
        border-left: 5px solid var(--color-secondary);
        padding: 15px 20px;
        background: var(--color-subtle-light);
        margin: 30px 0;
        font-style: italic;
        color: var(--color-text-main);
        border-radius: 0 8px 8px 0;
    }


    /* --- RESPONSIVIDADE GERAL --- */
    @media (max-width: 900px) {
        .hero {
            flex-direction: column;
            align-items: flex-start;
        }
        .home-card {
            width: calc(50% - 8px);
        }
        .team-member {
            width: calc(50% - 15px);
        }
        .lesson-card {
            flex-direction: column;
        }
        .lesson-card-image {
            width: 100%;
            height: 200px;
        }
        .metric-card p {
            font-size: 2.5rem;
        }
    }

    @media (max-width: 600px) {
        .header-content {
            flex-direction: column; 
            align-items: flex-start;
            padding: 12px 0;
        }
        .titles h1 {
            font-size: 1.25rem;
        }
        .container {
            padding: 0 12px;
        }
        .home-card {
            width: 100%;
            flex-direction: column;
        }
        .home-card-image {
            width: 100%;
            min-height: 150px;
        }
        .home-card-content {
            width: 100%;
        }
        .team-member {
            width: 100%;
        }
        .post-article > h1 {
            font-size: 1.8rem;
        }
        .post-image {
            height: 200px;
        }
        .post-content h2 {
            font-size: 1.6rem;
        }
    }
    
    /* --- FOOTER --- */
    footer {
        border-top: 1px solid rgba(0,0,0,0.05);
        background: transparent;
        padding: 0;
        margin-top: 40px;
    }
    footer .container {
        padding: 16px 0;
        text-align: center;
        color: var(--color-text-secondary);
    }
`;