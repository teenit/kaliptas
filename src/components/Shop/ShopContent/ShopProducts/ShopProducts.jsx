import React, { useEffect, useState } from "react";
import s from './ShopProducts.module.css';
import ss from './ShopProduct/style.module.css';
import ProductRegister from "./ProductRegister/ProductRegister";
import { api, apiResponse } from "../../../functions/api";
import ShopProduct from "./ShopProduct/ShopProduct";
import {useTranslation} from "react-i18next";

const ShopProducts = ({shop})=>{
    const [closeModal, setCloseModal] = useState(false);
    const [products,setProducts] = useState([]);
    const {t} = useTranslation()
    const [stateProduct, setStateProduct] = useState({
        shopID:shop.id,
        shopTitle:shop.shop.title,
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
        inStock:{
            amount:0,
        },
        categories: [],
        characteristic:[{
            title:{
                en: "",
                ge: "",
                ru: ""
            },
            value:{
                en: "",
                ge: "",
                ru: ""
            }
        }],
        type:{
            variable: false,
            defaulte: true
        },
        prices:[{
            variable:{
                ge:"",
                en:"",
                ru:""

            },
            price:'',
            discountPrice:'',
            id:0
        }],
        link:'',
        image:'',
        images:[]
    })
    function saveProduct(objState,newMas,status){
        setStateProduct({...objState,categories:newMas,status:status})
        api((arg)=>{
            console.log(arg)
            setCloseModal(!closeModal)
        },{...objState,categories:newMas,status:status},"manage/shop/add-product.php")
    }
    const [userType,setUserType] = useState(null);

    useEffect(()=>{
        apiResponse({shopID:shop.id},"manage/shop/get-products-id.php").then((data)=>setProducts(data))
        apiResponse({},"user/get-user-type.php").then((data)=>setUserType(data))

    },[])
   
    return(
        <div className={s.wrap}>
            <div className={s.add__wrap}>
                <div className={s.add__in}>
                    <div className={s.title}>
                        <h2>{t('Add product')}</h2>
                    </div>
                    <div className={s.add__shop} onClick={()=>setCloseModal(!closeModal)}>
                        <span className={`${s.span} ${s.span1}`}></span>
                        <span className={`${s.span} ${s.span2}`}></span>
                    </div>
                </div>
            
            </div>
            <div className={s.wrap__products}>

            
            <div className={ss.wrap}>
            <div className={ss.inner}>
                <div className={ss.number}>
                    <span>№</span>
                </div>
                <div className={ss.image}>
                    {t("photo")}
                </div>
                <div className={ss.title}>{t("name")}</div>
                <div className={ss.article}>{t("articul")}</div>
                <div className={ss.amount}>{t("count")}</div>
                <div className={ss.price}>{t("price")}</div>
                <div className={ss.status}>{t("status")}</div>
            </div>
        </div>
            {
                products.map((item,index)=><ShopProduct 
                setStateProduct = {(arg)=>setStateProduct({...arg})}
                index={index} 
                shop = {shop}
                userType = {userType}
                productItem={item} 
                key={item.productID}/>)
            }
        </div>
            {closeModal ? <ProductRegister 
                            stateProduct={stateProduct} 
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
    )
}

export default ShopProducts