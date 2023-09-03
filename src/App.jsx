import { useState } from 'react'
import './App.css'
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import Organizacao from './componentes/org'
import Time from './componentes/time';
import Selecionar from './componentes/select'; 

 
function App() {
  const [colaboradores, setColaboradores] = useState([])
  const [programador, setProgramador] = useState([])
  const [front, setFront] = useState([])
  const [data, setData] = useState([])
  const [devops, setDevops] = useState([])
  const [ux, setUx] = useState([])
  const [mobile, setMobile] = useState([])
  const [gestão, setGestão] = useState([])
  /* let Vtime = document.getElementById("sele") */

  const NovoColaborador = (colaborador) => {
   /*  if(Vtime == "programação"){
     console.log(colaboradores)
      setColaboradores([...colaboradores, colaborador]);
    } */
    console.log(colaboradores)
    setColaboradores([...colaboradores, colaborador]);
    
  }

  const times = [
    {
    nome: "Programação",
    fundo: "#D9F7E9" ,
    card: "#57c278",
    },

    {
    nome: "Front-End",
    fundo: "#E8F8FF" ,
    card: "#82CFFA",
    },

    {
    nome: "Data Science",
    fundo: "#F0F8E2" ,
    card: "#A6D157",
    },

    {
    nome: "Devops",
    fundo: "#FDE7E8" ,
    card: "#E06B69",
    },

    {
    nome: "Ux e Design",
    fundo: "#FAE9F5" ,
    card: "#DB6EBF",
    },

    {
    nome: "Mobile",
    fundo: "#FFF5D9" ,
    card: "#FFBA05",
    },
    
    {
    nome: "Gestão",
    fundo: "#FFEEDF" ,
    card: "#FF8A29",
    },
]
  return (

    <div className='container'>
      <Banner />
      <Formulario colaboradorCadastrado={colaborador => NovoColaborador(colaborador)} />
      <Organizacao />
      {times.map(time => <Time nome={time.nome} fundo={time.fundo} card={time.card}/>)}

    </div>



  )
}

export default App
