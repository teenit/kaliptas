import React from "react";
import s from "./../Header.module.css"

const Burger = ({active, setActive}) =>{
    return(
        <div className={s.burger__wrap}>
            <div className={active ? `${s.burger} ${s.active}` : s.burger} onClick={setActive}>
                <span className={`${s.b1} ${s.span}`}></span>
                <span className={`${s.b2} ${s.span}`}></span>
                <span className={`${s.b3} ${s.span}`}></span>
                <span className={`${s.b4} ${s.span}`}></span>
            </div>
        </div>
    )
}
export default Burger