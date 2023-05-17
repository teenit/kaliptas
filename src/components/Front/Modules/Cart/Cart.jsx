import React, { useEffect, useState } from "react";
import s from "./Cart.module.css"
import CartRow from "./CartRow/CartRow";
import chrest from "./../../../../img/front/chrest.png"
import { ProductObject } from "../../FrontContent/FrontProduct/ProductObject";
import {api, apiResponse} from "../../../functions/api"
import {getCart} from "../../../functions/cartControll";
import {getLanguageForLink, getRealLanguage} from "../../../functions/getLanguage";

const Cart = ({close, }) =>{
    const loadCart = ()=>{
        console.log("Entries",Object.entries(getCart()))

        return Object.entries(getCart())
        .map((entry)=>{
        return {
            id: entry[0],
            count: entry[1]
        }
    })}

    const [productIdList, setProductIdList] = useState(loadCart());
    const [ready, setReady] = useState(true);
    const [productsAndCount, setProductsAndCount] = useState([]);

    const loadProducts = function () {
        let promiseList = [];
        let cartList = loadCart();
        setProductIdList(cartList)
        console.log("Load products:", productIdList)

        for (let i = 0; i < cartList.length; i++) {
            let prod = cartList[i]
            promiseList.push(apiResponse({
                productID: prod.id
            }, "content/products/get-product-by-id.php"));
        }

        Promise.all(promiseList).then((values)=>{
            console.log("Promise result: ", values)
            let tempProductsAndCount = [];
            for (let i = 0; i < values.length; i++) {
                tempProductsAndCount.push({
                    product: new ProductObject(values[i], getRealLanguage()),
                    count: productIdList[i].count
                });
            }
            console.log("Prod:",tempProductsAndCount)
            setProductsAndCount(tempProductsAndCount)
            setReady(true)
        })
    }

    useEffect(()=>{
        loadProducts();
    }, [])

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
                    {
                        productsAndCount.map((item, index)=>{
                            return <CartRow item={item} key={index} change={()=>{loadProducts()}}/>
                        })
                    }
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