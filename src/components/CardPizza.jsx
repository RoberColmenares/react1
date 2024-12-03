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
          <Card.Text>{props.descripcion}</Card.Text>
          <hr />
          <Card.Text>
            <p className='text-center'>
              <FontAwesomeIcon icon={faPizzaSlice} /> Ingredientes:
            </p>
            <ul>
              {props.ingredientes.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Card.Text>
          <hr />
          <Card.Text>
            <p>Precio: ${props.precio}</p>
          </Card.Text>
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
