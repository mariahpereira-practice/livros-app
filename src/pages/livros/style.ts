import styled from 'styled-components';

export const Container = styled.main`
    padding: 1rem;
`;

export const Titulo = styled.h1`
    color: ${props => props.theme.colors.primary};
    opacity: 0.7;
`;

export const ContainerBusca = styled.div`
    display: flex;
    align-items: center;
    gap: 5rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
`;

export const ContainerSelect = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 3rem;

    span {
        font-size: 1.2rem;
        color: ${props => props.theme.colors.textSecondary};
    }
`;

export const ContainerFilter = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 3rem;

    span {
        font-size: 1.2rem;
        color: ${props => props.theme.colors.textSecondary};
    }
`;

export const SelectOrdenacao = styled.select`
    padding: 0.5rem;
    font-size: 1.5rem;
    font-family: 'Courier New', Courier, monospace;
    border-radius: ${props => props.theme.borderRadius.medium};
    border: 1px solid ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.text};
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
    transition: border-color 0.25s, box-shadow 0.25s;

    &:hover {
        border-color: ${props => props.theme.colors.primary};
        box-shadow: 0 6px 16px rgba(15, 23, 42, 0.12);
    }
`;

export const InputFiltro = styled.input`
    width: 800px;
    flex: 1;
    padding: 0.5rem;
    font-size: 1.5rem;
    font-family: 'Courier New', Courier, monospace;
    border-radius: ${props => props.theme.borderRadius.medium};
    border: 1px solid ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.text};
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
    transition: border-color 0.25s, box-shadow 0.25s;

    &:hover {
        border-color: ${props => props.theme.colors.primary};
        box-shadow: 0 6px 16px rgba(15, 23, 42, 0.12);
    }
`;

export const LivrosContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(220px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
    grid-auto-rows: 1fr;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;
