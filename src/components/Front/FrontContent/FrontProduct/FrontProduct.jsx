import React from "react";
import s from './Item.module.css'
import { useState } from "react";
import FrontProductPictures from "./FrontProductPictures/FrontProductPictures";
import FrontProductInfo from "./FrontProductInfo/FrontProductInfo";
import { useParams } from "react-router-dom";

const FrontProduct = ()=>{
    const [state,setState] = useState(false)

    // localhost:3000/params/someId

    const getProductById = ()=>{
        return {
            title: "Kot",
            price: 1000,
            article: 1010011,
            
        }
    };

    const params = useParams();
    const productId = params.id;

    const productObject = getProductById(productId);

    return(
        <div className={s.wrap}>
        <h2>Subtitle</h2>
        <div className={s.subinfo}>
            <p className={s.rating} onClick={()=>{
                setState(true)
            }}>6 отзывов</p>
            <div className={s.subinfo__line}></div>
            <p>Код: {productObject.article}</p>
        </div>
        <div className={s.item}>
           <FrontProductPictures />
           <FrontProductInfo />
        </div>
    </div>
    )
   
}
export default FrontProduct;