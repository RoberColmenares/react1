import React from 'react'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping, faLock, faPizzaSlice} from '@fortawesome/free-solid-svg-icons'
import {faUnlock} from '@fortawesome/free-solid-svg-icons'





const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
   
      
    <>
    
  
   
   
    <div className='contenedor d'>
    
      <div className='barra'>
          <p>!Pizzeria Mamma Mia¡</p>
          <Link to="/"><button to="sd"><FontAwesomeIcon icon={faPizzaSlice}/> Home</button></Link>
          <Link to="/login"><button><FontAwesomeIcon icon={faLock}/> Login</button></Link>
          <Link to="/registro"><button><FontAwesomeIcon icon={faUnlock}/> Registro</button></Link>
          
          
      </div>
      <div className='carrito'>
        <Link to="/perfil"><button><FontAwesomeIcon icon={faLock}/>Perfil</button></Link>
        <Link to="/cart"><button>Total: ${total} <FontAwesomeIcon icon={faCartShopping}/></button></Link>
      </div>
    </div>
    </>
  )
}

export default Navbar
