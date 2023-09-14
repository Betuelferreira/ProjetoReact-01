import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routs/home';
import './App.css'
import Sobre from './routs/sobre';


function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },

    {
      path: '/sobre',
      element: <Sobre />
    },]



  )

  return (
    <RouterProvider router={rotas} />
  )
}


export default App
