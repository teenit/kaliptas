import React, { useEffect, useState } from "react";
import s from "./CartModule.module.css"
import CartRow from "./CartRow/CartRow";
import { ProductObject } from "../../FrontContent/FrontProduct/ProductObject";
import {apiResponse} from "../../../functions/api"
import {getCart} from "../../../functions/cartControll";
import {getRealLanguage} from "../../../functions/getLanguage";

const CartModule = ({setTotalPrice, change}) =>{
    const loadCart = ()=>{
        return getCart()
        .map((entry)=>{
        return {
            id: entry.id,
            count: entry.count,
            variableId : entry.variableId
        }
    })}

    // const [productIdList, setProductIdList] = useState(loadCart());
    const [ready, setReady] = useState(true);
    const [productsAndCount, setProductsAndCount] = useState([]);

    const loadProducts = function () {
        let promiseList = [];
        let cartList = loadCart();
        let totalPrice = 0;

        // setProductIdList(cartList)

        for (let i = 0; i < cartList.length; i++) {
            let prod = cartList[i]
            promiseList.push(apiResponse({
                productID: prod.id
            }, "content/products/get-product-by-id.php"));
        }

        Promise.all(promiseList).then((values)=>{
            let tempProductsAndCount = [];
            for (let i = 0; i < values.length; i++) {
                tempProductsAndCount.push({
                    product: new ProductObject(values[i], getRealLanguage()),
                    count: cartList[i].count,
                    variableId: cartList[i].variableId
                });
            }
            tempProductsAndCount.forEach((prod)=>{
                if (prod.product.isDiscountPresent(prod.variableId)) {
                    totalPrice += prod.product.getPriceWithDiscount(prod.variableId) * prod.count;
                } else {
                    totalPrice += prod.product.getPrice(prod.variableId) * prod.count;
                }
            });
            if (setTotalPrice !== undefined) {
                setTotalPrice(totalPrice);
            }
            setProductsAndCount(tempProductsAndCount)
            setReady(true)
        })
    }

    useEffect(()=>{
        loadProducts();
    }, [])

    return ready ? (
        <div className={s.row}>
            {
                productsAndCount.map((item, index)=>{
                    return <CartRow item={item} key={index} change={()=>{
                        setProductsAndCount([]);
                        loadProducts();

                        if (change !== undefined){
                            change();
                        }
                    }}/>
                })
            }
        </div>
    ) : null;
}
export default CartModule