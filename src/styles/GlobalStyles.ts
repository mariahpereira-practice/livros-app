import { createGlobalStyle } from 'styled-components';
import type { Theme } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
    * {
        box-sizing: border-box;
    }

    :root {
        font-family: ${props => props.theme.fonts.primary};
        line-height: 1.5;
        font-weight: 400;
        color-scheme: light dark;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        margin: 0;
        padding: 0;
        min-width: 320px;
        min-height: 100vh;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.colors.text};
    }

    a {
        font-weight: 500;
        color: ${props => props.theme.colors.primary};
        text-decoration: inherit;
        transition: color 0.25s;
    }

    a:hover {
        color: ${props => props.theme.colors.secondary};
    }

    button {
        border-radius: ${props => props.theme.borderRadius.medium};
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: ${props => props.theme.fonts.sizes.medium};
        font-weight: 500;
        font-family: inherit;
        background-color: ${props => props.theme.colors.surface};
        color: ${props => props.theme.colors.text};
        cursor: pointer;
        transition: border-color 0.25s, background-color 0.25s;
    }

    button:hover {
        border-color: ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.primary};
        color: white;
    }

    button:focus,
    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
`;
