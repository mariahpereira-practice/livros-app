import styled from 'styled-components';
import { useNavigate } from "react-router";
import type { Livro } from '../../../../types/livro'; 

const CardContainer = styled.div`
    background-color: ${props => props.theme.colors.surface};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.medium};
    padding: ${props => props.theme.spacing.medium};
    display: grid;
    grid-template-rows: auto auto auto auto 250px auto;
    gap: ${props => props.theme.spacing.small};
    transition: transform 0.2s, box-shadow 0.2s;
    height: 100%;
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(100, 108, 255, 0.2);
        border-color: ${props => props.theme.colors.primary};
    }
`;

const CardTitle = styled.h2`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.text};
    margin: 0;
`;

const CardText = styled.p`
    color: ${props => props.theme.colors.text};
    margin: 0;
    font-size: 0.95rem;
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
`;

const DetailsButton = styled.button`
    background-color: ${props => props.theme.colors.primary};
    color: white;
    border: none;
    border-radius: ${props => props.theme.borderRadius.medium};
    padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    align-self: stretch;
    
    &:hover {
        background-color: #535bf2;
    }
    
    &:active {
        transform: scale(0.98);
    }
`;

export function CardLivroStyled({ livro }: Readonly<{ livro: Livro }>) {
    const navigate = useNavigate();

    const handleDetalhesClick = () => {
        navigate(`/livros/${livro.id}`);
    };

    return (
        <CardContainer>
            <CardTitle>{livro.titulo}</CardTitle>
            <CardText><strong>Autor:</strong> {livro.autor}</CardText>
            <CardText><strong>Ano:</strong> {livro.anoPublicacao}</CardText>
            <CardText>
                <strong>Data de Leitura:</strong>{' '}
                {new Date(livro.dataLeitura).toLocaleDateString('pt-BR')}
            </CardText>
            {livro.linkImagem && <CardImage src={livro.linkImagem} alt={livro.titulo} />}
            <DetailsButton onClick={handleDetalhesClick}>
                Ver Detalhes
            </DetailsButton>
        </CardContainer>
    );
}
