import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [role, setRole] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'admin') {
      navigate('/app/admin')
    } else if (role === 'user') {
      navigate('/app/user')
    }
  }

  const handleTypeChange = (e) => {
    setRole(e.target.value)
  }

  return (
    <form onSubmit={handleLogin}>
      <section>
        <label htmlFor=""> User: </label>
        <input type="email" placeholder='correo electronico' />
      </section>
      <section>
        <label htmlFor=""> PassWord: </label>
        <input type="password" placeholder='password' />
      </section>
      <section style={{display: 'flex', gap: '2rem'}}>
        {/* Inpunt USER */}
        <div>
          <input name='role' id='user' type="radio"  value="user" onChange={handleTypeChange} checked={role === 'user'} />
          <label htmlFor="user"> User </label>
        </div>

        {/* Input ADMIN */}
        <div>
          <input name='role' id='admin' type="radio" value="admin" onChange={handleTypeChange} checked={role === 'admin'} />
          <label htmlFor="admin"> Admin </label>
        </div>
      </section>

      <button type='submit'> INGRESAR </button>
    </form>
  )
}
