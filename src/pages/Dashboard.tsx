import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { useThemeMode } from '../context/ThemeContext';

const Dashboard = () => {
  const { isDark } = useThemeMode();

  return (
    <Box>
      {/* Header da página do módulo de dashboard. */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: isDark ? '#12888A' : '#0E6A6B',
            mb: 1,
          }}
        >
          Dashboard 📊
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: isDark ? '#F8F5EE' : '#1E1E1E',
          }}
        >
          Visão geral do seu negócio
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
              {/* Área reservada para widgets e gráficos reais. */}
              <Typography
                variant="h6"
                sx={{
                  color: isDark ? '#F8F5EE' : '#0E6A6B',
                  mb: 2,
                }}
              >
                Conteúdo do Dashboard
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? '#E6E1D6' : '#1E1E1E',
                }}
              >
                Aqui você pode adicionar gráficos, métricas e análises detalhadas.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
