import React from 'react';
import CardPizza from './CardPizza';  
import { pizzas } from './pizzas.js';

const Home = () => {
  return (
    <div className='contenedor-cartas'>
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}  
          imagen={pizza.img}   
          nombre={pizza.name}  
          descripcion={pizza.desc}
          ingredientes={pizza.ingredients}  
          precio={pizza.price}  
        />
      ))}
    </div>
  );
};

export default Home;
