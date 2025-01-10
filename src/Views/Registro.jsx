import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Registro = () => {



   const [email, setEmail] = useState('');
   const [clave, setClave] = useState('');
   const [claver, setClaver] = useState('');

   const boton = (e) => {
  e.preventDefault();

  if (email === '' || clave === '' || claver === '') {
    alert('Faltan datos');
  } else if (clave !== claver) {
    alert('Las contraseñas no coinciden');
  }else if (clave.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres');
  }else {
    alert('Datos enviados');
  }
};

  




    return (
        <>
        <div className='registro'>
            <Form >
                <Form.Group className="mb-3 d-flex flex-column w-100 " controlId="formBasicEmail">
                    <Form.Label>Ingresa tu Email</Form.Label>
                    <Form.Control type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
                    
                </Form.Group>

                <Form.Group className="mb-3 d-flex flex-column w-100" controlId="formBasicPassword">
                    <Form.Label>Ingrese Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setClave(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3 d-flex flex-column w-100" controlId="formBasicPassword">
                    <Form.Label>Repita Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setClaver(e.target.value)}/>
                </Form.Group>

            

                <button type="submit" onClick={boton}>
                    Submit
                </button>


                </Form>
            </div>
        </>
    );
};

export default Registro;