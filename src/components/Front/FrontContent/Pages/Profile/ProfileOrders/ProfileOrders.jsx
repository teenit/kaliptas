import React, { useState } from "react";

const ProfileOrders = ()=>{
    const [orders,setOrders] = useState([]);
    return(
        <div>
            <h3>История заказов</h3>
            {
                orders.length === 0 ? <h4>У вас нет заказов</h4> : <p>Заказы есть</p> 
            }
        </div>
    )
}

export default ProfileOrders;