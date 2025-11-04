import { createTheme } from '@mui/material/styles';

export const createAppTheme = (mode: 'light' | 'dark') => {
  const isDark = mode === 'dark';

  return createTheme({
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
          contained: {
            '&.MuiButton-containedPrimary': {
              backgroundColor: '#0E6A6B',
              color: '#F8F5EE',
              '&:hover': {
                backgroundColor: '#0A5152',
              },
            },
            '&.MuiButton-containedSecondary': {
              backgroundColor: '#E47B24',
              color: '#F8F5EE',
              '&:hover': {
                backgroundColor: '#C26619',
              },
            },
          },
        },
      },
    },
  });
};

