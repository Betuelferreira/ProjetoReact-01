import React from "react";
import "./time.css"
import Colaborador from "../colaborador";

function Time(props) {
    const cssFundo = { backgroundColor: props.fundo }
    const cssCard = { borderColor: props.card }

    return (


        (props.colaboradores.length > 0) ? 


        <section className="time" style={cssFundo}>
            <h2 style={cssCard}>{props.nome}</h2>
            <div className="cards">
                {props.colaboradores.map(
                    colaborador =>
                        <Colaborador
                            key={colaborador.nome}
                            corCard={props.card}
                            colaborador={colaborador}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                        />)}
            </div>
        </section>
        : <div></div>

    )
}

export default Time