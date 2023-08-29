import { useState } from 'react'
import './App.css'
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import Organizacao from './componentes/org'


function App() {
  const [colaboradores, setColaboradores] = useState([])
  const NovoColaborador = (colaborador) => {
    console.log(colaboradores)
    setColaboradores([...colaboradores, colaborador]);
    
  }
  return (

    <div className='container'>
      <Banner />
      <Formulario colaboradorCadastrado={colaborador => NovoColaborador(colaborador)} />
      <Organizacao />

    </div>



  )
}

export default App
