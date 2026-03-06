import { useParams, useNavigate } from "react-router";
import { useLivros } from "../../hooks/useLivros";
import { UseCategorias } from "../../hooks/useCategorias";
import { 
    DetalharLivrosContainer, 
    BtnVoltar, 
    LivroNaoEncontrado, 
    LivroDetalhes, 
    LivroImagem, 
    LivroInfo, 
    LivroTitulo, 
    InfoItem, 
    CategoriaDescricao 
} from './style';

export function DetalharLivros() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { getLivroById } = useLivros();
    const categorias = UseCategorias();
    
    const livro = getLivroById(id || '');
    
    if (!livro) {
        return (
            <DetalharLivrosContainer>
                <LivroNaoEncontrado>
                    <h1>Livro não encontrado</h1>
                    <p>O livro que você procura não existe ou foi removido.</p>
                    <BtnVoltar onClick={() => navigate('/livros')}>
                        Voltar para Livros
                    </BtnVoltar>
                </LivroNaoEncontrado>
            </DetalharLivrosContainer>
        );
    }
    
    const categoria = categorias.find(c => c.id === livro.categoria);
    const dataFormatada = new Date(livro.dataLeitura).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
    
    return (
        <DetalharLivrosContainer>            
            <LivroDetalhes>
                {livro.linkImagem && (
                    <LivroImagem>
                        <img src={livro.linkImagem} alt={livro.titulo} />
                    </LivroImagem>
                )}
                
                <LivroInfo>
                    <LivroTitulo>{livro.titulo}</LivroTitulo>
                    
                    <InfoItem>
                        <strong>Autor:</strong>
                        <span>{livro.autor}</span>
                    </InfoItem>
                    
                    <InfoItem>
                        <strong>Ano de Publicação:</strong>
                        <span>{livro.anoPublicacao}</span>
                    </InfoItem>
                    
                    <InfoItem>
                        <strong>Categoria:</strong>
                        <span>{categoria ? categoria.titulo : 'Não categorizado'}</span>
                    </InfoItem>
                    
                    {categoria?.descricao && (
                        <InfoItem>
                            <strong>Sobre a Categoria:</strong>
                            <CategoriaDescricao>{categoria.descricao}</CategoriaDescricao>
                        </InfoItem>
                    )}
                    
                    <InfoItem>
                        <strong>Data de Leitura:</strong>
                        <span>{dataFormatada}</span>
                    </InfoItem>
                
                </LivroInfo>
                <BtnVoltar onClick={() => navigate('/livros')}>
                Voltar
            </BtnVoltar>
            </LivroDetalhes>
        </DetalharLivrosContainer>
    )
}