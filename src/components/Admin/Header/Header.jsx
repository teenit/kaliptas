import React, { useState } from "react";
import Burger from "./Burger/Burger";
import s from "./Header.module.css"
import Languages from "./Languages/Languages";
import Menu from "./Menu/Menu";
import logo from "./../../../img/logo.png"
import { NavLink } from "react-router-dom";
import BurgerMenu from "./Burger/BurgerMenu";
import ArrowImg from "../../../img/admin/Фигура 504 копия 2.png"
import PhoneNumber from "./PhoneNumbers/PhoneNumber";

const Header = () =>{
      const [state, setState] = useState(false)
      const [burgMenu, setBurgMenu] = useState(false)
    const language = localStorage.getItem("LNG").toLowerCase()
    return(
        <div className={s.header}>
            <div className={s.big__header}>
                <div className={s.small__header}>
                    <div className={s.small__header__in}>
                        <div className={s.logo__phone}>
                            <div className={s.logo}>
                               <NavLink to={'/' + language}><img className={s.logo__img} src={logo} alt="Логотип" /></NavLink>
                            </div>
                            <div className={s.phone}>
                                <a href="tel:+380 67 456 2343">+995 97 456 2343</a>
                                <img className={`${s.static__arrow} ${state ? s.td__arrow__change : null}`} src={ArrowImg} alt="Стрелка" onClick={()=>{
                                    setState(!state)
                                }}/>
                                {state ? <PhoneNumber close = {()=>setState(!state)}/> : null}
                            </div>
                        </div>
                        <div className={s.lang__burg}>
                            <div className={s.language}>
                                <Languages/>
                            </div>
                            <div className={s.burger}>
                                <Burger close = {()=>setBurgMenu(!burgMenu)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.header__menu}>
                    <Menu />
                </div>
            </div>
            {burgMenu?<BurgerMenu close={()=>setBurgMenu(false)}/>:null}
        </div>
    )
}





export default Header