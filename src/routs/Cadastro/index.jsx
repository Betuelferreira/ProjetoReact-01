
/* import "./login.css" */
import { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom"
import {AuthContext} from "../../context/auth"
import "./cadastro.css"

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
            
            <form className="form_login cadastro" onSubmit={HandleSubmit}>
            <div className="logo">
               <Link to="/"><img src="./src/assets/logo.png" alt="Logo" /></Link> 
            </div>

            <label htmlFor="">Usuário:</label>
            <input onChange={AddUser} />
            <label htmlFor="">Senha:</label>
            <input onChange={AddSenha}/>
            <label htmlFor="">Email:</label>
            <input type='email' onChange={(e)=> setEmail(e.target.value)} />
            <label htmlFor="">idade:</label>
            <input type='texto' onChange={(e)=> setIdade(e.target.value)}/>
            
            <button className="botao" type="submit">Enviar</button>
        </form>
        </div>
        
    )
}