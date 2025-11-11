import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";

// Página inicial renomeada para reforçar o conceito de painel administrativo.
import Overview from "./pages/Overview";

// Páginas principais organizadas por módulo.
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

// Sub-rotas do módulo Dashboard.
import DashboardSales from "./pages/dashboard/DashboardSales";
import DashboardAnalytics from "./pages/dashboard/DashboardAnalytics";
import DashboardCustomers from "./pages/dashboard/DashboardCustomers";
import DashboardInventory from "./pages/dashboard/DashboardInventory";

// Sub-rotas do módulo Reports.
import ReportsSales from "./pages/reports/ReportsSales";
import ReportsCharts from "./pages/reports/ReportsCharts";
import ReportsStatistics from "./pages/reports/ReportsStatistics";
import ReportsExport from "./pages/reports/ReportsExport";

// Sub-rotas do módulo Settings.
import SettingsStore from "./pages/settings/SettingsStore";
import SettingsNotifications from "./pages/settings/SettingsNotifications";
import SettingsAppearance from "./pages/settings/SettingsAppearance";
import SettingsSecurity from "./pages/settings/SettingsSecurity";

function App() {
  return (
    // ThemeProvider encapsula o contexto de tema customizado + MUI ThemeProvider.
    <ThemeProvider>
      {/* BrowserRouter habilita o histórico HTML5 e o controle de rotas da aplicação. */}
      <BrowserRouter>
        <Routes>
          {/* O Layout concentra header, sidebar e área dinâmica (<Outlet />). */}
          <Route path="/" element={<Layout />}>
            {/* index = rota raiz "/" exibindo a visão geral do painel. */}
            <Route index element={<Overview />} />

            {/* Dashboard Routes */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/sales" element={<DashboardSales />} />
            <Route
              path="dashboard/analytics"
              element={<DashboardAnalytics />}
            />
            <Route
              path="dashboard/customers"
              element={<DashboardCustomers />}
            />
            <Route
              path="dashboard/inventory"
              element={<DashboardInventory />}
            />

            {/* Reports Routes */}
            <Route path="reports" element={<Reports />} />
            <Route path="reports/sales" element={<ReportsSales />} />
            <Route path="reports/charts" element={<ReportsCharts />} />
            <Route path="reports/statistics" element={<ReportsStatistics />} />
            <Route path="reports/export" element={<ReportsExport />} />

            {/* Settings Routes */}
            <Route path="settings" element={<Settings />} />
            <Route path="settings/store" element={<SettingsStore />} />
            <Route
              path="settings/notifications"
              element={<SettingsNotifications />}
            />
            <Route
              path="settings/appearance"
              element={<SettingsAppearance />}
            />
            <Route path="settings/security" element={<SettingsSecurity />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
