import React from 'react'
import image1 from "../../../assets/Rectangle Copy.png"
import image2 from "../../../assets/Rectangle Copy 2.png"
import image3 from "../../../assets/Rectangle Copy 3.png"
import image4 from "../../../assets/Rectangle Copy 4.png"



function FourImage() {
    return (
        <div style={{display:"flex" , gap:"30px" , }}>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
    )
}

export default FourImage
