
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPizzaSlice} from '@fortawesome/free-solid-svg-icons'




const CardPizza = (props) => {

  


  
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        
        <hr/>
        
        <Card.Text>
          <p className='text-center'>Ingredientes</p>
          <p><FontAwesomeIcon icon={faPizzaSlice}/> {props.ingredientes}</p>
        </Card.Text>
        <Card.Text>
        <hr/>
        <p>Precio: ${props.precio}</p>
        
        </Card.Text>
        <div className='d-flex justify-content-around'>
        <Button variant="Light" style={{ border: '2px solid black' }}>Ver mas</Button>
        <Button variant="secondary">añadir</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardPizza
