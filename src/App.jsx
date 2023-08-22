import { useState } from 'react'
import './App.css'
import Banner from'./componentes/banner';
import Formulario from './componentes/formulario';
import Organizacao from './componentes/org'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='container'>
      <Banner/>
      <Formulario/>
      <Organizacao/>
      
    </div>


    
  )
}

export default App
