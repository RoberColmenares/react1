import React, { useContext } from 'react';
import { Contextcart } from "../context/Contexcart"; // Asegúrate de la ruta correcta

const Cart = () => {
  const { pizzasCarrito, setPizzasCarrito, total } = useContext(Contextcart);

  // Función para agregar pizza al carrito
  const handleAgregar = (i) => {
    const newPizzas = [...pizzasCarrito];
    newPizzas[i].count++;
    setPizzasCarrito(newPizzas);
  };

  // Función para quitar pizza del carrito
  const handleQuitar = (i) => {
    const newPizzas = [...pizzasCarrito];
    newPizzas[i].count--;
    setPizzasCarrito(newPizzas.filter((pizza) => pizza.count > 0));
  };

  return (
    <div className="todo">
      {pizzasCarrito.map((pizza, i) => (
        <div className='caja-carrito' key={i}>
          {/* Imagen de la pizza */}
          <img src={pizza.imagen} width={100} alt={pizza.nombre} />
          
            {/* Nombre de la pizza */}
            <p>{pizza.nombre}</p>
            {/* Precio por pizza */}
            <p>${pizza.precio}</p>
            
              {/* Botones para agregar o quitar cantidad */}
              <button onClick={() => handleQuitar(i)}>-</button>
              <p>{pizza.count}</p>
              <button onClick={() => handleAgregar(i)}>+</button>
            
          
        </div>
      ))}
      <hr />
      {/* Total */}
      <h3>Total: ${total}</h3>
      <button className='btn btn-primary'>Pagar</button>
    </div>
  );
};

export default Cart;
