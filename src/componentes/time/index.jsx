import React from "react";
import "./time.css"

function Time(props){
    const cssFundo = {backgroundColor: props.fundo}
    const cssCard = {borderColor: props.card }

    return(
        <section className="time" style={cssFundo}>
            <h2 style={cssCard}>{props.nome}</h2>
        </section>
        
    )
}

export default Time