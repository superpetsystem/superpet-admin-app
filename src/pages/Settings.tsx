import { Box, Typography, Card, CardContent, Grid, TextField, Button } from '@mui/material';
import { useThemeMode } from '../context/ThemeContext';

const Settings = () => {
  const { isDark } = useThemeMode();

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: isDark ? '#12888A' : '#0E6A6B',
            mb: 1,
          }}
        >
          Configurações ⚙️
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: isDark ? '#F8F5EE' : '#1E1E1E',
          }}
        >
          Gerencie as configurações da sua loja
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              bgcolor: isDark ? '#1C2128' : '#F8F5EE',
              boxShadow: 3,
              border: isDark ? '1px solid #12888A' : 'none',
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  color: isDark ? '#F8F5EE' : '#0E6A6B',
                  mb: 3,
                }}
              >
                Informações da Loja
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Nome da Loja"
                  variant="outlined"
                  defaultValue="SuperPet"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: isDark ? '#F8F5EE' : '#1E1E1E',
                      '& fieldset': {
                        borderColor: isDark ? '#12888A' : '#0E6A6B',
                      },
                      '&:hover fieldset': {
                        borderColor: isDark ? '#E47B24' : '#0E6A6B',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: isDark ? '#E6E1D6' : '#1E1E1E',
                    },
                  }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: isDark ? '#F8F5EE' : '#1E1E1E',
                      '& fieldset': {
                        borderColor: isDark ? '#12888A' : '#0E6A6B',
                      },
                      '&:hover fieldset': {
                        borderColor: isDark ? '#E47B24' : '#0E6A6B',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: isDark ? '#E6E1D6' : '#1E1E1E',
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#0E6A6B',
                    color: '#F8F5EE',
                    '&:hover': { bgcolor: '#0A5152' },
                    mt: 2,
                  }}
                >
                  Salvar Alterações
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              bgcolor: isDark ? '#1C2128' : '#F8F5EE',
              boxShadow: 3,
              border: isDark ? '1px solid #12888A' : 'none',
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  color: isDark ? '#F8F5EE' : '#0E6A6B',
                  mb: 2,
                }}
              >
                Preferências
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? '#E6E1D6' : '#1E1E1E',
                }}
              >
                Configure suas preferências e personalizações aqui.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;

