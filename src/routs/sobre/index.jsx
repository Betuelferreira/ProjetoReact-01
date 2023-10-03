import { useEffect, useState } from "react"
import Banner from "../../componentes/banner"
import Footer from "../../componentes/footer"
import Header from "../../componentes/header"
import axios from "axios";
import Cards from "../../componentes/cards";
import "./sobre.css"


export default function Sobre() {
    const [data, setData] = useState([])

    const HandleFetch = async () => {

        await axios.get("https://randomuser.me/api/?results=20")
            .then((response) => {
                setData(response.data.results)
                console.log(data)
            })

            .catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {
        HandleFetch()
    }, [])




    return (
        <div>
            <Header />
            <Banner />
            <div className="container sobre_area">
                {data.map((item) => {
                    return (
                        <Cards key={item.cell}
                            foto={item.picture.medium}
                            nome={item.name.first}
                            idade={item.dob.age}
                            email={item.email}
                            sexo={item.gender}

                        />

                    )
                })}
            </div>

            <Footer />

        </div>
    )
}

/* export default function Sobre(){
   return(
       console.log("Sobre")
   )
}  */