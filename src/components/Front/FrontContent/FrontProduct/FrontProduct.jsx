import React from "react";
import s from './Item.module.css'
import { useState } from "react";
import FrontProductPictures from "./FrontProductPictures/FrontProductPictures";
import FrontProductInfo from "./FrontProductInfo/FrontProductInfo";

const FrontProduct = ()=>{
    const [state,setState] = useState(false)
    return(
        <div className={s.wrap}>
        <h2>Subtitle</h2>
        <div className={s.subinfo}>
            <p className={s.rating} onClick={()=>{
                setState(true)
            }}>6 отзывов</p>
            <div className={s.subinfo__line}></div>
            <p>Код: 0000000</p>
        </div>
        <div className={s.item}>
           <FrontProductPictures />
           <FrontProductInfo />
        </div>
    </div>
    )
   
}
export default FrontProduct;