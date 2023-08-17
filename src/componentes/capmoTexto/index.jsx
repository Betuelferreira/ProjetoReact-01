import React from "react";

function CampoTexto(props){
    return(
        <div>
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder} />
            
        </div>
    )
}

export default CampoTexto