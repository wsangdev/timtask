import { useNavigate } from "react-router-dom"

export default function HomePage() {
  const navigate = useNavigate()

  const goLogin = () => {
    navigate('/auth')
  }

  return (
    <div>
      Landing Page Home 
      <button onClick={goLogin}> Login </button>
    </div>
  )
}
