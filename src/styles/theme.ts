export interface Theme {
    colors: {
        primary: string;
        secondary: string;
        background: string;
        surface: string;
        text: string;
        textSecondary: string;
        border: string;
        error: string;
        success: string;
    };
    fonts: {
        primary: string;
        sizes: {
            small: string;
            medium: string;
            large: string;
            xlarge: string;
        };
    };
    spacing: {
        small: string;
        medium: string;
        large: string;
        xlarge: string;
    };
    borderRadius: {
        small: string;
        medium: string;
        large: string;
    };
}

export const lightTheme: Theme = {
    colors: {
        primary: '#646cff',
        secondary: '#535bf2',
        background: '#ffffff',
        surface: '#f9f9f9',
        text: '#213547',
        textSecondary: '#646464',
        border: '#e0e0e0',
        error: '#ef4444',
        success: '#22c55e',
    },
    fonts: {
        primary: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
        sizes: {
            small: '0.875rem',
            medium: '1rem',
            large: '1.5rem',
            xlarge: '2.5rem',
        },
    },
    spacing: {
        small: '0.5rem',
        medium: '1rem',
        large: '1.5rem',
        xlarge: '2rem',
    },
    borderRadius: {
        small: '4px',
        medium: '8px',
        large: '12px',
    },
};

export const darkTheme: Theme = {
    colors: {
        primary: '#646cff',
        secondary: '#535bf2',
        background: '#242424',
        surface: '#1a1a1a',
        text: 'rgba(255, 255, 255, 0.87)',
        textSecondary: 'rgba(255, 255, 255, 0.6)',
        border: '#333333',
        error: '#ef4444',
        success: '#22c55e',
    },
    fonts: {
        primary: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
        sizes: {
            small: '0.875rem',
            medium: '1rem',
            large: '1.5rem',
            xlarge: '2.5rem',
        },
    },
    spacing: {
        small: '0.5rem',
        medium: '1rem',
        large: '1.5rem',
        xlarge: '2rem',
    },
    borderRadius: {
        small: '4px',
        medium: '8px',
        large: '12px',
    },
};
