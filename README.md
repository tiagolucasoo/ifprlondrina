# Extensão IFPR Londrina Turma 2023
- Este projeto é uma aplicação web desenvolvida para servir como Diário de Bordo da turma de extensão "Empreendedorismo em Inglês" do IFPR (Instituto Federal do Paraná) - Campus Londrina.
- O objetivo do sistema é documentar as aulas, apresentar a equipe, mostrar fotos das atividades e exibir métricas de impacto do projeto.
  
**_Nota: Este projeto foi desenvolvido utilizando ferramentas de Inteligência Artificial para agilizar a prototipagem, estruturação do código (React) e estilização._**

## 🚀 Tecnologias Utilizadas
- **React** _(Create React App)_
- **CSS3** _(Estilização responsiva e customizada)_
- **Supabase** _(Backend as a Service para banco de dados e armazenamento de imagens)_

## 📋 Funcionalidades
- **Home:** _Visão geral e destaques recentes._
- **Aulas:** _Listagem e detalhamento das atividades realizadas (com paginação)._
- **Galeria:** _Fotos das dinâmicas e projetos em sala._
- **Equipe:** _Apresentação dos professores e colaboradores._
- **Dashboard:** _Gráficos e métricas de engajamento e resultados._

## ⚙️ Como rodar o projeto
1. Clone o repositório:
```
git clone https://github.com/tiagolucasoo/ifprlondrina.git
cd ifprlondrina
```

2. Instale as dependências:
```
npm install
```
3. Configuração de Ambiente: Crie um arquivo .env na raiz do projeto (baseado no .env.example) e adicione as credenciais do Supabase:
```
Snippet de código
REACT_APP_SUPABASE_URL=sua_url_aqui
REACT_APP_SUPABASE_ANON_KEY=sua_chave_anonima_aqui
```
4. Inicie o servidor de desenvolvimento:
```
npm start
```
_O projeto rodará em http://localhost:3000._
_Desenvolvido como parte das atividades de extensão do IFPR._
