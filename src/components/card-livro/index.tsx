import type { Livro } from "../../pages/livros";
import './styles.css'

export function CardLivro({ livro }: Readonly<{ livro: Livro }>) {

    return (
        <div className="card-livro">
            <h2>{livro.titulo}</h2>
            <p>Autor: {livro.autor}</p>
            <p>Ano de Publicação: {livro.anoPublicacao}</p>
            <p>Data de Leitura: {livro.dataLeitura.toLocaleDateString()}</p>
            {livro.linkImagem && <img src={livro.linkImagem} alt={livro.titulo} />}
        </div>
    )

}