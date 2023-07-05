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
        }).catch((error)=>{
            throw error
        })
    },[])

    return(
        <div className={s.wrap}>
            <h1 className={s.title}>{t('orders')}</h1>
            <div className={s.orders__wrap}>
                <div className={`${s.order} ${s.order__dop}`}>
                    <div className={s.order__in}></div>
                    <div className={s.order__in}>{t('Email')}</div>
                    <div className={s.order__in}>{t('phone')}</div>
                    <div className={s.order__in}>{t('method pay')}</div>
                    <div className={s.order__in}>{t('price')}</div>
                    <div className={s.order__in}>{t('date start')}</div>
                    <div className={s.order__in}></div>
                </div>
                <div className={s.order__in__wrap} >
                    {
                        orders.map((item)=>{return <OrderMap key={item.id} order={item}/>})
                    }
                </div>
            </div>

        </div>
    )
}

export default Orders;