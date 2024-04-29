import { createBrowserRouter } from 'react-router-dom'
import Home from '@/views/Home.jsx'
import Checkout from '@/views/Checkout.jsx'


const Router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/checkout', element: <Checkout /> },
])

export default Router