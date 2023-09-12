import React from "react";
import "./colaborador.css"

function Colaborador({nome, cargo, imagem, corCard}){
    return(
        <div className="colaborador">
            <div className="cabecalho"  style={{background: corCard}}>
                <img  src={imagem} alt="imagemPerfil" />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <p>{cargo}</p>
            </div>
        </div>
    )
}

export default Colaborador