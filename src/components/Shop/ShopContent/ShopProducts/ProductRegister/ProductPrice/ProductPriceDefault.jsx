import React from "react";
import { useState } from "react";
import s from './ProductPrice.module.css'
import {useTranslation} from "react-i18next";
const ProductPriceDefault = ({addState,price})=>{
    const [state,setState] = useState(price)
    const {t} = useTranslation();
    return(
        <div className={s.price__wrap}>
            <div>
                <input className={s.price__item} required value={state.price} type="number" placeholder={t("admin-product-price-default")} onChange={e=>{
                    setState({...state,price:e.target.value})
                    addState(state)}}/>
            </div>
            <div>
                <input className={s.price__item} required value={state.discount} type="number" placeholder={t("admin-product-price-var-price-disk")} onChange={e=>{
                    setState({...state,discount:e.target.value})
                    addState(state)}}/>
            </div>
        </div>
    )
}
export default ProductPriceDefault;