import React from "react";
import "./Banner.css"
import bannerIMG from  '../../assets/HeaderHeader_total.png'
/* const banner = () => {
    return(
    <div>
        <h1>Banner</h1>
    </div>
)
} */

function Banner(){
    return(
        <div>
            <img className="img" src={bannerIMG} alt="" />
        </div>
    )
}



export default Banner
