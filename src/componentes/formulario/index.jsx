import React from "react";
import CampoTexto from '../capmoTexto';
import Selecionar from '../select';
import Titulo from '../texto';
import Botao from '../botão'
import "./Form.css";
import { useState } from "react";



function Formulario(props) {

    function handleAdd(e) {
        e.preventDefault()
        props.colaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time,
        })
        
        
    }
    
    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")
    



    return (
        <div className="divform">

            <form className="formulario" action="" onSubmit={handleAdd}>
                <div className="divtext">
                    <Titulo Tamanho={25} titulo="Preencha os dados para criar o card do colaborador."
                    
                    />
                </div>

                {/* <h1>Preencha os dados para criar o card do colaborador</h1> */}
                <CampoTexto
                    valor={nome}
                    alterado={valor => setNome(valor)}
                    label="Nome:"
                    placeholder="Digite seu nome"
                />

                <CampoTexto
                    valor={cargo}
                    alterado={valor => setCargo(valor)}
                    label="Cargo:"
                    placeholder="Digite seu Cargo"

                />
                <CampoTexto
                    valor={imagem}
                    alterado={valor => setImagem(valor)}
                    label="Imagem:"
                    placeholder="Digite a URL da imagem" />


                <Selecionar
                    times={props.times}
                    valor={time}
                    alterado={valor => setTime(valor)}

                />
                <button type="submit">Criar card</button>

            </form>
        </div>
    )
}

export default Formulario