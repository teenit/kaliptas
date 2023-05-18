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
import { getLanguageForLink } from "../../../functions/getLanguage";
//import Cart from "../../Modules/Cart/Cart";

const BurgerMenu = ({t, active, setActive}) =>{
    //const [showCart, setShowCart] = useState(false)
    const [showPhone, setShowPhone] = useState(false)
    const [changeArrow, setChangeArrow] = useState(false)

    const language = getLanguageForLink()
    const catalogLink = (language.length>0?"/" + language:"") + "/catalog";
    return(
        <div className={s.wrap}>
            <div className={s.in}>
                <div className={s.close__option}>
                    <img src={closeImage} alt="Закрыть" onClick={setActive}/>
                </div>
                <div className={s.option__in}>
                    <div className={s.option__in__catalog}>
                        <img src={catalogImg} alt="Каталог" />
                    </div> 
                    <Link className={s.link} to={catalogLink} onClick={setActive}><p>Каталог</p></Link> 
                </div>
                <div className={s.line}></div>
                <div className={s.option}>
                    <div className={s.option__in}>
                        <img src={profileImage} alt="Мой кабинет" />
                        <Link className={s.link} to={"/"} onClick={setActive}><p>Войти</p></Link>
                    </div>
                    <div className={s.option__in}>
                        <img src={corzImage} alt="Корзина" />
                        <div className={s.link} onClick={()=>{
                            //setShowCart(true)    
                            setActive()
                        }}><p>Корзина</p></div>
                    </div>
                    <div className={s.option__in}>
                        <img src={listImage} alt="Список желаний" />
                        <Link className={s.link} to={"/"} onClick={setActive}><p>Список желаний</p></Link>
                    </div>
                </div>
                <div className={s.line}></div>
                <div className={s.option__in}>
                    <img src={phoneImage} alt="Контакты" />
                    <div className={`${s.phone__wrap} ${showPhone ? s.phone__wrap__change : null}`}>
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
                    <Link className={s.link} to={"/"} onClick={setActive}><p>Оплата и доставка</p></Link>
                    <div className={s.language}>
                        <Language />
                    </div>
                </div>
            </div>
            {
                //showCart ? 
                //    <Cart close={()=>{{setShowCart(false)}}}/>
                //: null
            }
        </div>
    )
}
export default BurgerMenu