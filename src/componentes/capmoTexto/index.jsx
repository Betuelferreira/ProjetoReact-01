import React from "react";
import "./CaixaTexto.css"
import { useState } from 'react'


function CampoTexto(props){
   
        const[valor, setValor]= useState()
    return(
        <div className="divTexto">
            
            <label >{props.label}</label>
            <input onChange={(e) => setValor(e.target.value)} className="inp" type="text"  placeholder={props.placeholder} />
            {console.log(valor)}

        </div>
    )
}

export default CampoTexto