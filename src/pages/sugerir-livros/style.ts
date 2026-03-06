import styled from 'styled-components';

export const SugerirLivrosContainer = styled.div`
    width: 80%;
    margin: 4rem auto;
    padding: 2rem;
    background-color: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius.medium};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: "Segoe UI", sans-serif;
`;

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.primary};
    opacity: 0.7;
    background-color: transparent;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const InputGroup = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
`;

export const LabelInput = styled.label`
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.text};
`;

export const InputText = styled.input<{ hasError?: boolean }>`
    padding: 0.5rem;
    border: 1px solid ${props => props.hasError ? '#ff4d4d' : props.theme.colors.border};
    border-width: ${props => props.hasError ? '5px' : '1px'};
    border-radius: ${props => props.theme.borderRadius.small};
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s;
    background-color: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.text};

    &:focus {
        border-color: ${props => props.hasError ? '#ff4d4d' : props.theme.colors.primary};
        border-width: 5px;
    }
`;

export const SelectInput = styled.select<{ hasError?: boolean }>`
    padding: 0.5rem;
    border: 1px solid ${props => props.hasError ? '#ff4d4d' : props.theme.colors.border};
    border-width: ${props => props.hasError ? '5px' : '1px'};
    border-radius: ${props => props.theme.borderRadius.small};
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s;
    background-color: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.text};

    &:focus {
        border-color: ${props => props.hasError ? '#ff4d4d' : props.theme.colors.primary};
        border-width: 5px;
    }
`;

export const ErrorMessage = styled.span`
    color: ${props => props.theme.colors.error};
    font-size: 0.85rem;
    margin-top: 0.4rem;
    font-weight: 500;
    animation: fadeIn 0.3s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-5px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const SubmitBtn = styled.button`
    width: 100%;
    padding: 0.8rem;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    border: none;
    border-radius: ${props => props.theme.borderRadius.small};
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }
`;
