import React from 'react'
import './styles.css'
function Button({text,onClick,outlined}) {
    return (
        <div
         className={outlined ? 'outlined-btn': 'btn'} 
         onClick={()=>console.log("Button Clicked")}>
            {text}
        </div>
    )
}

export default Button
