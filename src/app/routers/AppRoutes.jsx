import { Routes, Route } from 'react-router-dom'
import HomeAdmin from '../admin/HomeAdmin'
import HomeUser from '../user/HomeUser'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='admin' element={ <HomeAdmin />} />
      <Route path='user' element={ <HomeUser />} />
    </Routes>
  )
}
