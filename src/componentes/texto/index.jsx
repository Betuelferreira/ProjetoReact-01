import React from "react";

function Titulo(props) {
    return (
        <div id="divtext">
            <h1 id={props.idh1}>{props.titulo}</h1>
        </div>
    )

}

export default Titulo