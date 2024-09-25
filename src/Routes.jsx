import {BrowserRouter, Routes, Route} from 'react-router-dom' 

import HomePage from './home/HomePage'
import HomeAuth from './auth/HomeAuth'
import AppRoutes from './app/routers/AppRoutes'

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />  
        <Route path='/auth' element={<HomeAuth />} />
        <Route path='/app/*' element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}
