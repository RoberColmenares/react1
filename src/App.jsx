import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './assets/css/style.css';


import Registro from './components/Registro.jsx';
import Login from './components/Login.jsx';


function App() {

  return (
    <>
     
    
    <Navbar/>
      
      
      <Header/>
      <Login/>     
      {/*<Registro/> */}
      {/*<Home/> */}
      <Footer/>
    
     
    </>
  )
}

export default App
