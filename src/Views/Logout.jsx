import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contextcart } from '../context/Contexcart'; // Importar el contexto

const Logout = () => {
  const { setUser } = useContext(Contextcart); // Obtener setUser del contexto
  const navigate = useNavigate(); // Hook para redirigir a otra página

  const handleLogout = () => {
    setUser(false); // Establecer user a false, lo que "cierra sesión"
    navigate('/'); // Redirigir a la página principal o a la de login
  };

  return (
    <div className="logout">
      <h2>Estás seguro de que deseas cerrar sesión?</h2>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Logout;
