import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Auth from './pages/Auth';
import DashboardCreator from './pages/DashboardCreator';
import DashboardBrand from './pages/DashboardBrand';
import DashboardAdmin from './pages/DashboardAdmin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard/creator" element={<DashboardCreator />} />
        <Route path="/dashboard/brand" element={<DashboardBrand />} />
        <Route path="/dashboard/admin" element={<DashboardAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}
