import { createContext, useContext, useState, useMemo, type ReactNode } from 'react';
import type { Theme } from '../styles/theme';
import { lightTheme, darkTheme } from '../styles/theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    themeMode: ThemeMode;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [themeMode, setThemeMode] = useState<ThemeMode>('light');
    const theme = themeMode === 'light' ? lightTheme : darkTheme;

    const toggleTheme = () => {
        setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
    };

    const value = useMemo(() => ({ theme, themeMode, toggleTheme }), [theme, themeMode]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
