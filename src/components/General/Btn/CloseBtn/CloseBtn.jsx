import React from "react";
import s from './style.module.css'
const CloseBtn = ({close})=>{
    return(
        <div onClick={close} className={s.btn}>
            <span className={s.btn_1}></span>
            <span className={s.btn_2}></span>
        </div>
    )
}

export default CloseBtn;