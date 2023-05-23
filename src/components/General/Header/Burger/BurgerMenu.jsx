import React from "react";
import s from './BurgerMenu.module.css'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../../Store/Slices/userSlice";
const BurgerMenu = ({ close,burgerItems }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch();
    return burgerItems.length > 0 ? (
        <div className={s.burger__active} onClick={(e) => {
            if (e.target.className === s.burger__active) close()
        }}>
            <div className={s.wrap__list}>
                <div className={s.list}>
                    {burgerItems.map(item=><div key={item.link} className={s.item}>
                        <NavLink className={s.item__link} to={item.link}>{t(item.title)}</NavLink>
                    </div>)}
                    <div className={s.item} onClick={()=>{
                        dispatch(removeUser());
                        window.location.href = '/';
                    }}><span className={s.item__link}>{t('Logout')}</span></div>
                </div>
            </div>
        </div>
    ):null
}

export default BurgerMenu