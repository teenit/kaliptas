import React, { useState } from "react";
import s from './style.module.css'
import editImg from './../../../../../img/admin/icons8-edit-50.png';
import { t } from "i18next";
import ProductRegister from "../ProductRegister/ProductRegister";
import { api } from "../../../../functions/api";

const ShopProduct = ({productItem,index,shop}) =>{
    const [product, setProduct] = useState({...productItem.product});
    const [closeModal,setCloseModal] = useState(false)
    const number = index + 1
    const [productDef, setProductDef] = useState({productID:productItem.productID,article:productItem.article,active:productItem.active});
    const lng = localStorage.getItem("LNG").toLowerCase()
    const variablePrice = (mas) =>{
       
        let obj = {
            max: mas.reduce((acc, curr) => acc.price > curr.price ? acc.price : curr.price),
            min: mas.reduce((acc, curr) => acc.price < curr.price ? acc.price: curr.price)
        }
        return obj;
    }
    function saveProduct(objState,newMas,status){
        setProduct({...objState,categories:newMas,status:status})
      //  return console.log(shop)
        api((arg)=>{
            console.log(arg)
            setCloseModal(!closeModal)
        },{categories:newMas,...productDef,...product,...objState,link:'',status:status,shopID:shop.id,shopTitle:shop.shop.title},"manage/shop/edit-product-from-user.php")
    }
    return product?(
        <div className={`${s.wrap} ${s[product.status]}`} >
            <div className={s.inner}>
                <div className={s.number}>
                    <span>{number}</span>
                </div>
                <div className={s.image}>
                    <img className={s.img} src={product.image} alt="" />
                </div>
                <div className={s.title} style={{whiteSpace:"pre-line"}}>{product?.title[lng]}</div>
                <div className={s.article}>{productDef.article}</div>
                <div className={s.amount}>{product?.inStock?.amount}</div>
                <div className={s.price}>
                    {product.type.defaulte ? product.price.price: `${variablePrice(product.prices).min} - ${variablePrice(product.prices).max}`}
                </div>
                <div className={s.status}>{t(product.status)}</div>
                <div className={s.control}><img className={s.control__img} src={editImg} alt="" onClick={()=>{
                   
                   if(product.status !== 'draft') return
                   
                    setCloseModal(true)
                }} /></div>
            </div>
            {closeModal ? <ProductRegister 
                            stateProduct={product} 
                            shop = {shop} 
                            close = {()=>setCloseModal(!closeModal)}
                            btn = {{btn1:{
                                title:{
                                    ge:"გაგზავნა",
                                    en:"Send",
                                    ru:"Отправить"
                                },
                                status:"moderation"
                            },btn2:{
                                title:{
                                    ge:"მონახაზად შენახვა",
                                    en:"Save as draft",
                                    ru:"Сохранить как черновик"
                                },
                                status:"draft"
                            }
                        }}
                            saveProduct = {(objState,newMas,status)=>{saveProduct(objState,newMas,status)}} />  : null}
        </div>
    ):null
}
export default ShopProduct;