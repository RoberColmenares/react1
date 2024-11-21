import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {



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

  


    return (
        <>
        <div className='cajaregistro'>
            <Form >
                <Form.Group className="mb-3 d-flex flex-column w-100 " controlId="formBasicEmail">
                    <Form.Label>Ingresa tu Email</Form.Label>
                    <Form.Control type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
                    
                </Form.Group>

                <Form.Group className="mb-3 d-flex flex-column w-100" controlId="formBasicPassword">
                    <Form.Label>Ingrese Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setClave(e.target.value)}/>
                </Form.Group>


                <Button className=" mb-5 mt-5" variant="primary" type="submit" onClick={boton}>
                    Submit
                </Button>


                </Form>
            </div>
        </>
    );
};

export default Login;