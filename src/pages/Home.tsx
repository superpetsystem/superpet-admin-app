import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import { ShoppingCart, TrendingUp, People, Inventory } from '@mui/icons-material';
import { useThemeMode } from '../context/ThemeContext';

const Home = () => {
  const { isDark } = useThemeMode();

  const statsCards = [
    {
      title: 'Vendas Hoje',
      value: 'R$ 12.450',
      change: '+12.5%',
      icon: <ShoppingCart sx={{ fontSize: 40, color: '#E47B24' }} />,
      color: '#E47B24',
    },
    {
      title: 'Crescimento',
      value: '24.8%',
      change: '+5.2%',
      icon: <TrendingUp sx={{ fontSize: 40, color: '#E47B24' }} />,
      color: '#E47B24',
    },
    {
      title: 'Clientes',
      value: '1.248',
      change: '+8%',
      icon: <People sx={{ fontSize: 40, color: '#E47B24' }} />,
      color: '#E47B24',
    },
    {
      title: 'Produtos',
      value: '856',
      change: '+3%',
      icon: <Inventory sx={{ fontSize: 40, color: '#E47B24' }} />,
      color: '#E47B24',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ mb: 6, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            color: isDark ? '#12888A' : '#0E6A6B',
            mb: 2,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          Bem-vindo ao SuperPet! 🐾
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: isDark ? '#F8F5EE' : '#1E1E1E',
            mb: 3,
            fontSize: { xs: '1rem', sm: '1.25rem' },
          }}
        >
          Gerencie sua loja de pets com facilidade e eficiência
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: '#0E6A6B',
            color: '#F8F5EE',
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            '&:hover': { bgcolor: '#0A5152' },
          }}
        >
          Começar Agora
        </Button>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {statsCards.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                bgcolor: isDark ? '#1C2128' : '#F8F5EE',
                boxShadow: 3,
                border: isDark ? '1px solid #12888A' : 'none',
                transition: 'all 0.3s',
                height: '100%',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-4px)',
                  borderColor: isDark ? '#E47B24' : '#0E6A6B',
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Box
                    sx={{
                      bgcolor: isDark ? 'rgba(18, 136, 138, 0.2)' : 'rgba(14, 106, 107, 0.1)',
                      p: 2,
                      borderRadius: 2,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Box
                    sx={{
                      bgcolor: stat.color,
                      color: '#F8F5EE',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {stat.change}
                  </Box>
                </Box>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    mb: 0.5,
                    color: isDark ? '#F8F5EE' : '#0E6A6B',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#E6E1D6' : '#1E1E1E',
                  }}
                >
                  {stat.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Quick Actions */}
      <Card
        sx={{
          bgcolor: isDark ? '#1C2128' : '#F8F5EE',
          boxShadow: 3,
          border: isDark ? '1px solid #12888A' : 'none',
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              color: isDark ? '#12888A' : '#0E6A6B',
              mb: 3,
            }}
          >
            Ações Rápidas
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#0E6A6B',
                color: '#F8F5EE',
                '&:hover': { bgcolor: '#0A5152' },
              }}
            >
              Nova Venda
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#E47B24',
                color: '#F8F5EE',
                '&:hover': { bgcolor: '#C26619' },
              }}
            >
              Adicionar Produto
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: isDark ? '#12888A' : '#0E6A6B',
                color: isDark ? '#12888A' : '#0E6A6B',
                '&:hover': {
                  bgcolor: '#0E6A6B',
                  color: '#F8F5EE',
                },
              }}
            >
              Ver Relatórios
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;
