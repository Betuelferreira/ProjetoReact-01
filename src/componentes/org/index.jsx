import React from "react";
import Titulo from "../texto";
import "./Org.css";

function Organizacao(){
    return(
        <div id="divorg">
            <Titulo Tamanho={20} Cor="#6278F7" titulo="Minha Organização" />
            <img  src="./src/assets/Botão add-01 1.png" alt="" />
        </div>
    )
}

export default Organizacao