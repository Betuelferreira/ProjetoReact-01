import React from "react";
import Titulo from "../texto";
import "./Org.css";
import icoCard from '../../assets/Botao_ad.png'

function Organizacao(){
    return(
        <div className="divorg">
            <h2>Minha Organização"</h2>
            <img id="botao" src={icoCard} alt="" />
        </div>
    )
}

export default Organizacao