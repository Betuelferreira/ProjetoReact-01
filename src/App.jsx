import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routs/home';
import './App.css'
import Sobre from './routs/sobre';
import Contatos from './routs/contantos';
import Login from './routs/login';


function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },

    {
      path: '/sobre',
      element: <Sobre />
    },

    {
      path: '/Contatos',
      element: <Contatos />
    },
    {
      path:"/login",
      element: <Login/>
    }
  
  ]



  )

  return (
    <RouterProvider router={rotas} />
  )
}


export default App
