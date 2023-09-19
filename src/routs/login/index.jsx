
import "./login.css"
import { useState } from 'react'
export default function Login(){
     
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
        <div className="container">
            
            <form className="formLogin" onSubmit={HandleSubmit}>
            <div className="Logo">
                <img src="./src/assets/logo.png" alt="Logo" />
            </div>

            <label htmlFor="">Usuario</label>
            <input onChange={AddUser} />
            <label htmlFor="">Senha</label>
            <input onChange={AddSenha}/>
            <button className="botao" type="submit">Enviar</button>
        </form>
        </div>
        
    )
}