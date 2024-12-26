import React, { useState, useEffect } from 'react';

export const Contextcart = React.createContext();

const ContextoProvider = ({ children }) => {
  const [pizzasCarrito, setPizzasCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  // Función para calcular el total
  const calcularTotal = () => {
    const total = pizzasCarrito.reduce((total, pizza) => total + (pizza.precio * pizza.count), 0);
    setTotal(total);
  };

  useEffect(() => {
    calcularTotal();
  }, [pizzasCarrito]);

  return (
    <Contextcart.Provider value={{ pizzasCarrito, setPizzasCarrito, total }}>
      {children}
    </Contextcart.Provider>
  );
};

export default ContextoProvider;
 