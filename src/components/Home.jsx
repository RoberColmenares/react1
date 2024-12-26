import React, { useEffect, useState } from 'react';
import CardPizza from './CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    async function consumo() {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data); // `data` es el array completo
      } catch (error) {
        console.error("Error al consumir la API:", error);
      }
    }

    consumo();
  }, []);

  return (
    <div className='contenedor-cartas'>
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          id={pizza.id}          // Asegúrate de pasar el id
          imagen={pizza.img}      // Asegúrate de pasar la imagen
          nombre={pizza.name}     // Asegúrate de pasar el nombre
          descripcion={pizza.desc}
          ingredientes={pizza.ingredients}
          precio={pizza.price}    // Asegúrate de pasar el precio
        />
      ))}
    </div>
  );
};

export default Home;
