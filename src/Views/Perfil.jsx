import React, { useEffect, useState } from 'react'

const Perfil = () => {
  const [datosUsuario, setDatosUsuario] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('token') // Obtener el token de localStorage
    const getData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/auth/me', {
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        })
        if (!res.ok) {
          throw new Error(`Error: ${res.status} - ${res.statusText}`)
        }
        const data = await res.json() // Parsear la respuesta a JSON
        setDatosUsuario(data) 
        console.log(data)// Actualizar el estado con los datos obtenidos
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error)
        
      }
    }
    getData()
  }, [])

  return (
    <div className='Profile'>
      <h1>Perfil de usuario</h1>
      <hr />
      <div>
        <strong>Email:</strong>
        <span>{datosUsuario?.email || "Cargando..."}</span>
      </div>
      <div>
        <strong>ID:</strong>
        <span>{datosUsuario?.id || "Cargando..."}</span>
      </div>
    </div>
  )
}

export default Perfil
