import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes/AppRoutes'
import './App.css';
import AuthDataProvider from './components/AuthData/AuthDataContext';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <AuthDataProvider>
          <AppRoutes />
        </AuthDataProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
