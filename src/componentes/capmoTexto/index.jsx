import React from "react";
import "./CaixaTexto.css"
function CampoTexto(props){
    return(
        <div id="divTexto">
            <label>{props.label}</label>
            <input id="inp" type="text" placeholder={props.placeholder} />
            
        </div>
    )
}

export default CampoTexto