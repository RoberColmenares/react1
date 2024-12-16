import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './assets/css/style.css';
import Registro from './components/Views/Registro.jsx';
import Login from './components/Views/Login.jsx';
import Cart from './components/Views/Cart.jsx';
import Perfil from './components/Views/perfil.jsx';
import Notfound from './components/Views/Notfound.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/perfil" element={<Perfil />} />
        {/*<Route path="/perfil" element={<Perfil />  />*/}
        <Route path="/*" element={<Notfound />} />
      </Routes>
     
      <Footer />
    </>
  );
}

export default App;
