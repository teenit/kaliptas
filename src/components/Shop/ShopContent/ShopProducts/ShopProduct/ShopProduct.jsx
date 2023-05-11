import React, { useState } from "react";
import s from './style.module.css'

const ShopProduct = ({productItem,index}) =>{
    const [product, setProduct] = useState({...productItem.product});
    const number = index + 1
    const [productDef, setProductDef] = useState({productID:productItem.productID,article:productItem.article});
    const lng = localStorage.getItem("LNG").toLowerCase()
    console.log(product?.description[lng])
    return product?(
        <div className={s.wrap}>
            <div className={s.inner}>
                <div className={s.number}>
                    <span>{number}</span>
                </div>
                <div className={s.image}>
                    <img className={s.img} src={product.image} alt="" />
                </div>
                <div className={s.title} style={{whiteSpace:"pre-line"}}>{product?.title[lng]}</div>
                <div className={s.article}></div>
                <div className={s.amount}></div>
                <div className={s.price}></div>
                <div className={s.status}></div>
            </div>
        </div>
    ):null
}
export default ShopProduct;