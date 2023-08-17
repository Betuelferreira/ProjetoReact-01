import React from "react";
import CampoTexto from '../capmoTexto';

function Formulario() {
    return (
        <form action="">
            <CampoTexto label="Nome:" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo:" placeholder="Digite seu Cargo" />
            <CampoTexto label="Imagem:" placeholder="Digite a URL da imagem" />
        </form>
    )
}

export default Formulario