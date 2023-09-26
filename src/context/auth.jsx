import React, { useState, useEffect, useContext, createContext } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {



    const [user, setUser] = useState([
        
    ])

    /* const [logado, setLogado] = useState(false) */

    function login(usuario, senha) {
        console.log(usuario, senha)
    }

    function logaut() {
        console.log("Logout")
    }

    const cadastro = (usuario, email, idade, senha) => {
        setUser({
            nome: usuario,
            email:email,
            idade: idade,
            senha: senha
        })
        console.log(user)
    }


    return (
        <AuthContext.Provider value={{user, login, logaut, cadastro}}>
            <>{children}</>
        </AuthContext.Provider>
    )
}