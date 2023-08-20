import React from "react";
import "./Selecionar.css";

function Selecionar(){
    return(
        <div id="divselect">
        <label id="lbls">Time</label>
        <select name="" id="idselect">
           <option value="0">Programação</option> 
           <option value="1">Fron-End</option> 
           <option value="2">Back-End</option> 
        </select>
        </div>
    )
}

export default Selecionar