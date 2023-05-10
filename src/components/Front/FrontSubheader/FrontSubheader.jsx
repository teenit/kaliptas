import React from "react";
import s from './Subheader.module.css'
import catalogImg from "./../../../img/front/catalog.png"
import {Link, NavLink} from "react-router-dom";
import profileImg from "./../../../img/front/profile.png";
import fewImg from "./../../../img/front/few.png";
import likedImg from "./../../../img/front/heart.png";
import corzImg from "./../../../img/front/corz.png"

const FrontSubheader = ()=>{
    return(
        <div className={s.wrap}>
            <div className={s.inner}>
                <div className={s.button}>
                    <img src={catalogImg} alt="Каталог" />
                    <Link className={s.catalog__title} to="/catalog">Каталог</Link>
                </div>    
                <div className={s.input__wrap}>
                    <input type="text" placeholder="Поиск" className={s.input}/>
                    
                </div>
                <div className={s.options}>
                    <div className={s.icon}>
                        <img className={s.icon__image} src={profileImg} alt="Профиль" />
                    </div>
                    <div className={s.icon}>
                        <img className={s.icon__image} src={likedImg} alt="Лайкнутые" />
                    </div>
                    <div className={s.icon}>
                        <NavLink to={'cart'}>
                            <img className={s.icon__image} src={corzImg} alt="Корзина" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FrontSubheader;