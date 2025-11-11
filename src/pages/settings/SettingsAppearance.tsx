import { Box, Typography, Card, CardContent } from '@mui/material';
import { useThemeMode } from '../../context/ThemeContext';

const SettingsAppearance = () => {
  const { isDark } = useThemeMode();

  return (
    <Box>
      {/* Cabeçalho da área de personalização visual. */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: isDark ? '#12888A' : '#0E6A6B',
            mb: 1,
          }}
        >
          Aparência 🎨
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: isDark ? '#F8F5EE' : '#1E1E1E',
          }}
        >
          Personalize a aparência do sistema
        </Typography>
      </Box>

      <Card
        sx={{
          bgcolor: isDark ? '#1C2128' : '#F8F5EE',
          boxShadow: 3,
          border: isDark ? '1px solid #12888A' : 'none',
        }}
      >
        <CardContent>
          {/* Espaço para temas, paletas e preferências de layout. */}
          <Typography
            variant="h6"
            sx={{
              color: isDark ? '#F8F5EE' : '#0E6A6B',
              mb: 2,
            }}
          >
            Configurações de Aparência
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: isDark ? '#E6E1D6' : '#1E1E1E',
            }}
          >
            Conteúdo das configurações de aparência aqui.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SettingsAppearance;

