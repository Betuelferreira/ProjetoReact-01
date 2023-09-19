import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';

        function Header() {
            return (
              <header className="navegacao">
                <Link to="/"><img src="./src/assets/logo.png" alt="Logo" /></Link>

                <div className="navbar">
                    <Link  to="/">Home</Link>
                    <Link to="/sobre">Sobre</Link>
                    <Link to="/contatos">Contato</Link>
                </div>
                <div>
                  <Link className="login_buton" to="/login">login</Link>
                </div>
              
              </header>
             /*  <header>
                 <a href="/"><img src="./src/assets/Logo.png" alt="" /></a> 
                
                <nav>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contatos">Contato</a></li>
                  </ul>
                </nav>
              </header> */
            );
          }
          
          export default Header;
