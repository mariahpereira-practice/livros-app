export type Livro = {
    id: number;
    titulo: string;
    autor: string;
    anoPublicacao: number;
    dataLeitura: string;
    linkImagem?: string;
    categoria: number;
};

export interface Category {
    id: number;
    titulo: string;
    descricao?: string;
};