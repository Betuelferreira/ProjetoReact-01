import React from "react";

function Titulo(props) {
    return (
       
            <h1 style={{fontSize:props.Tamanho, color:props.Cor}} >{props.titulo}</h1>
        
    )

}

export default Titulo