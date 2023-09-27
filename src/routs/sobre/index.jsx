/* import { useEffect, useState } from "react"
import Banner from "../../componentes/banner"
import Footer from "../../componentes/footer"
import Header from "../../componentes/header"
import axios from "axios";


export default function Sobre(){
    const[data, setData] = useState()

const HandleFetch = async () =>{
    await axios.get("https://randomuser.me/api/?results=20")
    .then((response)=>{
        setData(response.data.results)
        console.log(data)
    })

    .catch((error)=>{
        console.log(error)
    })

}

useEffect(()=>{
    HandleFetch()
},[])

    
    

    return(
        <div>
            <Header/>
            <Banner/>

            <div>{data.map((item)) => {
                return(
                    <p></p>
                )
            }
            </div>
            <Footer/>

      
        </div>
    )
} */

export default function Sobre(){
    return(
        console.log("Sobre")
    )
}