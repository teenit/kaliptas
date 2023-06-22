import React from "react";
import { NavLink } from "react-router-dom";
import s from './store.module.css';
import {useTranslation} from "react-i18next";


const StoreNavigation = ()=>{

    const {t} = useTranslation();
    const BlockLink = ({link,title}) => <li className={s.li}><NavLink to={link} className={({ isActive, isPending }) =>
                                      isActive ? s.active : ""
                            }>{title}</NavLink></li>
    return(
        <div className={s.nav__wrap}>
            <nav className={s.nav}>
                    <BlockLink link = './' title ={t("main")} />
                    <BlockLink link = 'products' title ={t("items")} />
                    <BlockLink link = 'categories' title ={t("categories")} />
                    <BlockLink link = 'statistics' title ={t("stats")} />
                    <BlockLink link = 'support' title ={t("support")} />
            </nav>
        </div>
    )
}
export default StoreNavigation