import React, { useContext } from 'react';
import { Contextcart } from "../context/Contexcart"; 

const Cart = () => {
  const { pizzasCarrito, setPizzasCarrito } = useContext(Contextcart);

  // Función para agregar pizza al carrito
  const handleAgregar = (i) => {
    const newPizzas = [...pizzasCarrito];
    newPizzas[i].count++;
    setPizzasCarrito(newPizzas);
  };

  // Función para quitar pizza del carrito
  const handleQuitar = (i) => {
    const newPizzas = [...pizzasCarrito];
    if (newPizzas[i].count > 1) {
      newPizzas[i].count--;
      setPizzasCarrito(newPizzas);
    } else {
      // Si la cantidad es 1, eliminamos la pizza del carrito
      setPizzasCarrito(newPizzas.filter((pizza) => pizza.count > 0));
    }
  };

  // Calcular el total del carrito
  const total = pizzasCarrito.reduce((acc, pizza) => acc + pizza.precio * pizza.count, 0);

  return (
    <div className="todo">
      <h2>Carrito</h2>
      {pizzasCarrito.length === 0 ? (
        <p>No tienes pizzas en el carrito.</p>
      ) : (
        pizzasCarrito.map((pizza, i) => (
          <div className="caja-carrito" key={i}>
            {/* Imagen de la pizza */}
            <img src={pizza.imagen} width={200} alt={pizza.nombre} />
            
            {/* Nombre de la pizza */}
            <div className="name">
              <p>{pizza.nombre}</p>
            </div>

            {/* Precio por pizza */}
            <div className="name">
              <p>${pizza.precio}</p>
            </div>

            {/* Botones para agregar o quitar cantidad */}
            <div className="btn">
              <button onClick={() => handleQuitar(i)}>-</button>
              <p>{pizza.count}</p>
              <button onClick={() => handleAgregar(i)}>+</button>
            </div>
          </div>
        ))
      )}

      <hr />
      
      {/* Total */}
      <h3>Total: ${total.toFixed(2)}</h3>
      
      {pizzasCarrito.length > 0 && <button>Pagar</button>}
    </div>
  );
};

export default Cart;
