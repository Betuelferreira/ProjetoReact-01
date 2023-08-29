import React from "react";
import "./CaixaTexto.css"
import { useState } from 'react'


function CampoTexto(props){
    
    
    const Digitado = (e) =>{
        props.alterado(e.target.value)
     }

        /* const[valor, setValor]= useState() */
    return(
        <div className="divTexto">
            
            <label >{props.label}</label>
            <input value={props.valor} onChange={Digitado} className="inp" type="text"  placeholder={props.placeholder} />
            

        </div>
    )
}

export default CampoTexto