import "./cad.css"

export default function Cards({nome, idade, sexo, email, foto}){
    return(
        <div className="cards">
        <div className="img_perfil">
            <img src={foto} alt="" />
        </div>
        <h3>{nome}</h3>
        <p>{idade}</p>
        <p>{sexo}</p>
        <p>{email}</p>
        </div>
    )
}