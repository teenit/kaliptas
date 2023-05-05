import React, { useState } from "react";
import s from './ShopProducts.module.css';
import ProductRegister from "./ProductRegister/ProductRegister";
import { api } from "../../../functions/api";

const ShopProducts = ({shop})=>{
    const [closeModal, setCloseModal] = useState(false);
    const [stateProduct, setStateProduct] = useState({
        shopID:shop.id,
        price:{
            price:'',
            discount:''
        },
        title:{
            en: "",
            ge: "",
            ru: ""
        },
        description:{
            en: "",
            ge: "",
            ru: ""
        },
        categories: [],
        characteritics:{
            en: "",
            ge: "",
            ru: ""
        },
        type:{
            variable: false,
            defaulte: true
        },
        prices:[{
            variable:'',
            price:'',
            discountPrice:''
        }],
        link:'',
        image:'',
        images:[]
    })
    function saveProduct(objState,newMas,status){
        setStateProduct({...objState,categories:newMas,status:status})
        api((arg)=>{
            alert(arg)
            setCloseModal(!closeModal)
        },{...objState,categories:newMas,status:status},"manage/shop/add-product.php")
    }
    return(
        <div className={s.wrap}>
            <div className={s.add__wrap}>
                <div className={s.add__in}>
                    <div className={s.title}>
                        <h2>Добавить товар</h2>
                    </div>
                    <div className={s.add__shop} onClick={()=>setCloseModal(!closeModal)}>
                        <span className={`${s.span} ${s.span1}`}></span>
                        <span className={`${s.span} ${s.span2}`}></span>
                    </div>
                </div>
            </div>
            {closeModal ? <ProductRegister 
                            stateProduct={stateProduct} 
                            shop = {shop} 
                            close = {()=>setCloseModal(!closeModal)}
                            saveProduct = {(objState,newMas,status)=>{saveProduct(objState,newMas,status)}} />  : null}
        </div>
    )
}

export default ShopProducts