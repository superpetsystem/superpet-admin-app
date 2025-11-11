import {
  Dashboard as DashboardIcon,
  Assessment as ReportsIcon,
  Settings as SettingsIcon,
  ShoppingCart,
  TrendingUp,
  People,
  Inventory,
  Receipt,
  BarChart,
  PieChart,
  FileDownload,
  Security,
  Store,
  Notifications,
  Palette,
} from '@mui/icons-material';
import { ReactElement } from 'react';

// Estruturas auxiliares que descrevem a navegação da sidebar.

export interface SidebarMenuItem {
  label: string;
  path: string;
  icon: ReactElement;
}

export interface SidebarSection {
  mainPath: string;
  mainLabel: string;
  mainIcon: ReactElement;
  relatedPages: SidebarMenuItem[];
}

export const sidebarMenuData: SidebarSection[] = [
  {
    mainPath: '/dashboard',
    mainLabel: 'Painel',
    mainIcon: <DashboardIcon />,
    relatedPages: [
      { label: 'Resumo Executivo', path: '/dashboard', icon: <DashboardIcon /> },
      { label: 'Vendas', path: '/dashboard/sales', icon: <ShoppingCart /> },
      { label: 'Análises', path: '/dashboard/analytics', icon: <TrendingUp /> },
      { label: 'Clientes', path: '/dashboard/customers', icon: <People /> },
      { label: 'Estoque', path: '/dashboard/inventory', icon: <Inventory /> },
    ],
  },
  {
    mainPath: '/reports',
    mainLabel: 'Relatórios',
    mainIcon: <ReportsIcon />,
    relatedPages: [
      { label: 'Relatórios Gerais', path: '/reports', icon: <ReportsIcon /> },
      { label: 'Relatório de Vendas', path: '/reports/sales', icon: <Receipt /> },
      { label: 'Gráficos', path: '/reports/charts', icon: <BarChart /> },
      { label: 'Estatísticas', path: '/reports/statistics', icon: <PieChart /> },
      { label: 'Exportações', path: '/reports/export', icon: <FileDownload /> },
    ],
  },
  {
    mainPath: '/settings',
    mainLabel: 'Configurações',
    mainIcon: <SettingsIcon />,
    relatedPages: [
      { label: 'Preferências Gerais', path: '/settings', icon: <SettingsIcon /> },
      { label: 'Loja', path: '/settings/store', icon: <Store /> },
      { label: 'Notificações', path: '/settings/notifications', icon: <Notifications /> },
      { label: 'Aparência', path: '/settings/appearance', icon: <Palette /> },
      { label: 'Segurança', path: '/settings/security', icon: <Security /> },
    ],
  },
];

