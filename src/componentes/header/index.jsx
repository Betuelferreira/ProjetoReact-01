import React from "react";
import "./header.css";

        function Header() {
            return (
              <header>
                 <a href="/"><img src="./src/assets/Logo.png" alt="" /></a> 
                {/* <h1>Meu Site</h1> */}
                <nav>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contatos">Contato</a></li>
                  </ul>
                </nav>
              </header>
            );
          }
          
          export default Header;
