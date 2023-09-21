import React, { useState, useEffect, useContext, createContext } from "react";

export const AuthContext = createContext({});

export default function AutheProvider({ children }) {

   

    const [user, setUser] = useState([
        {
            nome: "Betuel",
            email: "betuel@gmail.com",
            idade: "20"
        }
    ])
    const [logado, setLogado] = useState(false)

    function logar(usuario, senha){

    }

    return (
        <AuthContect.Provider value={logado}>
            {children}
        </AuthContect.Provider>
    )
}