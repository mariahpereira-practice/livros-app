import { useParams, useNavigate } from "react-router";
import { useLivros } from "../../hooks/useLivros";
import { UseCategorias } from "../../hooks/useCategorias";
import './styles.css';

export function DetalharLivros() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { getLivroById } = useLivros();
    const categorias = UseCategorias();
    
    const livro = getLivroById(id || '');
    
    if (!livro) {
        return (
            <div className="detalhar-livros">
                <div className="livro-nao-encontrado">
                    <h1>Livro não encontrado</h1>
                    <p>O livro que você procura não existe ou foi removido.</p>
                    <button onClick={() => navigate('/livros')} className="btn-voltar">
                        Voltar para Livros
                    </button>
                </div>
            </div>
        );
    }
    
    const categoria = categorias.find(c => c.id === livro.categoria);
    const dataFormatada = new Date(livro.dataLeitura).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
    
    return (
        <div className="detalhar-livros">            
            <div className="livro-detalhes">
                {livro.linkImagem && (
                    <div className="livro-imagem">
                        <img src={livro.linkImagem} alt={livro.titulo} />
                    </div>
                )}
                
                <div className="livro-info">
                    <h1 className="livro-titulo">{livro.titulo}</h1>
                    
                    <div className="info-item">
                        <strong>Autor:</strong>
                        <span>{livro.autor}</span>
                    </div>
                    
                    <div className="info-item">
                        <strong>Ano de Publicação:</strong>
                        <span>{livro.anoPublicacao}</span>
                    </div>
                    
                    <div className="info-item">
                        <strong>Categoria:</strong>
                        <span>{categoria ? categoria.titulo : 'Não categorizado'}</span>
                    </div>
                    
                    {categoria?.descricao && (
                        <div className="info-item">
                            <strong>Sobre a Categoria:</strong>
                            <span className="categoria-descricao">{categoria.descricao}</span>
                        </div>
                    )}
                    
                    <div className="info-item">
                        <strong>Data de Leitura:</strong>
                        <span>{dataFormatada}</span>
                    </div>
                
                </div>
                <button onClick={() => navigate('/livros')} className="btn-voltar">
                Voltar
            </button>
            </div>
        </div>
    )
}