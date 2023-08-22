import React from "react";
import "./Selecionar.css";

function Selecionar(){
    return(
        <div className="divselect">
        <label id="lbls">Time</label>
        <select name="" id="idselect" placeholder="teste">
           <option value="0">Programação</option> 
           <option value="1">Fron-End</option> 
           <option value="2">Data Science</option> 
           <option value="3">Deveps</option> 
           <option value="4">UX e Design</option> 
           <option value="5">Mobile</option>
           <option value="6">Inovação e Gestão</option> 
        </select>
        </div>
    )
}

export default Selecionar