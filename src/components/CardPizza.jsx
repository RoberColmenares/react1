import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

const CardPizza = (props) => {
  return (
    <div className='pizza-card'> 
      <Card style={{ width: '100%' }}> 
        <Card.Img variant="top" src={props.imagen} alt={props.nombre} />
        <Card.Body>
          <Card.Title>{props.nombre}</Card.Title>
          <div>{props.descripcion}</div> 
          <hr />
          <div>
            <div className='text-center'>
              <FontAwesomeIcon icon={faPizzaSlice} /> Ingredientes:
            </div>
            <ul>
              {props.ingredientes.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <hr />
          <div>
            <div>Precio: ${props.precio}</div>
          </div>
          <div className='d-flex justify-content-around'>
            <Button variant="light" style={{ border: '2px solid black' }}>Ver más</Button>
            <Button variant="secondary">Añadir</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPizza;
