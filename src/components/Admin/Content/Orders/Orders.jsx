import React, { useEffect, useState } from "react";
import { apiResponse } from "../../../functions/api";
import OrderMap from "./OrderMap";
import s from './style.module.css';
import { t } from "i18next";

const Orders = ()=>{
    const [orders,setOrders]  = useState([]);
    
    useEffect(()=>{
        apiResponse({},"orders/get-all-orders.php").then((e)=>{
            setOrders(e)
        }).catch(err=>console.log(err))
    },[])
    return(
        <div>
            <h1>{t('orders')}</h1>
            <div className={s.orders}>
                <div className={s.order}>
                    <div>#</div>
                    <div>{t('email')}</div>
                    <div>{t('phone')}</div>
                    <div>{t('method pay')}</div>
                    <div>{t('price')}</div>
                    <div>{t('date start')}</div>
                    <div></div>
                </div>
                
                {
                    orders.map((item)=>{return <OrderMap key={item.id} order={item}/>})
                }
            </div>

        </div>
    )
}

export default Orders;