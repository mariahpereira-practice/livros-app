import styled from 'styled-components';

export const AppContent = styled.main`
    flex: 1;
    display: flex;
    flex-direction: row;
    padding: 2rem;
    gap: 2rem;
`;

export const Logo = styled.img`
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }

    &.react:hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
    }

    @media (prefers-reduced-motion: no-preference) {
        animation: logo-spin infinite 20s linear;
    }

    @keyframes logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const Card = styled.div`
    padding: 2em;
`;

export const ReadTheDocs = styled.p`
    color: #888;
`;

export const Paragraph = styled.p`
    color: ${props => props.theme.colors.textSecondary};
    line-height: 1.6;
`;

export const TituloCapa = styled.div`
    margin-bottom: 1rem;
    text-align: center;

    h1 {
        font-size: 5rem;
        color: #7aa0e7;
        margin: 2rem;
    }

    p {
        color: ${props => props.theme.colors.textSecondary};
        font-size: 1.5rem;
    }
`;

export const InfoLivro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
    padding: 2rem;
    background-color: ${props => props.theme.colors.surface};
    border-radius: 30px;
    text-align: justify;

    p {
        margin: 0;
        color: ${props => props.theme.colors.text};
        font-size: 1.5rem;
    }

    h2 {
        font-weight: bold;
        color: #7aa0e7;
    }
`;
