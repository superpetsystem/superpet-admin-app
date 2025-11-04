import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  mode: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('themeMode');
    return (saved === 'dark' || saved === 'light' ? saved : 'light') as 'light' | 'dark';
  });

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = mode === 'dark';

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#0E6A6B',
        dark: '#0A5152',
        light: '#12888A',
        contrastText: '#F8F5EE',
      },
      secondary: {
        main: '#E47B24',
        dark: '#C26619',
        light: '#F89042',
        contrastText: '#F8F5EE',
      },
      background: {
        default: isDark ? '#0D1117' : '#F2EBDD',
        paper: isDark ? '#1C2128' : '#F8F5EE',
      },
      text: {
        primary: isDark ? '#F8F5EE' : '#1E1E1E',
        secondary: isDark ? '#12888A' : '#0E6A6B',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#0E6A6B',
            color: '#F8F5EE',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, mode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
