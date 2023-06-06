import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import chrest from "../../../img/front/chrest.png";
import CartModule from "../../Front/Modules/Cart/CartModule";
import {getCartItemsCount} from "../../functions/cartControll";
import {getLanguageForRootLink} from "../../functions/getLanguage";
import s from "./CartModal.module.css"
import {Link, useLocation} from "react-router-dom";

const CartModal = ({close, }) =>{
    const {t}  = useTranslation();
    const [totalPrice, setTotalPrice] = useState(0);
    const [itemsCount, setItemsCount] = useState(getCartItemsCount())
    const location = useLocation();
    const [start, setStart] = useState(false);

    useEffect(()=>{
        if(start) {
            close()
        }
        setStart(true)
    }, [location])

    return (
        <div className={s.wrap}>
            <div className={s.in}>
                <div className={s.title}>
                    <h3>{t('frontCart-title')}</h3>
                    <img src={chrest} alt={t('frontCart-crossAlt')} onClick={()=>{
                        close()
                    }} />
                </div>
                <CartModule setTotalPrice={(price)=>{
                    setTotalPrice(price);
                }}
                change={()=>{
                    setItemsCount(getCartItemsCount())
                }}
                />
                <div className={s.res}>
                    <div className={s.sum}>
                        {/*<p>{t('frontCart-totalPrice')}: {totalPrice}$</p>*/}
                        <p></p>
                    </div>
                    {
                        itemsCount > 0
                            ? <Link to={getLanguageForRootLink() + "/cart"} onClick={()=>{
                            close()
                        }}><button className={s.btn}>{t('frontCart-button')}</button></Link>
                            : <button className={`${s.btn} ${s.inactive}`}>{t('frontCart-button')}</button>
                    }

                </div>
            </div>
        </div>);
}
export default CartModal