import React, { useState } from "react";
import s from "./ProfileOrder.module.css"
import { useTranslation } from "react-i18next";

const ProfileOrders = ()=>{
    const {t} = useTranslation()
    const [orders,setOrders] = useState([]);
    return(
        <div className={s.wrap}>
            <h2>{t('profile-ordersHistory')}</h2>
            {
                //orders.length === 0 ? <h4>У вас нет заказов</h4> : <p>Заказы есть</p> 
            }
        </div>
    )
}

export default ProfileOrders;