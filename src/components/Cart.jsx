import React, { useState } from 'react';
import { pizzaCart } from './pizzas.js'; 

const Cart = () => {
  const [pizzasCarrito, setPizzasCarrito] = useState(pizzaCart);


  const handleAgregar = (i) => {
    pizzasCarrito[i].count++;
    setPizzasCarrito([...pizzasCarrito]);
  };

  
  const handleQuitar = (i) => {
    pizzasCarrito[i].count--;
    setPizzasCarrito([...pizzasCarrito.filter((pizza) => pizza.count > 0)]);
  };

 
  const calcularTotal = () => {
    return pizzasCarrito.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
  };

  return (
    <div className="todo">
      {pizzasCarrito.map((pizza, i) => (
        <div className='caja-carrito' key={i}>
          <img src={pizza.img} width={100} alt={pizza.name} />
          <p>{pizza.name}</p>
          <p>${pizza.price}</p>
          <button onClick={() => handleQuitar(i)}>-</button>
          <p>{pizza.count}</p>
          <button onClick={() => handleAgregar(i)}>+</button>
        </div>
      ))}

      <hr />
      <h3>Total: ${calcularTotal()}</h3> 
      <button className='btn btn-primary'>Pagar</button> 
    </div>
  );
};

export default Cart;

