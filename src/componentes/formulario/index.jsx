import React from "react";
import CampoTexto from '../capmoTexto';
import Selecionar from '../select';
import "./Form.css";



function Formulario() {
    return (
        <div id="divform">
        <form action="">
            {/* <h1>Preencha os dados para criar o card do colaborador</h1> */}
            <CampoTexto label="Nome:" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo:" placeholder="Digite seu Cargo" />
            <CampoTexto label="Imagem:" placeholder="Digite a URL da imagem" />
            <Selecionar/>

        </form>
        </div>
    )
}

export default Formulario