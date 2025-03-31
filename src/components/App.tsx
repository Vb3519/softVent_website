import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './Layouts/MainLayout';
import Main from './Main/Main';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Main />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
