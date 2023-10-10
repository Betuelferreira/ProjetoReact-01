
/* import "./login.css" */
import { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom"
import {AuthContext} from "../../context/auth"
import "./cadastro.css"
import Animacao from '../../assets/sign-up-animate.svg'

export default function Cadastro(){

    const {user, login, logout, cadastro} = useContext(AuthContext)
    /* const {logado} = useContext{AuthContext}
 */
    useEffect(()=>{
        
    },[])
     
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")
    const [idade, setIdade] = useState("")


    function HandleSubmit(e){
        e.preventDefault()
        cadastro(usuario,senha,email,idade)
    }

    function AddUser(e){
        setUsuario(e.target.value)
    }
    function AddSenha(e){
        setSenha(e.target.value)
    }


    return(
        <div className="container_login">


            <div className='container_conteudo'>
                <div className='animacao'>

                    <h1>Cadastre-se agoro
                        gratúito
                    </h1>
                    <img src={Animacao} alt="" />
                </div>

            <form className="div_direita" onSubmit={HandleSubmit}>
            <div className="logo">
               <Link to="/"><img src="./src/assets/logo.png" alt="Logo" /></Link> 
            </div>

            <label htmlFor="">Usuário:</label>
            <input onChange={AddUser} />
            <label htmlFor="">Email:</label>
            <input type='email' onChange={(e)=> setEmail(e.target.value)} />
            <label  htmlFor="">idade:</label>
            <input type='number' onChange={(e)=> setIdade(e.target.value)}/>
            <label htmlFor="">Senha:</label>
            <input type="password" onChange={AddSenha}/>
            
            <button className="botao" type="submit">Enviar</button>
        </form>
        </div>
        </div>
        
    )
}