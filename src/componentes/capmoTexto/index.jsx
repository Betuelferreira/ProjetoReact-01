import React from "react";
import "./CaixaTexto.css"
/* import { useState } from 'react' */


function CampoTexto(props){

    return(
        <div className="divTexto">
            
            <label >{props.label}</label>
            <input className="inp" type="text" placeholder={props.placeholder} />
            

        </div>
    )
}

export default CampoTexto