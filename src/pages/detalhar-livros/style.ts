import styled from 'styled-components';

export const DetalharLivrosContainer = styled.div`
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export const BtnVoltar = styled.button`
    background-color: ${props => props.theme.colors.primary};
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: ${props => props.theme.borderRadius.medium};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-bottom: 2rem;

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }
`;

export const LivroNaoEncontrado = styled.div`
    text-align: center;
    padding: 4rem 2rem;

    h1 {
        color: ${props => props.theme.colors.primary};
        margin-bottom: 1rem;
    }

    p {
        color: ${props => props.theme.colors.textSecondary};
        margin-bottom: 2rem;
        font-size: 1.1rem;
    }
`;

export const LivroDetalhes = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 3rem;
    background-color: ${props => props.theme.colors.surface};
    padding: 2rem;
    border-radius: ${props => props.theme.borderRadius.large};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 1.5rem;
    }
`;

export const LivroImagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    img {
        width: 100%;
        max-width: 300px;
        height: auto;
        border-radius: ${props => props.theme.borderRadius.medium};
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

        @media (max-width: 768px) {
            max-width: 200px;
        }
    }
`;

export const LivroInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const LivroTitulo = styled.h1`
    font-size: 2rem;
    color: ${props => props.theme.colors.text};
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    border-bottom: 2px solid ${props => props.theme.colors.border};

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    strong {
        color: ${props => props.theme.colors.primary};
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    span {
        color: ${props => props.theme.colors.text};
        font-size: 1.1rem;
        line-height: 1.6;

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }
`;

export const CategoriaDescricao = styled.span`
    font-style: italic;
    color: ${props => props.theme.colors.textSecondary};
    font-size: 1rem !important;
`;
