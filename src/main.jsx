import dom from 'react-dom/client'
import './global.css'
import MainRoutes from './Routes'

const root = dom.createRoot(document.getElementById('root'))

root.render(
  <>
    <MainRoutes />
  </>
)