import React, { useState } from "react";
import s from "./../Header.module.css"

const Language = () =>{
    const changeLang = (arg)=>{
        let a = localStorage.getItem('lang');
        let b = window.location.pathname;
        let c = '';
        if(a === 'ru' || a === 'en'){
            c = b.slice(4);
        }else{
            c = b.slice(1)
        }
        let link = `${window.location.origin}/${arg}${c}`;
        localStorage.setItem('lang','')
        window.location.href = link;
    }
    return(
        <div className={s.lang__wrap}>
            <p className={s.lang} tabIndex={0} onClick={()=>{
                changeLang('ru/')
            }}>Ru</p>
            <div className={s.lang__line}></div>
            <p className={s.lang} tabIndex={0} onClick={()=>{     
                changeLang('')         
            }}>Ge</p>
            <div className={s.lang__line}></div>
            <p className={s.lang} tabIndex={0} onClick={()=>{
                changeLang('en/')
            }}>En</p>
        </div>
    )
}
export default Language