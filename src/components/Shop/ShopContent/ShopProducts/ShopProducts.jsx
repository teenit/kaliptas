import React, { useEffect, useState } from "react";
import s from './ShopProducts.module.css';
import ss from './ShopProduct/style.module.css';
import ProductRegister from "./ProductRegister/ProductRegister";
import { api, apiResponse } from "../../../functions/api";
import ShopProduct from "./ShopProduct/ShopProduct";

const ShopProducts = ({shop})=>{
    const [closeModal, setCloseModal] = useState(false);
    const [products,setProducts] = useState([])
    console.log(shop)
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


    useEffect(()=>{
        apiResponse({shopID:shop.id},"manage/shop/get-products-id.php").then((data)=>setProducts(data))
    },[])
   
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
            <div className={s.wrap__products}>

            
            <div className={ss.wrap}>
            <div className={ss.inner}>
                <div className={ss.number}>
                    <span>№</span>
                </div>
                <div className={ss.image}>
                    Фото
                </div>
                <div className={ss.title}>Название</div>
                <div className={ss.article}>Артикул</div>
                <div className={ss.amount}>Количество</div>
                <div className={ss.price}>Цена</div>
                <div className={ss.status}>Статус</div>
            </div>
        </div>
            {
                products.map((item,index)=><ShopProduct 
                setStateProduct = {(arg)=>setStateProduct({...arg})}
                index={index} 
                shop = {shop}
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