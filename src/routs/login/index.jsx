
import "./login.css"
import { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom"
import {AuthContext} from "../../context/auth"

export default function Login(){

    const {logado} = useContext{AuthContext}

    useEffect(()=>{
        
    },[senha])
     
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    function HandleSubmit(e){
        e.preventDefault()
        console.log(usuario,senha)
    }

    function AddUser(e){
        setUsuario(e.target.value)
    }
    function AddSenha(e){
        setSenha(e.target.value)
    }


    return(
        <div className="container_login">
            
            <form className="form_login" onSubmit={HandleSubmit}>
            <div className="Logo">
               <Link to="/"><img src="./src/assets/logo.png" alt="Logo" /></Link> 
            </div>

            <label htmlFor="">Usuário:</label>
            <input onChange={AddUser} />
            <label htmlFor="">Senha:</label>
            <input onChange={AddSenha}/>
            <button className="botao" type="submit">Enviar</button>
        </form>
        </div>
        
    )
}