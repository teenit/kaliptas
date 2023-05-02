import React from "react";
import { useState } from "react";
import s from './ProductPrice.module.css'
const ProductPriceDefault = ({addState,price})=>{
    const [state,setState] = useState(price)
    return(
        <div className={s.price__wrap}>
            <div>
                <input className={s.price__item} required value={state.price} type="number" placeholder="Цена основная" onChange={e=>{
                    setState({...state,price:e.target.value})
                    addState(state)}}/>
            </div>
            <div>
                <input className={s.price__item} required value={state.discount} type="number" placeholder="Цена со скидкой" onChange={e=>{
                    setState({...state,discount:e.target.value})
                    addState(state)}}/>
            </div>
        </div>
    )
}
export default ProductPriceDefault;