import React, { useState } from 'react'
import Login from './login/Login'
import { useNavigate } from 'react-router-dom'
import Register from './register/Register'

export default function HomeAuth() {
  const navigate = useNavigate()
  const [ isLogin, setIsLogin ] = useState(true)

  const togleAuth = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div>
      <button onClick={() => navigate('/')}> HOME </button>
      <h1> Componete principal de AUNTETICACION </h1>
      {isLogin ? <Login /> : <Register /> }
      <button onClick={togleAuth}>
        {isLogin ? 'Ir a Registro' : 'Ir a Login'}
      </button>
    </div>
  )
}
