import React, { useState } from "react";
import s from './ShopProducts.module.css';
import ProductRegister from "./ProductRegister/ProductRegister";

const ShopProducts = ({shop})=>{
    const [state, setState] = useState(false);
    return(
        <div className={s.wrap}>
            <div className={s.add__wrap}>
                <div className={s.add__in}>
                    <div className={s.title}>
                        <h2>Добавить товар</h2>
                    </div>
                    <div className={s.add__shop} onClick={()=>setState(!state)}>
                        <span className={`${s.span} ${s.span1}`}></span>
                        <span className={`${s.span} ${s.span2}`}></span>
                    </div>
                </div>
            </div>
            {state ? <ProductRegister shop = {shop} close = {()=>setState(!state)}/>  : null}
        </div>
    )
}

export default ShopProducts