import {  Link, NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping, faLock, faPizzaSlice, faUser} from '@fortawesome/free-solid-svg-icons'
import {faUnlock} from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'; // Asegúrate de importar 'useContext'
import { Contextcart } from "../context/Contexcart.jsx"; // Asegúrate de la ruta correcta






const Navbar = () => {
  const { total, user } = useContext(Contextcart);
  
  const estiloOpciones = ({ isActive }) =>(isActive ? "estaActivo" : "opciones")

  return (
   
      
    <>
    
  
   
   
    <div className='contenedor-total'>
    
      <div className='barra'>
          
        

      <div>
      <NavLink className={estiloOpciones} to="/"><button to="sd"><FontAwesomeIcon icon={faPizzaSlice}/> Home</button></NavLink>

      {user ? (  // Si user es verdadero, muestra "Logout"
      <NavLink className={estiloOpciones} to="/logout"><button><FontAwesomeIcon icon={faUnlock}/> logout</button></NavLink>
      ) : (  // Si user es falso, muestra "Login" y "Registro"
      <>
        <NavLink className={estiloOpciones} to="/login"><button><FontAwesomeIcon icon={faLock}/> Login</button></NavLink>
        <NavLink className={estiloOpciones} to="/registro"><button><FontAwesomeIcon icon={faUnlock}/> Registro</button></NavLink>
      </>
      )}

      </div>

      <div> <Link to="/"><h1>!Pizzeria Mamma Mia¡</h1></Link> </div>
     

      <div>
      <NavLink className={estiloOpciones} to="/perfil"><button><FontAwesomeIcon icon={faUser}/>Perfil</button></NavLink>
      <NavLink className={estiloOpciones} to="/cart"><button>Total: ${total} <FontAwesomeIcon icon={faCartShopping}/></button></NavLink>

      </div>

        
         
          
          
          
      </div>
      
    </div>
    </>
  )
}

export default Navbar