import React from "react";
import s from './BurgerMenu.module.css'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const BurgerMenu = ({ close }) => {
    const { t } = useTranslation()
    return (
        <div className={s.burger__active} onClick={(e) => {
            if (e.target.className === s.burger__active) close()
        }}>
            <div className={s.wrap__list}>
                <div className={s.list}>
                    <div className={s.item}>
                        <NavLink to={'users'}>{t('users')}</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to={'categories'}>{t('categories')}</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu