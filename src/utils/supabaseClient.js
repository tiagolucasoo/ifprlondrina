import { createClient } from '@supabase/supabase-js';

// 1. Configuração do Cliente
// Em Create React App, variáveis de ambiente expostas ao cliente
// devem começar com REACT_APP_. Use um arquivo `.env` com as chaves:
// REACT_APP_SUPABASE_URL e REACT_APP_SUPABASE_ANON_KEY
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://htjpvhzajlqssincdbji.supabase.co';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || process.env.REACT_APP_SUPABASE_KEY || '';



if (!supabaseAnonKey) {
    // Aviso amigável — evitar lançar erro que quebre o app durante o runtime
    // Caso a chave esteja faltando, as chamadas ao Supabase irão falhar.
    // Verifique `.env` e reinicie o servidor de desenvolvimento.
    // Ex.: REACT_APP_SUPABASE_ANON_KEY=your_anon_key
    //       REACT_APP_SUPABASE_URL=https://your-project.supabase.co
    // (No ambiente de produção defina as variáveis no serviço que hospeda a build.)
    // eslint-disable-next-line no-console
    console.warn('REACT_APP_SUPABASE_ANON_KEY não configurada. Verifique seu .env');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


// 2. Funções de Busca (Substituem os dados mockados)

/**
 * Busca todas as aulas (lessons) da tabela 'lessons'.
 * @returns {Promise<Array>} Lista de aulas ou array vazio em caso de erro.
 */
export async function fetchLessons() {
    let { data: lessons, error } = await supabase
        .from('lessons')
        .select('*')
        .order('date', { ascending: false }); // Ordena por data

    if (error) {
        console.error("Erro ao buscar aulas:", error);
        return [];
    }
    // Normaliza o campo de imagem para `image` (várias fontes possíveis)
    const normalized = lessons.map(l => ({
        ...l,
        image: l.image || l.image_url || l.img || l.src || ''
    }));
    return normalized;
}

/**
 * Busca um único post (aula) por ID.
 * @param {string|number} postId - O ID do post.
 * @returns {Promise<object|null>} O objeto do post ou null.
 */
export async function fetchPostContent(postId) {
    const id = Number(postId);
    const { data: post, error } = await supabase
        .from('lessons')
        .select('*')
        .eq('id', id)
        .single(); // Espera um único resultado

    if (error) {
        console.error(`Erro ao buscar post ${id}:`, error);
        return null;
    }
    return post;
}

/**
 * Busca todos os membros da equipe (teamMembers) da tabela 'team_members'.
 * @returns {Promise<Array>} Lista de membros ou array vazio em caso de erro.
 */
export async function fetchTeamMembers() {
    let { data: teamMembers, error } = await supabase
        .from('team_members')
        .select('*')
        .order('id', { ascending: true }); 

    if (error) {
        console.error("Erro ao buscar membros da equipe:", error);
        return [];
    }
    // Normaliza campos comuns
    const normalized = teamMembers.map(m => ({
        ...m,
        img: m.img || m.image || m.photo || m.avatar || '',
        linkedin: m.linkedin || m.profile_url || m.linkedin_url || ''
    }));
    return normalized;
}

/**
 * Busca as fotos da galeria da tabela 'gallery'.
 * Normaliza o campo para `src`.
 */
export async function fetchGallery() {
    let { data: gallery, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error("Erro ao buscar galeria:", error);
        return [];
    }

    const normalized = gallery.map(g => ({
        ...g,
        src: g.src || g.image || g.url || g.path || ''
    }));
    return normalized;
}