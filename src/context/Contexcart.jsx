import React, { useState, useEffect } from 'react';

export const Contextcart = React.createContext();

const ContextoProvider = ({ children }) => {
  const [pizzasCarrito, setPizzasCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [pizzas, setPizzas] = useState([]);
  const [user, setUser] = useState(false)
  

  // Función para calcular el total
  const calcularTotal = () => {
    const total = pizzasCarrito.reduce((total, pizza) => total + (pizza.precio * pizza.count), 0);
    setTotal(total);
  };

  useEffect(() => {
    calcularTotal();
  }, [pizzasCarrito]);

  

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
    <Contextcart.Provider value={{ pizzasCarrito, setPizzasCarrito, total, pizzas, setPizzas, user, setUser}}>
      {children}
    </Contextcart.Provider>
  );
};

export default ContextoProvider;
 