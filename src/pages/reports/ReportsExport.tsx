import { Box, Typography, Card, CardContent } from '@mui/material';
import { useThemeMode } from '../../context/ThemeContext';

const ReportsExport = () => {
  const { isDark } = useThemeMode();

  return (
    <Box>
      {/* Cabeçalho para exportações de relatórios. */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: isDark ? '#12888A' : '#0E6A6B',
            mb: 1,
          }}
        >
          Exportar 📥
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: isDark ? '#F8F5EE' : '#1E1E1E',
          }}
        >
          Exporte seus relatórios
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
          {/* Área para configurações de formatos, filtros e agendamentos. */}
          <Typography
            variant="h6"
            sx={{
              color: isDark ? '#F8F5EE' : '#0E6A6B',
              mb: 2,
            }}
          >
            Exportar Relatórios
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: isDark ? '#E6E1D6' : '#1E1E1E',
            }}
          >
            Conteúdo da exportação aqui.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ReportsExport;

