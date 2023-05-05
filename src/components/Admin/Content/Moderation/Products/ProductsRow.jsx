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
      //  return console.log()
        api((arg)=>{
            alert(arg)
            close(false)
        },{...obj,
            categories:masCategories,
            status:status,
            productID:moderation.value.productID,
            shopID:moderation.value.shopID,
            link:moderation.value.link
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
                shop = {{id:moderation.value.shopID}} 
                saveProduct={(obj, masCategories, status)=>{saveProduct(obj, masCategories, status)}} 
                close = {()=>{close(false)}}/> : null
            }
        </tr>
    )
}
export default ProductsRow