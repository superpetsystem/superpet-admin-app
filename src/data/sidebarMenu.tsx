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
    mainLabel: 'Dashboard',
    mainIcon: <DashboardIcon />,
    relatedPages: [
      { label: 'Visão Geral', path: '/dashboard', icon: <DashboardIcon /> },
      { label: 'Vendas', path: '/dashboard/sales', icon: <ShoppingCart /> },
      { label: 'Análise', path: '/dashboard/analytics', icon: <TrendingUp /> },
      { label: 'Clientes', path: '/dashboard/customers', icon: <People /> },
      { label: 'Estoque', path: '/dashboard/inventory', icon: <Inventory /> },
    ],
  },
  {
    mainPath: '/reports',
    mainLabel: 'Reports',
    mainIcon: <ReportsIcon />,
    relatedPages: [
      { label: 'Relatórios Gerais', path: '/reports', icon: <ReportsIcon /> },
      { label: 'Vendas', path: '/reports/sales', icon: <Receipt /> },
      { label: 'Gráficos', path: '/reports/charts', icon: <BarChart /> },
      { label: 'Estatísticas', path: '/reports/statistics', icon: <PieChart /> },
      { label: 'Exportar', path: '/reports/export', icon: <FileDownload /> },
    ],
  },
  {
    mainPath: '/settings',
    mainLabel: 'Settings',
    mainIcon: <SettingsIcon />,
    relatedPages: [
      { label: 'Configurações Gerais', path: '/settings', icon: <SettingsIcon /> },
      { label: 'Loja', path: '/settings/store', icon: <Store /> },
      { label: 'Notificações', path: '/settings/notifications', icon: <Notifications /> },
      { label: 'Aparência', path: '/settings/appearance', icon: <Palette /> },
      { label: 'Segurança', path: '/settings/security', icon: <Security /> },
    ],
  },
];

