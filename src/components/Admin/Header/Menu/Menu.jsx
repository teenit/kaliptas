import React from "react";
import { useTranslation } from "react-i18next";
import s from "./../Header.module.css"
import { NavLink } from "react-router-dom";

const Menu = () =>{
    const {t} = useTranslation()
    return(
        <div className={s.menu__wrap}>
            <nav>
                <ul>
                    <li>
                        <NavLink to={''}>{t('main')}</NavLink>
                    </li>
                    <li>
                        <NavLink to={'shops'}>{t('shops')}</NavLink>
                    </li>
                    <li>
                        <NavLink to={'moderation'}>{t('moderation')}</NavLink>
                    </li>
                    <li>
                        <NavLink to={'communication'}>{t('communication')}</NavLink>
                    </li>
                    <li>
                        <NavLink to={'advertising'}>{t('advertising')}</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu;