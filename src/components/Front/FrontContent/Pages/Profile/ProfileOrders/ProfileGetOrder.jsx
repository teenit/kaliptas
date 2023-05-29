import React from "react";
import s from './ProfileOrder.module.css'
const ProfileGetOrder = ({order})=>{

    return(
        <div className={s.card}>
            <p>№ {order.id}</p>
            <p>Статус заказа {order.status?.label}</p>
            <p>Сумма {order.total_price} $</p>
            <div className={s.orders__products}>
                {
                    order.products.map((product)=>{

                        return(
                            <div key={product.id} className={s.order__product}>
                                <div className={s.ord__img}><img className={s.ord__image} src={product.image} alt="" /></div>
                                <div className={s.ord__title}>{product.title.ru}</div>
                                <div className={s.ord__count}>Количество {product.count}</div>
                                <div className={s.ord__price}>{product.price} $</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProfileGetOrder