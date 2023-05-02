import React from "react";
import s from "./../Header.module.css"

const Languages = () =>{
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
        <div className={s.languages__wrap}>
             <div className={s.languages__item}><span to={'/admin'} onClick={()=>{
               changeLang('')                
            }}>Ge</span></div>
            <div className={s.line}></div>
            <div className={s.languages__item}><span onClick={()=>{
                changeLang('ru/')
            }}>Рус</span></div>
            <div className={s.line}></div>
            <div className={s.languages__item}><span onClick={()=>{
                changeLang('en/')
            }}>Eng</span></div>
        </div>
    )
}
export default Languages;