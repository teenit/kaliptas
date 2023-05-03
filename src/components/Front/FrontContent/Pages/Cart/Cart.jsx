import React from "react";
import s from './Cart.module.css'
import { useState } from "react";
import CartItem from "./components/CartItem";

const Cart = () => {
    const [data, setData] = useState([
        {
            url: "url",
            productName: "Название1",
            article: "100036962",
            amount: 2,
            price: 100

        },
        {
            url: "url",
            productName: "Название2",
            article: "100034239",
            amount: 1,
            price: 13
        },
        {
            url: "url",
            productName: "Название3",
            article: "1000349",
            amount: 5,
            price: 20

        },
        {
            url: "url",
            productName: "Название4",
            article: "10005657",
            amount: 3,
            price: 49.99

        },
        {
            url: "url",
            productName: "Название5",
            article: "1000357",
            amount: 10,
            price: 12.49

        }
    ])

    const [amount] = useState('')
    const [empty, setEmpty] = useState(false)
    const [close, setClose] = useState(false)
    const onClickHandler = (index, e) => {
        const newItems = data.map((item, i) => {
            if (i === index) {
                return { ...item, amount: e }
            } else {
                return { ...item }
            }

        });
        setData(newItems)
    }

    const onDeleteHandler = (index) => {
        const newItems = data.map((item, i) => {
            if (i === index && close == true) {
                return { ...item };
            } else {
                return { ...item };
            }

        });
        setData(newItems);
    };

    return (
        <div className={s.wrap}>
            
            {empty == false ?
            <h2>Ваша корзина</h2> :
            <h2>Ваша корзина пуста</h2>
            }
            {empty == false ?
                <table className={s.cart__table}>
                    <thead>
                    <CartItem imageUrl="jsjsjs"/>

                        <tr>
                            <td>url</td>
                            <td>Название товара</td>
                            <td>Артикул</td>
                            <td>Количество</td>
                            <td>Стоимость</td>
                            <td style={{ width: "50px" }}></td>
                        </tr>

                    </thead>
                    <tbody>
                        {data.map((item, index) => (

                            <tr>
                                <td>{item.url}</td>
                                <td>{item.productName}</td>
                                <td>{item.article}</td>
                                <td><input type="number" value={item.amount} onChange={(e) => {
                                    if (e.target.value.length > 3) {
                                        onClickHandler(index, e.target.value.replace(/^0+/, "").slice(0, 3))
                                    } else {
                                        onClickHandler(index, e.target.value.replace(/^0+/, ""))

                                    }
                                }} onKeyDown={(e) => {
                                    if (e.key === "." || e.key === "-") {
                                        e.preventDefault()
                                    }
                                }} key={index} />

                                </td>
                                <td>{item.amount === "" ?
                                    (item.price * item.amount).toFixed(2) + "$" :
                                    (item.price * item.amount).toFixed(2) + "$"}
                                </td>
                                <td>
                                    <div className={s.cross} onClick={() => {
                                        setClose(true)
                                        onDeleteHandler(index, data.splice(index, 1))
                                        if (data.length == 0) {
                                            setEmpty(true)

                                        }
                                        console.log(data);
                                    }}>
                                        <div className={s.c1}></div>
                                        <div className={s.c2}></div>
                                    </div>
                                </td>
                            </tr>
                        ))}


                        <tr className={s.full__price}>
                            <td>Всего товаров:</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{
                                amount === "" ?
                                    data.length
                                    : data.length}
                            </td>
                            <td></td>
                        </tr>
                        <tr className={s.full__price}>
                            <td>Общая стоимость:</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{
                                amount === "" ?
                                data.map(item => (item.price * item.amount)).reduce((item, index) => (item + index)).toFixed(2) + "$"
                                    : data.map(item => (item.price * amount)).reduce((item, index) => (item + index)).toFixed(2) + "$"}
                            </td>
                            <td></td>
                        </tr>
                    </tbody>


                </table>
                : null}


            <button className={s.cart__button}><a href="#">{
                empty==false
                    ? <span>Перейти к оформлению</span>
                    : <span>Выбрать товар</span>}</a></button>
        </div>
    )
}
export default Cart;