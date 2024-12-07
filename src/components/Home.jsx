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
