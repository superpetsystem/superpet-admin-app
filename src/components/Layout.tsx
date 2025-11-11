import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, useMediaQuery, useTheme as useMUITheme } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import { useThemeMode } from '../context/ThemeContext';

const Layout = () => {
  const { isDark } = useThemeMode();
  const location = useLocation();
  const muiTheme = useMUITheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  // A rota raiz (Visão Geral) funciona como landing do painel e oculta a sidebar.
  const showSidebar = location.pathname !== '/';

  // Estado controlando o colapso da sidebar, persistido no localStorage.
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    // Recupera configuração persistida assim que o layout monta.
    const saved = localStorage.getItem('sidebarCollapsed');
    setSidebarCollapsed(saved === 'true');
    
    // Escuta mudanças em outras abas/janelas para manter a UI sincronizada.
    const handleStorageChange = () => {
      const newValue = localStorage.getItem('sidebarCollapsed') === 'true';
      setSidebarCollapsed(newValue);
    };

    window.addEventListener('storage', handleStorageChange);
    
    // No mesmo contexto (aba atual) não há evento de storage, então usamos pooling simples.
    const interval = setInterval(() => {
      const saved = localStorage.getItem('sidebarCollapsed');
      const newValue = saved === 'true';
      if (newValue !== sidebarCollapsed) {
        setSidebarCollapsed(newValue);
      }
    }, 200);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [sidebarCollapsed]);

  // Ajusta dinamicamente a largura do drawer permanente.
  const sidebarWidth = sidebarCollapsed ? 72 : 220;

  const handleDrawerToggle = () => {
    // Controla a abertura do drawer mobile (variante temporary).
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header contém navegação, ações rápidas e toggle de tema. */}
      <Header onMenuClick={handleDrawerToggle} showMenuButton={showSidebar && isMobile} />
      <Box sx={{ display: 'flex', flex: 1, mt: '64px' }}>
        {/* Sidebar só é exibida em rotas internas; no mobile vira drawer temporário. */}
        {showSidebar && <Sidebar mobileOpen={mobileOpen} onMobileClose={handleDrawerToggle} />}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, sm: 3, md: 4 },
            bgcolor: isDark ? '#0D1117' : '#F2EBDD',
            minHeight: 'calc(100vh - 64px)',
            width: {
              xs: '100%',
              md: showSidebar ? `calc(100% - ${sidebarWidth}px)` : '100%',
            },
            transition: 'width 0.3s ease',
          }}
        >
          {/* Outlet injeta a página específica da rota ativa. */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
