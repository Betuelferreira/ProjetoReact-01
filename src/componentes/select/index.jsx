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
                <option >Programação</option>
                <option >Fron-End</option>
                <option >Data Science</option>
                <option >Deveps</option>
                <option >UX e Design</option>
                <option >Mobile</option>
                <option >Inovação e Gestão</option>
            </select>
        </div>
    )
}

export default Selecionar