import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routs/home';
import './App.css'
import Sobre from './routs/sobre';
import Contatos from './routs/contantos';
import Login from './routs/login';
import AuthProvider from './context/auth';
import Cadastro from './routs/Cadastro';


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
    },
    {
      path:"/Cadastro",
      element: <Cadastro/>
    }
  
  ]



  )

  return (
    <AuthProvider>
      <RouterProvider router={rotas} />
    </AuthProvider>
  )
}


export default App
