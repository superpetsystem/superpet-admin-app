import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { useThemeMode } from '../context/ThemeContext';

const Reports = () => {
  const { isDark } = useThemeMode();

  return (
    <Box>
      {/* Introdução da página de Relatórios. */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: isDark ? '#12888A' : '#0E6A6B',
            mb: 1,
          }}
        >
          Relatórios 📈
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: isDark ? '#F8F5EE' : '#1E1E1E',
          }}
        >
          Análises e relatórios detalhados do seu negócio
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card
            sx={{
              bgcolor: isDark ? '#1C2128' : '#F8F5EE',
              boxShadow: 3,
              border: isDark ? '1px solid #12888A' : 'none',
            }}
          >
            <CardContent>
              {/* Área para tabelas, gráficos e filtros de exportação. */}
              <Typography
                variant="h6"
                sx={{
                  color: isDark ? '#F8F5EE' : '#0E6A6B',
                  mb: 2,
                }}
              >
                Relatórios Disponíveis
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? '#E6E1D6' : '#1E1E1E',
                }}
              >
                Aqui você pode gerar e visualizar relatórios de vendas, produtos, clientes e muito mais.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reports;

