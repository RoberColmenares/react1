import React, { useContext } from 'react';
import CardPizza from './CardPizza';
import { Contextcart } from '../context/Contexcart';

const Home = () => {
  const { pizzas } = useContext(Contextcart);

  // Verificación si no hay pizzas
  if (!pizzas || pizzas.length === 0) {
    return <p>No hay pizzas disponibles.</p>;
  }

  return (
    <div className="contenedor-pizzas">
      <h1>Deliciosas Pizzas</h1>
      <div className="pizza-lista">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            imagen={pizza.img}
            nombre={pizza.name}
            descripcion={pizza.desc}
            ingredientes={pizza.ingredients}
            precio={pizza.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
