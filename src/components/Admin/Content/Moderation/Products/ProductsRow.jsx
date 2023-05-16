import React, { useEffect } from "react";
import s from "./Products.module.css";
import FormButton from "../FormButtons/FormButton";
import ProductRegister from "../../../../Shop/ShopContent/ShopProducts/ProductRegister/ProductRegister";
import { useState } from "react";
import { api, apiResponse } from "../../../../functions/api";
import { t } from "i18next";
import editImg from './../../../../../img/admin/icons8-edit-50.png'

const ProductsRow = ({moderation,index}) =>{
    const [stateProduct, setStateProduct] = useState(null)
    const [lookProduct, setLookProduct] = useState({look:false})
    const [lng,setLng] = useState(localStorage.getItem("LNG").toLowerCase())
    function close(arg){
        setLookProduct({...lookProduct,look:arg})
    }
    function getProduct(){
        apiResponse({productID:moderation.value.productID},"manage/admin/get-product-by-id.php").then((data)=>{
            setStateProduct({...data})
            setLookProduct({...lookProduct,look:true})
        })
    }
    function saveProduct(obj, masCategories, status){
       // return console.log(moderation)
        api((arg)=>{
            console.log(arg)
            close(false)
        },{...obj,
            categories:masCategories,
            status:status,
            modID:moderation.id,
            productID:moderation.value.productID,
            shopID:moderation.value.shopID,
            link:Math.floor(Math.random()*1000)
            },"manage/shop/update-product-and-activate.php")
    }

    return(
    
        <tr className={s.products__tr}> 
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td}>{index + 1}</span></td>
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td} ><img style={{width:"40px"}} src={moderation.value.image}/></span></td>
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td}>{moderation.value.title[lng]}</span></td>
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td}>{t(moderation.value.whatModeration)}</span></td>
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td}>{moderation.value.shopTitle[lng]}</span></td>
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td}><img className={s.edit__img} onClick={()=>getProduct()} src={editImg} alt="" /></span></td>
            
            {
                lookProduct.look ? <ProductRegister 
                stateProduct={stateProduct.product} 
                btn = {{btn1:{
                    title:{
                        ge:"გამოაქვეყნეთ",
                        en:"Publish",
                        ru:"Опубликовать"
                    },
                    status:"published"
                },btn2:{
                    title:{
                        ge:"Უარი თქვას",
                        en:"Reject",
                        ru:"Отклонить"
                    },
                    status:"rejected"
                }
            }}
                shop = {{id:moderation.value.shopID}} 
                saveProduct={(obj, masCategories, status)=>{saveProduct(obj, masCategories, status)}} 
                close = {()=>{close(false)}}/> : null
            }
        </tr>
    )
}
export default ProductsRow