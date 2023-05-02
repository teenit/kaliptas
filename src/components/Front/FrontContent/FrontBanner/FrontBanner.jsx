import React from "react";
import s from './Banner.module.css'
const FrontBanner  =()=>{
    return(
        <div className={s.banner__wrap}>
        <div className={s.banner}>
            <button className={s.banner__button}></button>
        </div>
    </div>
    )
}
export default FrontBanner