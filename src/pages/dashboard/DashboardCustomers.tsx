import { Box, Typography, Card, CardContent } from '@mui/material';
import { useThemeMode } from '../../context/ThemeContext';

const DashboardCustomers = () => {
  const { isDark } = useThemeMode();

  return (
    <Box>
      {/* Cabeçalho para o CRM dentro do painel. */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: isDark ? '#12888A' : '#0E6A6B',
            mb: 1,
          }}
        >
          Clientes 👥
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: isDark ? '#F8F5EE' : '#1E1E1E',
          }}
        >
          Gerencie seus clientes
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
          {/* Espaço reservado para listagens, funil e segmentações. */}
          <Typography
            variant="h6"
            sx={{
              color: isDark ? '#F8F5EE' : '#0E6A6B',
              mb: 2,
            }}
          >
            Página de Clientes
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: isDark ? '#E6E1D6' : '#1E1E1E',
            }}
          >
            Conteúdo da página de clientes aqui.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DashboardCustomers;

