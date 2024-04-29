import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router'

function App() {
  return (
    <RouterProvider router={Router} />
  )
}

export default App