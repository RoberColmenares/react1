import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './assets/css/style.css';
import Registro from './Views/Registro.jsx';
import Login from './Views/Login.jsx';
import Cart from './Views/Cart.jsx';
import Perfil from './Views/perfil.jsx';
import Notfound from './Views/Notfound.jsx';
import ContextoProvider from './context/Contexcart.jsx';

const App = () => {
  return (
    <>

      <ContextoProvider>
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
      </ContextoProvider>
      <Footer />
    </>
  );
};
export default App;
