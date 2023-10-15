import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HOME, LOGIN, STAFF } from '../common/commonConstants.ts';
import LoginInPage from '../ui/pages/Login';
import HomePage from '../ui/pages/Home';
import StaffPage from '../ui/pages/Staff';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<LoginInPage />} />
        <Route path={HOME} element={<HomePage />} />
        <Route path={STAFF} element={<StaffPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
