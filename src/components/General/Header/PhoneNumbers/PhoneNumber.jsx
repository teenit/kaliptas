import React from "react";
import s from "./../Header.module.css"

const PhoneNumber = ({close}) =>{
    return(
        <div className={s.phone__full} onClick={(e)=>e.target.className === s.phone__full ? close() : null}>
            <a href="tel:+380 67 456 2343">+995 97 456 2343</a>
            <a href="tel:+380 67 456 2343">+995 97 456 2343</a>
            <a href="tel:+380 67 456 2343">+995 97 456 2343</a>
        </div>
    )
}
export default PhoneNumber