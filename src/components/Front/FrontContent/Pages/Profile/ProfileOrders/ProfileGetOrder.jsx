import React from "react";
import s from './ProfileOrder.module.css'
import { useTranslation } from "react-i18next";
import { getRealLanguage } from "../../../../../functions/getLanguage";
const ProfileGetOrder = ({order})=>{
    const {t} = useTranslation()
    return(
        <div className={s.card}>
            <p>№ {order.id}</p>
            <p>{t('profil-get-order-status')} {order.status?.label}</p>
            <p>{t('profil-get-order-summa')} {order.total_price} $</p>
            <div className={s.orders__products}>
                {
                    order.products.map((product)=>{

                        return(
                            <div key={product.id} className={s.order__product}>
                                <div className={s.ord__img}><img className={s.ord__image} src={product.image} alt="" /></div>
                                <div className={s.ord__title}>{product.title[getRealLanguage()]}</div>
                                <div className={s.ord__count}>{t('count')} {product.count}</div>
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