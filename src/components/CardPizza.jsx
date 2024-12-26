import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { Contextcart } from "../context/Contexcart"; // Asegúrate de la ruta correcta

const CardPizza = (props) => {
  const { pizzasCarrito, setPizzasCarrito } = useContext(Contextcart); // Accedemos al contexto

  // Función para agregar la pizza al carrito
  const handleAgregar = () => {
    const nuevaPizza = {
      id: props.id,           // Asegúrate de que 'id' esté disponible
      nombre: props.nombre,
      precio: props.precio,    // Asegúrate de que 'precio' esté disponible
      imagen: props.imagen,    // Asegúrate de que 'imagen' esté disponible
      ingredientes: props.ingredientes,
      count: 1,
    };

    // Verificamos si la pizza ya existe en el carrito
    const pizzaExistente = pizzasCarrito.find(pizza => pizza.id === props.id); // Comparar por id

    if (pizzaExistente) {
      // Si la pizza ya está en el carrito, incrementamos su cantidad
      const pizzasActualizadas = pizzasCarrito.map(pizza =>
        pizza.id === props.id ? { ...pizza, count: pizza.count + 1 } : pizza
      );
      setPizzasCarrito(pizzasActualizadas);
    } else {
      // Si la pizza no está en el carrito, la agregamos
      setPizzasCarrito([...pizzasCarrito, nuevaPizza]);
    }
  };

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
            <Button variant="secondary" onClick={handleAgregar}>Añadir</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPizza;
