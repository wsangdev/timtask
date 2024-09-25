import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeAdmin() {
  const navigate = useNavigate()

  return (
    <div>
      <h1> Admin DashBOARD </h1>
      <p> Esto es una vista para el admin donde puede ir un template </p>
      <button onClick={() => navigate('/auth')}> Log OUT </button>
    </div>
  )
}
