import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import chrest from "../../../img/front/chrest.png";
import CartModule from "../../Front/Modules/Cart/CartModule";
import {getCartItemsCount} from "../../functions/cartControll";
import {getLanguageForRootLink} from "../../functions/getLanguage";
import s from "./CartModal.module.css"
import {Link, useLocation} from "react-router-dom";
import {getCurrencyTag} from "../../functions/utils";

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
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAv0lEQVR4nO2VXQrCMBAGxwtalZY86NkVLP6hN6hQCaQgJdXdsFHEDOQt+02TbBooFP6JBrgBB2ChqFsCJ+AK1FrpLBT2YXSAE9S5MHeo8xlqLk8BEvlY6sc5RbyKBE3JY9IuZCRRRwLvwGbUC7E561SpRJ5N+m4rpUdhvvJsK5XKs0qZONNYw31E2ueUu280V/Piykjuubl0wFxeGfwyfYaa1uCR2KeIjwbPos9QU4Uv3iq3zM/dhdp5irhQ+E0ekyummbane5EAAAAASUVORK5CYII="
                         onClick={()=>{
                             close()
                         }} />
                </div>
                <div className={s.cart__mod}>
                    <CartModule setTotalPrice={(price)=>{
                        setTotalPrice(price);
                    }}
                                change={()=>{
                                    setItemsCount(getCartItemsCount())
                                }}
                    />
                </div>

                <div className={s.res}>
                    <div className={s.sum}>
                        <p>{t('frontCart-totalPrice')}: {totalPrice}{getCurrencyTag()}</p>
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