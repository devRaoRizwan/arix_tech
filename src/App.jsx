import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { navigationItems } from './data.js';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <SideNav navItems={navigationItems} />
      </div>
    </BrowserRouter>
  );
}
