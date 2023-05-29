import React, { useEffect, useState } from "react";
import s from "./ProfileOrder.module.css"
import { useTranslation } from "react-i18next";
import { apiResponse } from "../../../../../functions/api";
import ProfileGetOrder from "./ProfileGetOrder";

const ProfileOrders = ()=>{
    const {t} = useTranslation()
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        apiResponse({},"orders/get-orders-by-user-email.php").then((data)=>{
            setOrders(data)
        })

    },[])
    return(
        <div className={s.wrap}>
            <h2>{t('profile-ordersHistory')}</h2>
            {
                orders.length === 0 ? <h4>У вас нет заказов</h4> :  null
            }
            <div className={s.history__orders}>
                {
                    orders.map(order=><ProfileGetOrder key={order.id} order={order} />)
                }
            </div>
        </div>
    )
}

export default ProfileOrders;