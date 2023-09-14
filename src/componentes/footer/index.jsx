import React from "react";
import "./footer.css"
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs"

function Footer(){
    return(
        <footer className="footer_area">
            <div className="icones">
                <a  target="_blank" href="https://www.facebook.com/?locale=pt_BR"><BsFacebook color={"#ffffff"} size={20}/></a>
                <a target="_blank" href="https://www.instagram.com/"><BsInstagram color={"#ffffff"} size={20}/></a>
                <a  target="_blank" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D"><BsTwitter color={"#ffffff"} size={20}/></a>
            </div>
            <div className="logo">
                <img src="../src/assets/Logo.png" alt="" />

            </div>
            <h2>Desenvolvido por Betuel</h2>
        </footer>
    )
}

export default Footer