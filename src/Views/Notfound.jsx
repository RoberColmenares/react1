import React from 'react'
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (

<>
    <div className='error404'>
        <div className='error'>
        </div>

        <div className='info404'>
            
            <h1>No se encontro una direccion en la URL</h1>
            <h3>Te invitamos a seguir navegando</h3>
            
            <Link to="/"><button  className='mt-5 btn btn-warning'>Click to Home</button></Link>

        </div>
    </div>
</>
  )
}

export default Notfound
