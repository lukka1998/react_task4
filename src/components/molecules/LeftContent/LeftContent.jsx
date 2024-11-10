import React from 'react'
import ContentImage from '../../atoms/ContentImage/ContentImage'
import FourImage from '../../atoms/FourImage/FourImage'
function LeftContent() {
    return (
        <div style={{width:"565px"  , gap:"20px" ,display:"flex" ,flexDirection:"column" , alignItems:"flex-start" , }}>
            <ContentImage></ContentImage>
            <FourImage></FourImage>
        </div>
    )
}

export default LeftContent
