import React from 'react'
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
          <button><FontAwesomeIcon icon={faPizzaSlice}/> Home</button>
          <button><FontAwesomeIcon icon={faLock}/> Login</button>
          <button> <FontAwesomeIcon icon={faUnlock}/> Register</button>
          
      </div>
      <div className='carrito'>
      <button>Total: ${total} <FontAwesomeIcon icon={faCartShopping}/></button>
      </div>
    </div>
    </>
  )
}

export default Navbar
