import React, { useState } from "react";
import s from "./ProfileOrder.module.css"

const ProfileOrders = ()=>{
    const [orders,setOrders] = useState([]);
    return(
        <div className={s.wrap}>
            <h2>История заказов</h2>
            {
                //orders.length === 0 ? <h4>У вас нет заказов</h4> : <p>Заказы есть</p> 
            }
        </div>
    )
}

export default ProfileOrders;