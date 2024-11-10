import React from 'react'
import LeftContent from '../../molecules/LeftContent/LeftContent'
import RightContent from '../../molecules/RightContent/RightContent'
function MainContent() {
    return (
        <div style={{display:"flex" ,width:"1110px" , margin:"auto" , padding:"40px" ,justifyContent:"space-between"}} >
            <LeftContent></LeftContent>
            <RightContent></RightContent>
        </div>
    )
}

export default MainContent
