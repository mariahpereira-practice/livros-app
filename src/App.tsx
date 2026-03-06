import './App.css'
import Routers from './routers'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Routers />
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App
