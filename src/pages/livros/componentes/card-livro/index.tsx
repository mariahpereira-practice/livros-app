import { useNavigate } from "react-router";
import type { Livro } from "../../../../types/livro";
import './styles.css'

export function CardLivro({ livro }: Readonly<{ livro: Livro }>) {
    const navigate = useNavigate();

    const handleDetalhesClick = () => {
        navigate(`/livros/${livro.id}`);
    };

    return (
        <div className="card-livro">
            <h2>{livro.titulo}</h2>
            <p>Autor: {livro.autor}</p>
            <p>Ano de Publicação: {livro.anoPublicacao}</p>
            <p>Data de Leitura: {new Date(livro.dataLeitura).toLocaleDateString()}</p>
            {livro.linkImagem && <img src={livro.linkImagem} alt={livro.titulo} />}
            <button 
                className="botao-detalhes"
                onClick={handleDetalhesClick}
            >
                Detalhes
            </button>
        </div>
    )

}