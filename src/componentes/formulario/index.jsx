import React from "react";
import CampoTexto from '../capmoTexto';
import Selecionar from '../select';
import Titulo from '../texto';
import Botao from '../botão'
import "./Form.css";
import { useState } from "react";

function handleAdd(){
    alert("teste");
}


function Formulario() {


    const [nome, setNome] = useState([])
    const [cargo, setCargo] = useState([])
    const [image, setImage] = useState([])
    



    return (
        <div id="divform">

            <form className="formulario" action="" onSubmit={handleAdd}>
                <div id="divtext">
                    <Titulo Tamanho={25} titulo="Preencha os dados para criar o card do colaborador.
"/>
                </div>

                {/* <h1>Preencha os dados para criar o card do colaborador</h1> */}
                <CampoTexto label="Nome:" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo:" placeholder="Digite seu Cargo" />
                <CampoTexto label="Imagem:" placeholder="Digite a URL da imagem" />
                <Selecionar />
                <button type="submit">Criar card</button>

            </form>
        </div>
    )
}

export default Formulario