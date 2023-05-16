import React from "react";
import s from "./../Header.module.css"

const Language = () =>{
    const changeLang = (arg)=>{
        let newLanguage = localStorage.getItem('LNG').toLowerCase();
        let defaultLocation = window.location.pathname;
        let newLocation = '';
        if(newLanguage !== "ge"){
            newLocation = defaultLocation.slice(4);
        }else{
            newLocation = defaultLocation.slice(1)
        }
        window.location.href = `${window.location.origin}/${arg}${newLocation}`;
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