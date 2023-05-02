import React from "react";
import s from './Offers.module.css'
const FrontOffers = () => {
    return (
        <div>
            <div className={s.offer}>
                <p><b>Похожие товары</b></p>
                <div className={s.offer__cards}>
                    <div className={s.offer__card}></div>
                    <div className={s.offer__card}></div>
                    <div className={s.offer__card}></div>
                    <div className={s.offer__card}></div>
                    <div className={s.offer__card}></div>
                    <div className={s.offer__card}></div>
                </div>
            </div>
            <div className={s.offer}>
                <p><b>Вы смотрели</b></p>
                <div className={s.offer__cards}>
                    <div className={s.offer__card}></div>
                    <div className={s.offer__card}></div>
                    <div className={s.offer__card}></div>
                    <div className={s.offer__card}></div>
                    <div className={s.offer__card}></div>
                    <div className={s.offer__card}></div>
                </div>
            </div>
        </div>

    )
}
export default FrontOffers