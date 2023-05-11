import React, { useEffect, useState } from "react";
import s from "./Cart.module.css"
import CartRow from "./CartRow/CartRow";
import chrest from "./../../../../img/front/chrest.png"
import { ProductObject } from "../../FrontContent/FrontProduct/ProductObject";
import {api, apiResponse} from "../../../functions/api"

const Cart = ({close}) =>{
    const tempProd = {
        "productID": "19",
        "product": {
            "price": {
                "price": "",
                "discount": ""
            },
            "prices": [
                {
                    "variable": {
                        "ge": "wefwe",
                        "en": "",
                        "ru": ""
                    },
                    "price": "23",
                    "discountPrice": "223"
                },
                {
                    "variable": {
                        "ge": "rl;gwe",
                        "en": "",
                        "ru": ""
                    },
                    "price": "1",
                    "discountPrice": "2"
                }
            ],
            "title": {
                "en": "",
                "ge": "wekfo",
                "ru": ""
            },
            "description": {
                "en": "",
                "ge": "ekgmer er glerg er<br />ergerg erg erg<br />erg er glker gkle r",
                "ru": ""
            },
            "characteristic": [
                {
                    "title": {
                        "en": "",
                        "ge": "wepo",
                        "ru": ""
                    },
                    "value": {
                        "en": "",
                        "ge": "wejiw",
                        "ru": ""
                    }
                },
                {
                    "title": {
                        "en": "",
                        "ge": "wekl",
                        "ru": ""
                    },
                    "value": {
                        "en": "",
                        "ge": "koewfj",
                        "ru": ""
                    }
                }
            ],
            "categories": [
                {
                    "id": "23",
                    "parent_id": "21",
                    "category": {
                        "title": {
                            "en": "Sleeping bag",
                            "ru": "Спальник",
                            "ge": "საძილე ტომარა"
                        },
                        "description": {
                            "en": "",
                            "ru": "",
                            "ge": ""
                        },
                        "image": "https://kaliptas.people-ua.org/manage/categories/uploads/1683424785w512h5121390848562sleepingbag512.png"
                    },
                    "good": false,
                    "checked": true
                }
            ],
            "inStock": {
                "amount": "7"
            },
            "type": {
                "variable": true,
                "defaulte": false
            },
            "image": "https://kaliptas.people-ua.org/manage/shop/uploads/products/9/168372242347838.1400.jpg",
            "images": [
                "https://kaliptas.people-ua.org/manage/shop/uploads/products/9/168372243027032.png",
                "https://kaliptas.people-ua.org/manage/shop/uploads/products/9/168372243038051.png",
                "https://kaliptas.people-ua.org/manage/shop/uploads/products/9/168372243047838.1400.jpg",
                "https://kaliptas.people-ua.org/manage/shop/uploads/products/9/16837224312798003.png",
                "https://kaliptas.people-ua.org/manage/shop/uploads/products/9/1683722431195946076.webp"
            ],
            "status": "moderation"
        },
        "link": "",
        "status": "moderation",
        "type": {
            "variable": true,
            "defaulte": false
        },
        "article": "1019",
        "categories": [
            {
                "id": "23",
                "parent_id": "21",
                "category": {
                    "title": {
                        "en": "Sleeping bag",
                        "ru": "Спальник",
                        "ge": "საძილე ტომარა"
                    },
                    "description": {
                        "en": "",
                        "ru": "",
                        "ge": ""
                    },
                    "image": "https://kaliptas.people-ua.org/manage/categories/uploads/1683424785w512h5121390848562sleepingbag512.png"
                },
                "good": false,
                "checked": true
            }
        ],
        "active": "false"
    };
    
    const productIdList = [
        {
            id: 22,
            count: 1
        }
    ];

    const [ready, setReady] = useState(true);

    const [productsAndCount, setProductsAndCount] = useState([{
        product: new ProductObject(tempProd),
        count: 1
    }])

    // useEffect(()=>{
    //     console.log("Set effect");
    //     let i =0;
    //     let products = [];

    //     // apiResponse((response)=>{
    //     //     let loadedProduct = new ProductObject(response);
    //     //     console.log(loadedProduct)

    //     //     return ({
    //     //         product: loadedProduct,
    //     //         count: prod.count
    //     //     })
    //     // },{
    //     //     productID: prod.id
    //     // }, "content/products/get-product-by-id.php")


    //     products = productIdList.map((prod)=>{
    //         let response = apiResponse({
    //             productID: prod.id
    //         }, "content/products/get-product-by-id.php").finally((res, err)=>{
    //             return res;
    //         })
    //         console.log("Response", response)
    //         return new ProductObject(response[0]);
    //     })
    //     setProductsAndCount(products)
    //     setReady(true)
    //     console.log("Products: ", products)
    // }, [])

    const ProductMas = [
        new ProductObject(tempProd, "ru")
    ]

    return ready ? (
        <div className={s.wrap}>
            <div className={s.in}>
                <div className={s.title}>
                    <h3>Корзина</h3>
                    <img src={chrest} alt="Крестик" onClick={()=>{
                        close()
                    }} />
                </div>
                <div className={s.row}>
                    <CartRow item={productsAndCount}/>
                </div>
                <div className={s.res}>
                    <div className={s.sum}>
                        <p>Общая сумма</p>
                        <p></p>
                    </div>
                <button className={s.btn}>Оформить заказ</button>
            </div>
            </div>
        </div>
    ) : null;
}
export default Cart