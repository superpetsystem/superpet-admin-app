import { useThemeMode } from '../context/ThemeContext';

export const useThemeColors = () => {
  const { isDark } = useThemeMode();

  return {
    // Backgrounds
    bgDefault: isDark ? '#0D1117' : '#F2EBDD',
    bgPaper: isDark ? '#1C2128' : '#F8F5EE',
    
    // Textos
    textPrimary: isDark ? '#F8F5EE' : '#1E1E1E',
    textSecondary: isDark ? '#12888A' : '#0E6A6B',
    textMuted: isDark ? '#E6E1D6' : '#6E6E6E',
    
    // Bordas
    borderColor: isDark ? '#12888A' : '#0E6A6B',
    
    // Cores fixas
    primary: '#0E6A6B',
    primaryDark: '#0A5152',
    primaryLight: '#12888A',
    secondary: '#E47B24',
    secondaryDark: '#C26619',
    light: '#F8F5EE',
  };
};

