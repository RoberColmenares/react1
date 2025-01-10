import React from 'react'; // Añadir esta línea
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import ContextoProvider from './context/Contexcart.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ContextoProvider>
        <App />
      </ContextoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
