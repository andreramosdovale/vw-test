import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
import FormPage from './pages/FormPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Página de Listagem */}
        <Route path="/" element={<ListPage />} />

        {/* Página de Criação/Edição/Visualização */}
        <Route path="/form" element={<FormPage />} />

        {/* Página de Login */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;