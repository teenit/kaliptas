import React from "react";
import { useTranslation } from "react-i18next";
import s from "./../Header.module.css"
import { NavLink } from "react-router-dom";

const Menu = ({menuItems}) =>{
    const {t} = useTranslation()
    return(
        <div className={s.menu__wrap}>
            <nav>

                <ul>
                    {menuItems.map(item=><li key={item.title}><NavLink to={item.link}>{t(item.title)}</NavLink></li>)}
                </ul>
            </nav>
        </div>
    )
}
export default Menu;