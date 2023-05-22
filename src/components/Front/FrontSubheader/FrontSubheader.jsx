import React, { useState } from "react";
import s from './Subheader.module.css'
import catalogImg from "./../../../img/front/catalog.png"
import {Link, NavLink} from "react-router-dom";
import profileImg from "./../../../img/front/profile.png";
import likedImg from "./../../../img/front/heart.png";
import cartImg from "./../../../img/front/corz.png"
import CartModule from "../Modules/Cart/CartModule";
import {getLanguageForRootLink} from "../../functions/getLanguage";
import { useTranslation } from "react-i18next";
import Dropdown from "../Modules/Dropdown/Dropdown";
import CartModal from "../../Modals/CartModal/CartModal";

const FrontSubheader = ()=>{
    const {t}  = useTranslation();
    const [showCart, setShowCart] = useState(false)
    const catalogLink = getLanguageForRootLink() + "/catalog";
    const profileLink = getLanguageForRootLink() + "/profile";
    const [open, setOpen] = useState(false);
    const [closeTimeout, setCloseTimeout] = useState(0);

    const showDropdown = function () {

        return  <div className={s.dropdown__wrap}>
                    <div className={s.dropdown__wrap__content}>
                        <div
                className={s.dropdown}
                onMouseEnter={()=>{
                    clearTimeout(closeTimeout);
                }}
                onMouseLeave={()=>{setOpen(false)}}
                onClick={()=>setOpen(false)}
            >
                <Dropdown/>
                        </div>
                    </div>
                </div>
    }

    return(
        <div className={s.wrap}>
            <div className={s.inner}>
                <Link
                    className={s.catalog__title}
                    to={catalogLink}
                    onMouseEnter={()=>{
                        setOpen(true);
                    }}
                    onMouseLeave={()=>{
                        setCloseTimeout(setTimeout(()=>{
                            setOpen(false);
                        }, 1000))
                    }}
                    onClick={()=>{
                        setOpen(false)
                    }}
                >
                    <div className={s.button}>
                        <img src={catalogImg} alt="Каталог" />
                        <span>{t('frontSubheader-catalog')}</span>

                    </div>
                </Link>
                <div className={s.input__wrap}>
                    <input type="text" placeholder={t('frontSubheader-search')} className={s.input}/> 
                </div>
                <div className={s.options}>
                    <div className={s.icon}>
                        <NavLink to={profileLink}><img className={s.icon__image} src={profileImg} alt="profile" /></NavLink>
                    </div>
                    <div className={s.icon}>
                        <img className={s.icon__image} src={likedImg} alt="Лайкнутые" />
                    </div>
                    <div className={s.icon}>
                        <img className={s.icon__image} src={cartImg} alt="Корзина" onClick={()=>{
                            setShowCart(true)
                        }}/>
                    </div>
                </div>
                {open
                    ?
                    showDropdown()
                    : null
                }
            </div>
            {
                showCart ? 
                    <CartModal close={()=>{setShowCart(false)}}/>
                : null
            }
        </div>
    )
}
export default FrontSubheader;