import React from "react";
import s from './../Header.module.css'

const City = ({close}) =>{
    return(
        <div className={s.city__full} onClick={(e)=>e.target.className === s.city__full ? close() : null}>
            <a href="">Город А</a>
            <a href="">Город Б</a>
            <a href="">Город С</a>
        </div>
    )
}
export default City