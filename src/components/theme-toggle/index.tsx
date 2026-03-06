import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggleButton = styled.button`
    background-color: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.text};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.medium};
    padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.small};
    transition: all 0.3s ease;
    width: 50px;

    &:hover {
        background-color: ${props => props.theme.colors.primary};
        color: white;
        border-color: ${props => props.theme.colors.primary};
    }
`;

export function ThemeToggle() {
    const { themeMode, toggleTheme } = useTheme();

    return (
        <ThemeToggleButton onClick={toggleTheme}>
            {themeMode === 'dark' ? '☀️': '🌙'}
        </ThemeToggleButton>
    );
}
