import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Contextcart } from '../context/Contexcart';
const Login = () => {


/*
   const [email, setEmail] = useState('');
   const [clave, setClave] = useState('');

   const boton = (e) => {
  e.preventDefault();

  if (email === '' || clave === '') {
    alert('Faltan datos');
  } else if (clave.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres');
  }else {
    alert('Bienvenido a Pizza Mamma mia');
  }
};
*/
    const navigate = useNavigate();
    const { setUser } = useContext(Contextcart)

    const handlerButton = ()=>{

      setUser(true);
      navigate('/perfil')
    }


    return (
        <>
         <div className='login'>

          <h1>Login</h1>
          <button onClick={handlerButton}>Accesder al perfil</button>

         </div>
        </>
    );
};

export default Login;