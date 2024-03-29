import React, { useState } from "react";
import s from "./BurgerMenu.module.css"
import profileImage from "../../../../img/front/profile2.png"
import corzImage from "../../../../img/front/corz2.png"
import Phone from "../Phones/Phone"
import listImage from "../../../../img/front/heart2.png"
import arrowImage from "../../../../img/collapse-arrow-50.png"
import phoneImage from "../../../../img/front/phone.png"
import catalogImg from "../../../../img/front/catalog.png"
import closeImage from "../../../../img/front/chrest.png"
import { Link } from "react-router-dom";
import Language from "../Language/Language";
import {getLanguageForLink, getLanguageForRootLink} from "../../../functions/getLanguage";
import CartModule from "../../Modules/Cart/CartModule";
import MobileDropdown from "../../Modules/MobileDropdown/MobileDropdown";
import CartModal from "../../../Modals/CartModal/CartModal";
import logo from "../../../../img/logo.png"
import { useTranslation } from "react-i18next";
//import Cart from "../../Modules/Cart/Cart";

const BurgerMenu = ({active, setActive}) =>{
    const [showCart, setShowCart] = useState(false)
    const [showPhone, setShowPhone] = useState(false)
    const [changeArrow, setChangeArrow] = useState(false)
    const catalogLink = getLanguageForRootLink() + "/catalog";
    const profile = getLanguageForRootLink() + "/profile";
    const [open, setOpen] = useState(false)
    const {t} = useTranslation()
    return(
        <div className={s.wrap}>
            <div className={s.in}>
                <div className={s.close__option}>
                    <img src={logo} className={s.logo} alt="Логотип" />
                    <img src={closeImage} className={s.cloce} alt="Закрыть" onClick={setActive}/>
                </div>
                <div className={s.option__in}>
                    <Link className={s.link} to={catalogLink} onClick={setActive}>
                        <div className={s.option__in__catalog}>
                            <img src={catalogImg} alt="Каталог" />
                        </div>
                    </Link>
                    <p onClick={()=>{setOpen(!open)}}>{t('frontSubheader-catalog')}</p>
                </div>
                {
                    open ? <MobileDropdown close={setActive}/> : null
                }
                <div className={s.line}></div>
                <div className={s.option}>
                    <div className={s.option__in}>
                        <img src={profileImage} alt="Профиль" />
                        <Link className={s.link} to={profile} onClick={setActive}><p>{t('burger-profile')}</p></Link>
                    </div>
                    <div className={s.option__in}>
                        <img src={corzImage} alt="Корзина" />
                        <div className={s.link} onClick={()=>{
                            setShowCart(true)
                        }}><p>{t('frontCart-title')}</p></div>
                    </div>
                    <div className={`${s.option__in} ${s.option__hidden}`}>
                        <img src={listImage} alt="Список желаний" />
                        <Link className={s.link} to={"/"} onClick={setActive}><p>{t('burger-list')}</p></Link>
                    </div>
                </div>
                <div className={s.line}></div>
                <div className={s.option__in__phone}>
                    <img src={phoneImage} alt="Контакты" />
                    <div className={s.phone__wrap}>
                        <a href="tel:+9950666665">+ 995 066 66 65</a>
                        <img className={`${s.arrow} ${changeArrow ? s.arrow__change : null}`} src={arrowImage} alt="Стрелка" onClick={()=>{
                            setShowPhone(!showPhone)
                            setChangeArrow(!changeArrow)
                        }}/>
                        {showPhone ? <Phone close={()=>{{setShowPhone(!showPhone)}}} /> : null}
                    </div>
                </div>
                <div className={s.line}></div>
                <div className={s.option}>
                    <div className={s.language}>
                        <Language />
                    </div>
                </div>
            </div>
            {
                showCart ?
                   <CartModal close={()=>{{setShowCart(false)}}}/>
                : null
            }
        </div>
    )
}
export default BurgerMenu