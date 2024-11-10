import React from 'react'
import minus from "../../../assets/Group 4.svg"
import plus from "../../../assets/plus.svg"
import shape from "../../../assets/Shape.svg"
import { useState } from 'react'

export function getcount(){
    return {count};
}
function RightContent() {
    const [count ,setcount] = useState(0)

    function handleclick(){
        setcount(count + 1 )

    }
    function handledecrement(){
        if(count > 0 ){
            setcount(count - 1 )
        }
        else{
            return;
        }

    }
    
     
    return (
        <div style={{display:"flex" ,justifyContent:"center", flexDirection:"column" , gap:"30px"}} >
            <div  style={{ color: "#FF7E1B", fontFamily: "Kumbh Sans", fontSize: "13px", fontStyle: "normal", fontWeight: 700, lineHeight: "normal", letterSpacing: "2px", textTransform: "uppercase" }}>Sneaker Company</div>
            <div style={{ color: "#1D2026", fontFamily: "Kumbh Sans", fontSize: "44px", fontStyle: "normal", fontWeight: 700, lineHeight: "48px" }} >Fall Limited Edition Sneakers</div>
            <div style={{width:"445px" , color: "#69707D", fontFamily: "Kumbh Sans", fontSize: "16px", fontStyle: "normal", fontWeight: 400, lineHeight: "26px" }} >These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</div>
            <div style={{display:"flex" ,gap:"20px"}}>
                <div>$125.00</div>
               <div style={{ color: "#FF7E1B", fontFamily: "Kumbh Sans", fontSize: "16px", fontStyle: "normal", fontWeight: 700, lineHeight: "normal" }}>50%</div>
            </div>
            <div style={{ color: "#B6BCC8", fontFamily: "Kumbh Sans", fontSize: "16px", fontStyle: "normal", fontWeight: 700, lineHeight: "26px", textDecorationLine: "line-through" }}>$250.00</div>
            <div style={{display:"flex" ,gap:"20px"}}>
                <div style={{display:"flex" ,gap:"20px" ,width:"157px" ,height:"50px" ,borderRadius: "10px", background: "#F6F8FD" ,justifyContent:"center" ,alignItems:"center"}}>
                    <div onClick={handledecrement} style={{ cursor:"pointer",display:"flex" ,alignItems:"center",justifyContent:"center", width:"20px"}}>
                    <img  style={{ width: "12px", height: "3.332px", flexShrink: 0 }} src={minus} alt="" />
                    </div>
                    <div>{count}</div>
                    <img onClick={handleclick} style={{ cursor:"pointer", width: "12px", height: "12px", flexShrink: 0 }} src={plus} alt="" />
                </div>
                <div>
                    <button style={{ cursor:"pointer" , color: "#FFF", fontFamily: "Kumbh Sans", fontSize: "16px", fontStyle: "normal", fontWeight: 700, lineHeight: "normal" , width:"250px", height:"56px" , borderRadius: "10px", background: "#FF7E1B", boxShadow: "0px 20px 50px -20px #FF7E1B" ,border:"none" }}> <div style={{display:"flex" ,gap:"10px" ,justifyContent:"center" ,alignItems:"center" } }> <img style={{color:"white"}} src={shape} alt="" />     Add to cart </div> </button>
                </div>
            </div>
            {/* <Header count="count" setcount="setcount"/> */}
        </div>

    )
}

export default RightContent
