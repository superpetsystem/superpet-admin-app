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

  // Home não tem sidebar
  const showSidebar = location.pathname !== '/';

  // Ler estado do sidebar colapsado do localStorage
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sidebarCollapsed');
    setSidebarCollapsed(saved === 'true');
    
    // Escutar mudanças no localStorage
    const handleStorageChange = () => {
      const newValue = localStorage.getItem('sidebarCollapsed') === 'true';
      setSidebarCollapsed(newValue);
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Verificar mudanças periodicamente (para mesma aba)
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

  // Calcular largura da sidebar baseado no estado colapsado
  const sidebarWidth = sidebarCollapsed ? 72 : 260;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onMenuClick={handleDrawerToggle} showMenuButton={showSidebar && isMobile} />
      <Box sx={{ display: 'flex', flex: 1, mt: '64px' }}>
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
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
