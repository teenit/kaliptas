import React, { useState } from "react";
import s from './Header.module.css';
import logo from './../../../img/logo.png';
import arrowImg from './../../../img/collapse-arrow-50.png'
import Phone from "./Phones/Phone";
import {Link} from "react-router-dom";
import Language from "./Language/Language";
import { useTranslation } from "react-i18next";
import Burger from "./Burger/Burger";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import {getLanguageForRootLink} from "../../functions/getLanguage";

const FrontHeader  =()=>{
    const {t} = useTranslation()
    const[phone,setPhone] =  useState(false)
    const [activeMenu,setActiveMenu] = useState(false)

    return(
        <header className={s.wrap}>
            <div className={s.inner}>
                <div className={s.inner__left}>
                    <div className={s.logo}>
                        <Link to={getLanguageForRootLink()}><img className={s.logo__image} src={logo} alt="Логотип"/></Link>
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
                    <Language />
                </div>
                <div className={s.burger__menu}>
                    <Burger active = {activeMenu} setActive = {()=>{setActiveMenu(!activeMenu)}} />
                </div>
            </div>  
            {activeMenu ? <BurgerMenu active = {activeMenu} setActive = {()=>{setActiveMenu(!activeMenu)}}/> : null}
        </header>
    )
}
export default FrontHeader