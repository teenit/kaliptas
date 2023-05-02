import React from "react";
import s from './ItemInfo.module.css'
const FrontProductInfo = () => {
    return (
        <div className={s.info}>
            <div className={s.avaible}><span>в наличии</span></div>
            <div className={s.buy__panel}>
                <p><span style={{ fontSize: 30 + 'px' }}>599 </span>грн</p>
                <div className={s.bp__right}>
                    <button className={s.bpr__button}>Купить</button>
                    <div className={s.bpr__icons}>
                        <div className={s.bpr__icon}></div>
                        <div className={s.bpr__icon}></div>
                    </div>
                </div>
            </div>
            <div>
                <p>Продавец: <a href="#"><span style={{ color: '#e7c3f5' }}>Miniso</span></a></p>
                <p><a className={s.rating} href="#">197 оценок</a></p>
            </div>
            <div className={s.options}>
                <button className={s.options__button}>Страница продавца</button>
                <button className={s.options__button}>Пожаловаться</button>
            </div>
                <p><b>Доставка : </b><span style={{ color: '#e7c3f5', cursor: 'pointer' }} >Тбилиси</span></p>

                <div className={s.delivery__info}>
                    <p>С отделения почты</p>
                    <p>5$</p>
                </div>
                <div className={s.delivery__info}>
                    <p>Доставка за адресом</p>
                    <p>5$</p>
                </div>
                <p><b>Гарантия</b></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad perspiciatis iste</p>
            </div>
    )
}
export default FrontProductInfo