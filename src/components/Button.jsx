import React from "react";
import "../styles/components/Button.css"

const Button = ({buttonText})=>{
    return(<>
    <button className="btn-slider">
    <span>{buttonText}</span>
    </button>
    </>)
}
export default Button