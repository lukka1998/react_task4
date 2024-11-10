import React from 'react'
import title_image from "../../../assets/sneakers 2 (1).svg"
import cart_logo from "../../../assets/Group 14 (1).svg"
import user_image from "../../../assets/Oval.png"
import RightContent from '../../molecules/RightContent/RightContent'
function Header({}) {
    return (
        <div>
            <div style={{display:"flex" ,gap:"20px", padding:"40px  0 ", alignItems:"center" ,justifyContent:"space-between" ,borderBottom:"1px solid gray" ,width:"1110px" ,textAlign:"center" ,margin:"auto" }}>
                
                <div style={{display:'flex', gap:"50px" }} className="menu">
                    <img src={title_image} alt="" />
                    <div style={{ color: "#69707D", fontFamily: "Kumbh Sans", fontSize: "15px", fontStyle: "normal", fontWeight: 400, lineHeight: "26px"}}>Collections</div>
                    <div style={{ color: "#69707D", fontFamily: "Kumbh Sans", fontSize: "15px", fontStyle: "normal", fontWeight: 400, lineHeight: "26px"}}>Men</div>
                    <div style={{ color: "#69707D", fontFamily: "Kumbh Sans", fontSize: "15px", fontStyle: "normal", fontWeight: 400, lineHeight: "26px"}}>Women</div>
                    <div style={{ color: "#69707D", fontFamily: "Kumbh Sans", fontSize: "15px", fontStyle: "normal", fontWeight: 400, lineHeight: "26px"}}>About</div>
                    <div style={{ color: "#69707D", fontFamily: "Kumbh Sans", fontSize: "15px", fontStyle: "normal", fontWeight: 400, lineHeight: "26px"}}>Contact</div>
                </div>
                <div style={{display:"flex" , gap:"20px" , justifyContent:"center", alignItems:"center"}}>
                    <div>
                    <div style={{display: 1 > 0? "block" : "none",}} >{}</div>
                    <img src={cart_logo} alt="" />
                    </div>
                    <img style={{width:"50px"}} src={user_image} alt="" />



                </div>

            </div>


        </div>
    )
}

export default Header
