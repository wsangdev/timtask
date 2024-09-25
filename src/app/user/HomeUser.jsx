import React from 'react'
import { useNavigate } from 'react-router-dom'
import Timer from './timers/Timer';

export default function HomeUser() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>  Home para el USER dentro de App </h1>
      <button onClick={() => navigate('/auth')}> Log OUT </button>
      <Timer />
    </div>
  )
}
