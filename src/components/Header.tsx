import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme as useMUITheme,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
  Menu as MenuIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import { useThemeMode } from '../context/ThemeContext';

interface HeaderProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

const Header = ({ onMenuClick, showMenuButton = false }: HeaderProps) => {
  const { isDark, toggleTheme } = useThemeMode();
  const navigate = useNavigate();
  const location = useLocation();
  const muiTheme = useMUITheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const [notifAnchor, setNotifAnchor] = useState<null | HTMLElement>(null);
  const [userAnchor, setUserAnchor] = useState<null | HTMLElement>(null);
  const [navMenuAnchor, setNavMenuAnchor] = useState<null | HTMLElement>(null);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Reports', path: '/reports' },
    { label: 'Settings', path: '/settings' },
  ];

  const handleNotifOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotifAnchor(event.currentTarget);
  };

  const handleNotifClose = () => {
    setNotifAnchor(null);
  };

  const handleUserOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserAnchor(event.currentTarget);
  };

  const handleUserClose = () => {
    setUserAnchor(null);
  };

  const handleNavMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNavMenuAnchor(event.currentTarget);
  };

  const handleNavMenuClose = () => {
    setNavMenuAnchor(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      handleUserClose();
      handleNavMenuClose();
    }
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ px: { xs: 2, sm: 3 } }}>
        {/* Botão Menu Mobile */}
        {showMenuButton && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuClick}
            sx={{
              mr: 2,
              color: '#F8F5EE',
              '&:hover': {
                bgcolor: 'rgba(248, 245, 238, 0.1)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Logo e Nome */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: { xs: 2, sm: 4 } }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontWeight: 'bold',
              color: '#F8F5EE',
              fontSize: { xs: '1.5rem', sm: '1.25rem' },
            }}
          >
            🐾
            {!isMobile && <span>Superpet</span>}
          </Typography>
        </Box>

        {/* Menu de Navegação - Desktop */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 1, flexGrow: 1 }}>
            {menuItems.map((item) => (
              <Typography
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  cursor: 'pointer',
                  color: location.pathname === item.path ? '#F8F5EE' : 'rgba(248, 245, 238, 0.7)',
                  bgcolor: location.pathname === item.path ? 'rgba(248, 245, 238, 0.2)' : 'transparent',
                  transition: 'all 0.3s',
                  '&:hover': {
                    bgcolor: 'rgba(248, 245, 238, 0.15)',
                    color: '#F8F5EE',
                  },
                  fontSize: '0.95rem',
                  fontWeight: location.pathname === item.path ? 600 : 400,
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        )}

        {/* Menu de Navegação Mobile - Três Pontinhos */}
        {isMobile && (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              onClick={handleNavMenuOpen}
              sx={{
                color: '#F8F5EE',
                '&:hover': {
                  bgcolor: 'rgba(248, 245, 238, 0.1)',
                },
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
        )}

        {/* Ações do Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
          {/* Toggle Tema */}
          <IconButton
            onClick={toggleTheme}
            sx={{
              color: '#F8F5EE',
              '&:hover': {
                bgcolor: 'rgba(248, 245, 238, 0.1)',
              },
            }}
          >
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          {/* Notificações */}
          <IconButton
            onClick={handleNotifOpen}
            sx={{
              color: '#F8F5EE',
              '&:hover': {
                bgcolor: 'rgba(248, 245, 238, 0.1)',
              },
            }}
          >
            <Badge badgeContent={3} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Menu do Usuário */}
          <IconButton
            onClick={handleUserOpen}
            sx={{
              color: '#F8F5EE',
              '&:hover': {
                bgcolor: 'rgba(248, 245, 238, 0.1)',
              },
            }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: '#E47B24',
                fontSize: '0.875rem',
              }}
            >
              U
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>

      {/* Menu de Notificações */}
      <Menu
        anchorEl={notifAnchor}
        open={Boolean(notifAnchor)}
        onClose={handleNotifClose}
        PaperProps={{
          sx: {
            bgcolor: isDark ? '#1C2128' : '#F8F5EE',
            border: isDark ? '2px solid #12888A' : '2px solid #0E6A6B',
            mt: 1,
            minWidth: 300,
            maxWidth: 400,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              color: isDark ? '#12888A' : '#0E6A6B',
              fontWeight: 'bold',
              mb: 1,
            }}
          >
            Notificações
          </Typography>
        </Box>
        <Divider sx={{ borderColor: isDark ? '#12888A' : '#0E6A6B' }} />
        <MenuItem
          onClick={handleNotifClose}
          sx={{
            color: isDark ? '#F8F5EE' : '#1E1E1E',
            '&:hover': {
              bgcolor: isDark ? 'rgba(18, 136, 138, 0.1)' : 'rgba(14, 106, 107, 0.1)',
            },
          }}
        >
          <Typography variant="body2">Nova venda realizada</Typography>
        </MenuItem>
        <MenuItem
          onClick={handleNotifClose}
          sx={{
            color: isDark ? '#F8F5EE' : '#1E1E1E',
            '&:hover': {
              bgcolor: isDark ? 'rgba(18, 136, 138, 0.1)' : 'rgba(14, 106, 107, 0.1)',
            },
          }}
        >
          <Typography variant="body2">Estoque baixo detectado</Typography>
        </MenuItem>
        <MenuItem
          onClick={handleNotifClose}
          sx={{
            color: isDark ? '#F8F5EE' : '#1E1E1E',
            '&:hover': {
              bgcolor: isDark ? 'rgba(18, 136, 138, 0.1)' : 'rgba(14, 106, 107, 0.1)',
            },
          }}
        >
          <Typography variant="body2">Novo cliente cadastrado</Typography>
        </MenuItem>
      </Menu>

      {/* Menu de Navegação Mobile */}
      <Menu
        anchorEl={navMenuAnchor}
        open={Boolean(navMenuAnchor)}
        onClose={handleNavMenuClose}
        PaperProps={{
          sx: {
            bgcolor: isDark ? '#1C2128' : '#F8F5EE',
            border: isDark ? '2px solid #12888A' : '2px solid #0E6A6B',
            mt: 1,
            minWidth: 200,
          },
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            selected={location.pathname === item.path}
            sx={{
              color: isDark ? '#F8F5EE' : '#1E1E1E',
              bgcolor: location.pathname === item.path
                ? isDark ? 'rgba(14, 106, 107, 0.3)' : 'rgba(14, 106, 107, 0.1)'
                : 'transparent',
              '&:hover': {
                bgcolor: isDark ? 'rgba(18, 136, 138, 0.1)' : 'rgba(14, 106, 107, 0.1)',
              },
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Menu do Usuário */}
      <Menu
        anchorEl={userAnchor}
        open={Boolean(userAnchor)}
        onClose={handleUserClose}
        PaperProps={{
          sx: {
            bgcolor: isDark ? '#1C2128' : '#F8F5EE',
            border: isDark ? '2px solid #12888A' : '2px solid #0E6A6B',
            mt: 1,
            minWidth: 200,
          },
        }}
      >
        <MenuItem
          onClick={handleUserClose}
          sx={{
            color: isDark ? '#F8F5EE' : '#1E1E1E',
            '&:hover': {
              bgcolor: isDark ? 'rgba(18, 136, 138, 0.1)' : 'rgba(14, 106, 107, 0.1)',
            },
          }}
        >
          <ListItemIcon>
            <PersonIcon sx={{ color: '#0E6A6B' }} />
          </ListItemIcon>
          <ListItemText>Perfil</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleNavigation('/settings');
            handleUserClose();
          }}
          sx={{
            color: isDark ? '#F8F5EE' : '#1E1E1E',
            '&:hover': {
              bgcolor: isDark ? 'rgba(18, 136, 138, 0.1)' : 'rgba(14, 106, 107, 0.1)',
            },
          }}
        >
          <ListItemIcon>
            <SettingsIcon sx={{ color: '#0E6A6B' }} />
          </ListItemIcon>
          <ListItemText>Configurações</ListItemText>
        </MenuItem>
        <Divider sx={{ borderColor: isDark ? '#12888A' : '#0E6A6B' }} />
        <MenuItem
          onClick={handleUserClose}
          sx={{
            color: '#E47B24',
            '&:hover': {
              bgcolor: isDark ? 'rgba(228, 123, 36, 0.1)' : 'rgba(228, 123, 36, 0.1)',
            },
          }}
        >
          <ListItemIcon>
            <LogoutIcon sx={{ color: '#E47B24' }} />
          </ListItemIcon>
          <ListItemText>Sair</ListItemText>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
