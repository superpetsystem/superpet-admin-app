import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
  Typography,
  Tooltip,
  useMediaQuery,
  useTheme as useMUITheme,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useThemeMode } from '../context/ThemeContext';
import { sidebarMenuData } from '../data/sidebarMenu';

interface SidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

const drawerWidth = 260;
const collapsedDrawerWidth = 72;

const Sidebar = ({ mobileOpen, onMobileClose }: SidebarProps) => {
  const { isDark } = useThemeMode();
  const navigate = useNavigate();
  const location = useLocation();
  const muiTheme = useMUITheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const [collapsed, setCollapsed] = useState(false);

  // Persistir estado do collapse no localStorage
  useEffect(() => {
    const saved = localStorage.getItem('sidebarCollapsed');
    if (saved !== null) {
      setCollapsed(saved === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', collapsed.toString());
  }, [collapsed]);

  // Encontrar a seção atual baseada na rota
  const getCurrentSection = () => {
    const currentPath = location.pathname;
    for (const section of sidebarMenuData) {
      if (currentPath.startsWith(section.mainPath)) {
        return section;
      }
    }
    return sidebarMenuData[0];
  };

  const currentSection = getCurrentSection();

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      onMobileClose();
    }
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: isDark ? '#1C2128' : '#F8F5EE',
        position: 'relative',
      }}
    >
      {/* Header com título - sem ícone, sem active */}
      <Box
        sx={{
          px: collapsed ? 2 : 3,
          py: 3.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-start',
          minHeight: 80,
          borderBottom: isDark ? '1px solid rgba(18, 136, 138, 0.15)' : '1px solid rgba(14, 106, 107, 0.1)',
        }}
      >
        {!collapsed && (
          <Typography
            variant="h6"
            sx={{
              color: isDark ? '#12888A' : '#0E6A6B',
              fontWeight: 700,
              fontSize: '1.25rem',
              letterSpacing: '0.3px',
            }}
          >
            {currentSection.mainLabel}
          </Typography>
        )}
      </Box>

      {/* Lista de navegação */}
      <Box sx={{ flexGrow: 1, overflow: 'auto', py: 2 }}>
        {/* Separador visual */}
        {!collapsed && (
          <Box
            sx={{
              px: 3,
              py: 1.5,
              mb: 0.5,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: isDark ? 'rgba(230, 225, 214, 0.5)' : 'rgba(110, 110, 110, 0.7)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
              }}
            >
              Menu
            </Typography>
          </Box>
        )}

        {/* Páginas relacionadas */}
        <Box sx={{ px: collapsed ? 1 : 2 }}>
          {currentSection.relatedPages.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Tooltip key={item.path} title={collapsed ? item.label : ''} placement="right">
                <ListItemButton
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    borderRadius: 2.5,
                    bgcolor: isActive
                      ? isDark ? 'rgba(14, 106, 107, 0.25)' : 'rgba(14, 106, 107, 0.15)'
                      : 'transparent',
                    color: isActive
                      ? isDark ? '#F8F5EE' : '#0E6A6B'
                      : isDark
                      ? 'rgba(248, 245, 238, 0.7)'
                      : 'rgba(30, 30, 30, 0.7)',
                    '&:hover': {
                      bgcolor: isActive
                        ? isDark ? 'rgba(14, 106, 107, 0.35)' : 'rgba(14, 106, 107, 0.25)'
                        : isDark
                        ? 'rgba(18, 136, 138, 0.12)'
                        : 'rgba(14, 106, 107, 0.08)',
                    },
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    py: 1.5,
                    px: collapsed ? 1.5 : 2.5,
                    mb: 0.5,
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    minHeight: 48,
                    position: 'relative',
                    '&::before': isActive
                      ? {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: 3,
                          height: '70%',
                          bgcolor: '#E47B24',
                          borderRadius: '0 2px 2px 0',
                        }
                      : {},
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive
                        ? isDark ? '#F8F5EE' : '#0E6A6B'
                        : isDark
                        ? 'rgba(14, 106, 107, 0.8)'
                        : '#0E6A6B',
                      minWidth: collapsed ? 0 : 40,
                      justifyContent: 'center',
                      mr: collapsed ? 0 : 1.5,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {!collapsed && (
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 600 : 400,
                        fontSize: '0.9375rem',
                      }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            );
          })}
        </Box>
      </Box>
    </Box>
  );

  const currentDrawerWidth = collapsed ? collapsedDrawerWidth : drawerWidth;

  return (
    <Box
      component="nav"
      sx={{
        width: { md: currentDrawerWidth },
        flexShrink: { md: 0 },
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
      }}
    >
      {/* Botão de toggle na borda direita - apenas desktop, estilo iFood */}
      {!isMobile && (
        <Tooltip title={collapsed ? 'Expandir sidebar' : 'Recolher sidebar'} placement="left">
          <IconButton
            onClick={toggleCollapse}
            sx={{
              position: 'absolute',
              right: -18,
              top: 20,
              zIndex: 1200,
              width: 36,
              height: 36,
              bgcolor: '#FFFFFF',
              color: '#EA1D2C',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.12), 0 4px 20px rgba(0, 0, 0, 0.08)',
              border: 'none',
              borderRadius: '50%',
              '&:hover': {
                bgcolor: '#FFFFFF',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.16), 0 8px 24px rgba(0, 0, 0, 0.12)',
                transform: 'scale(1.05)',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:active': {
                transform: 'scale(0.95)',
              },
            }}
          >
            {collapsed ? <ChevronRight fontSize="small" /> : <ChevronLeft fontSize="small" />}
          </IconButton>
        </Tooltip>
      )}
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            bgcolor: isDark ? '#1C2128' : '#F8F5EE',
            borderRight: isDark ? '1px solid rgba(18, 136, 138, 0.2)' : '1px solid rgba(14, 106, 107, 0.15)',
            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: currentDrawerWidth,
            bgcolor: isDark ? '#1C2128' : '#F8F5EE',
            borderRight: isDark ? '1px solid rgba(18, 136, 138, 0.2)' : '1px solid rgba(14, 106, 107, 0.15)',
            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            overflowX: 'hidden',
            overflowY: 'auto',
            boxShadow: isDark 
              ? '2px 0 8px rgba(0, 0, 0, 0.3)' 
              : '2px 0 8px rgba(0, 0, 0, 0.05)',
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              bgcolor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              bgcolor: isDark ? 'rgba(18, 136, 138, 0.3)' : 'rgba(14, 106, 107, 0.25)',
              borderRadius: '3px',
              '&:hover': {
                bgcolor: isDark ? 'rgba(18, 136, 138, 0.5)' : 'rgba(14, 106, 107, 0.4)',
              },
            },
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
