import React from "react";
import { NavLink } from "react-router-dom";
import s from './store.module.css';


const StoreNavigation = ()=>{
    const BlockLink = ({link,title}) => <li className={s.li}><NavLink to={link} className={({ isActive, isPending }) =>
                                      isActive ? s.active : ""
                            }>{title}</NavLink></li>
    return(
        <div className={s.nav__wrap}>
            <nav className={s.nav}>
                    <BlockLink link = './' title = "Головна" />
                    <BlockLink link = 'products' title = "Товары" />
                    <BlockLink link = 'categories' title = "Категории" />
                    <BlockLink link = 'statistics' title = "Статистика" />
                    <BlockLink link = 'support' title = "Поддержка" />
            </nav>
        </div>
    )
}
export default StoreNavigation