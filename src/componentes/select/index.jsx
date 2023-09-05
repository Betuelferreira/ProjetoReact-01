import React from "react";
import "./Selecionar.css";

function Selecionar(props) {
    const Digitado = (e) => {
        props.alterado(e.target.value)
    }

    return (
        <div className="divselect">
            <label >Time</label>
            <select id="sele" value={props.valor} onChange={Digitado} name="" placeholder="">
                <option hidden >Selecione seu time</option>
                {props.times.map(time => <option>{time}</option>)}
            </select>
        </div>
    )
}

export default Selecionar