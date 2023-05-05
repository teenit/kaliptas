import React from "react";
import s from './../Header.module.css'

const City = ({close}) =>{
    return(
        <div className={s.phone__full} onClick={(e)=>e.target.className === s.phone__full ? close() : null}>
            <a href="tel:+995 066 666 66 66">+995 066 666 66 66</a>
            <a href="tel:+995 066 666 66 66">+995 066 666 66 66</a>
            <a href="tel:+995 066 666 66 66">+995 066 666 66 66</a>
        </div>
    )
}
export default City