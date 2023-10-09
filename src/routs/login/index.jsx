
import "./login.css"
import { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth"

export default function Login() {

    const { user, login, logout } = useContext(AuthContext)
    /* const {logado} = useContext{AuthContext}
 */
    useEffect(() => {

    }, [])

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    function HandleSubmit(e) {
        e.preventDefault()
        login(usuario, senha)
    }

    function AddUser(e) {
        setUsuario(e.target.value)
    }
    function AddSenha(e) {
        setSenha(e.target.value)
    }


    return (
        <div className="container_login">

            <div className="container_conteudo">
                <div className="animacao">
                    <img src="./src/assets/enter-otp-animate.svg" alt="" />
                </div>

                <div className="div_direita">

                    <form className="form_login" onSubmit={HandleSubmit}>

                        <div className="Logo">
                            <Link to="/"><img src="./src/assets/logo azul.png" alt="Logo" /></Link>
                        </div>

                        <p className="titulo">Login</p>

                        <div className="container_usuario">
                            <label htmlFor="">Usuário:</label>
                            <input placeholder="Usuário" onChange={AddUser} />


                            <label htmlFor="">Senha:</label>
                            <input type="password" placeholder="Senha" onChange={AddSenha} />
                        </div>

                        <div className="Esqueci_senha">
                            <div>
                                <input id="caixa" type="checkbox" />
                                <label htmlFor="caixa">Manter Conectado</label>
                            </div>

                            <Link>Esqueci a Senha</Link>

                        </div>
                        <div className="botoes">
                            <button className="botao1" type="submit">ENTRAR</button>
                            <button className="botao2"><Link to="/Cadastro">CADASTRE-SE GRÁTIS</Link> </button>
                        </div>


                    </form>
                </div>
            </div>
        </div>

    )
}