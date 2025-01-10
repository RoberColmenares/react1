import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { Contextcart } from "../context/Contexcart"; // Importa el contexto

const CardPizza = ({ id, imagen, nombre, descripcion, ingredientes, precio }) => {
  const { pizzasCarrito, setPizzasCarrito, pizzas } = useContext(Contextcart); // Usamos el contexto
  const navigate = useNavigate();

  // Encontrar la pizza en el contexto usando el ID
  const pizza = pizzas.find((pizza) => pizza.id === id);

  // Si no se encuentra la pizza, podemos mostrar un mensaje o retornar null
  if (!pizza) {
    return <p>Pizza no encontrada.</p>;
  }

  // Función para agregar la pizza al carrito
  const handleAgregar = () => {
    const nuevaPizza = {
      id: pizza.id,
      nombre: pizza.name,
      precio: pizza.price,
      imagen: pizza.img,
      ingredientes: pizza.ingredients,
      count: 1,
    };

    // Verificamos si la pizza ya existe en el carrito
    const pizzaExistente = pizzasCarrito.find((p) => p.id === pizza.id);

    if (pizzaExistente) {
      // Incrementar cantidad
      const pizzasActualizadas = pizzasCarrito.map((p) =>
        p.id === pizza.id ? { ...p, count: p.count + 1 } : p
      );
      setPizzasCarrito(pizzasActualizadas);
    } else {
      // Agregar nueva pizza
      setPizzasCarrito([...pizzasCarrito, nuevaPizza]);
    }
  };

  const verDetalle = () => {
    navigate(`/pizza/${pizza.id}`);
  };

  return (
    
      <div className="card-pizza">
        <img src={imagen} alt={nombre} />
        <h2>{nombre}</h2>
        <div className='descripcion'>
        <p>{descripcion}</p>
        </div>
        
        <h2>ingredientes</h2>
        <div>
        <ul>
          {ingredientes.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        </div>
       
        <p>Precio: ${precio}</p>
        <div className="btn-contenedor">
          <button onClick={verDetalle}>Ver más</button>
          <button onClick={handleAgregar}>Añadir</button>
        </div>
      </div>
    
  );
};

export default CardPizza;
