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
import PizzaDetalle from './components/PizzaDetalle.jsx';
import { useContext } from 'react';
import { Contextcart } from './context/Contexcart.jsx';
import Logout from './Views/Logout.jsx';



const App = () => {

  const { user } = useContext(Contextcart)
  return (
    <>
      
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/pizza/:id" element={<PizzaDetalle />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/perfil" element={
            user ?
            <Perfil></Perfil> :
            <Login></Login>
            }/>
          <Route path="/*" element={<Notfound />} />
        </Routes>
      
      <Footer />
    </>
  );
};
export default App;
