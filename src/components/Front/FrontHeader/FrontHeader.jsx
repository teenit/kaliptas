import React, { useState } from "react";
import s from './Header.module.css';
import logo from './../../../img/logo.png';
import arrowImg from './../../../img/collapse-arrow-50.png'
import City from "./Cities/City";
import Phone from "./Phones/Phone"
import {Link} from "react-router-dom";
import Language from "./Language/Language";
import { useTranslation } from "react-i18next";
import {getLanguageForLink} from "../../functions/getLanguage";

const FrontHeader  =()=>{
    const {t} = useTranslation()
    const[phone,setPhone] =  useState(false)
    const[city,setCity] = useState(false)
    const lang = getLanguageForLink();

    return(
        <header className={s.wrap}>
            <div className={s.inner}>
                <div className={s.inner__left}>
                    <div className={s.logo}>
                        <Link to={lang.length > 0 ? "/" + getLanguageForLink() + "/" : "/"}><img className={s.logo__image} src={logo} alt="Логотип"/></Link>
                    </div>

                    <div className={`${s.city__wrap} ${city ? s.city__wrap__change : null}`} tabIndex={0} onClick={()=>{
                        setCity(!city)
                    }}>
                        <p className={s.city__title}>Тбилиси</p>
                        <img className={`${s.arrow} ${city ? s.arrow__change : s.arrow__ok}`} src={arrowImg} alt="Стрелка" />
                        {city ? <City close = {()=>setCity(!city)}/> : null}
                    </div>

                    <div className={`${s.phone__wrap} ${phone ? s.phone__wrap__change : null}`} tabIndex={0} onClick={()=>{
                        setPhone(!phone)
                    }}>
                        <a href="tel:+995 066 666 66 66">+995 066 666 66 66</a>
                        <img className={`${s.arrow} ${phone ? s.arrow__change : s.arrow__ok}`} src={arrowImg} alt="Стрелка" />
                        {phone ? <Phone close = {()=>setPhone(!phone)}/> : null}
                    </div>
                    
                </div>
                <div className={s.inner__right}>
                    <p className={s.delivery__link}><a href="#">{t('main')}</a></p>
                    <Language />
                </div>
            </div>      
        </header>
    )
}
export default FrontHeader