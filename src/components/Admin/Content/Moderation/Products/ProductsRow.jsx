import React from "react";
import s from "./Products.module.css";
import FormButton from "../FormButtons/FormButton";
import ProductRegister from "../../../../Shop/ShopContent/ShopProducts/ProductRegister/ProductRegister";
import { useState } from "react";
import { api } from "../../../../functions/api";

const ProductsRow = ({moderation,index}) =>{
    const [stateProduct, setStateProduct] = useState({...moderation.value.product})
    const [lookProduct, setLookProduct] = useState({look:false})
    const [lng,setLng] = useState(localStorage.getItem("LNG").toLowerCase())
    function close(arg){
        setLookProduct({...lookProduct,look:arg})
    }
    function saveProduct(obj, masCategories, status){
       /* if(obj.title.en == "" || obj.title.ge == "" || obj.title.ru == "")
        if(obj.description.en == "" || obj.description.ge == "" || obj.description.ru == "")
        if(obj.characteritics.en == "" || obj.characteritics.ge == "" || obj.characteritics.ru == "")
        if(obj.image == "")
        if(obj.images.length < 1)
        if(obj.type.defaulte){

        }else{

        }*/
      // return console.log(obj)
        
        api((arg)=>{
            console.log(arg)
            close(false)
        },{...obj,
            categories:masCategories,
            status:status,
            productID:moderation.value.productID,
            shopID:moderation.value.shopID,
            link:Math.floor(Math.random()*1000)
            },"manage/shop/update-product.php")
    }
    return(
        <tr className={s.products__tr}> 
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td}>{index + 1}</span></td>
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td} onClick={()=>setLookProduct({...lookProduct,look:true})}>00</span></td>
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td}>{moderation.value.product.title[lng]}</span></td>
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td}>Направление</span></td>
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td}>Магазин</span></td>
            <FormButton />
            {
                lookProduct.look ? <ProductRegister 
                stateProduct={stateProduct} 
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