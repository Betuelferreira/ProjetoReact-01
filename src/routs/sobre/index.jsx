import { useEffect } from "react"
import Banner from "../../componentes/banner"
import Footer from "../../componentes/footer"
import Header from "../../componentes/header"



export default function Sobre(){
    useEffect(()=>{
        window.scrollTo(0,0)

    },[])

    return(
        <div>
            <Header/>
            <Banner/>
            <Footer/>

      
        </div>
    )
}