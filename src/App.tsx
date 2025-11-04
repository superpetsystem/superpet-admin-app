import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

// Dashboard related pages
import DashboardSales from './pages/dashboard/DashboardSales';
import DashboardAnalytics from './pages/dashboard/DashboardAnalytics';
import DashboardCustomers from './pages/dashboard/DashboardCustomers';
import DashboardInventory from './pages/dashboard/DashboardInventory';

// Reports related pages
import ReportsSales from './pages/reports/ReportsSales';
import ReportsCharts from './pages/reports/ReportsCharts';
import ReportsStatistics from './pages/reports/ReportsStatistics';
import ReportsExport from './pages/reports/ReportsExport';

// Settings related pages
import SettingsStore from './pages/settings/SettingsStore';
import SettingsNotifications from './pages/settings/SettingsNotifications';
import SettingsAppearance from './pages/settings/SettingsAppearance';
import SettingsSecurity from './pages/settings/SettingsSecurity';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            {/* Dashboard Routes */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/sales" element={<DashboardSales />} />
            <Route path="dashboard/analytics" element={<DashboardAnalytics />} />
            <Route path="dashboard/customers" element={<DashboardCustomers />} />
            <Route path="dashboard/inventory" element={<DashboardInventory />} />
            
            {/* Reports Routes */}
            <Route path="reports" element={<Reports />} />
            <Route path="reports/sales" element={<ReportsSales />} />
            <Route path="reports/charts" element={<ReportsCharts />} />
            <Route path="reports/statistics" element={<ReportsStatistics />} />
            <Route path="reports/export" element={<ReportsExport />} />
            
            {/* Settings Routes */}
            <Route path="settings" element={<Settings />} />
            <Route path="settings/store" element={<SettingsStore />} />
            <Route path="settings/notifications" element={<SettingsNotifications />} />
            <Route path="settings/appearance" element={<SettingsAppearance />} />
            <Route path="settings/security" element={<SettingsSecurity />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

