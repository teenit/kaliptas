import React, { useState } from "react";
import s from './style.module.css';
import { getRealLanguage } from "../../functions/getLanguage";
import { t } from "i18next";

const Receipt = ({products}) => {
    const [state,setState] = useState(products)
    console.log(products)
    return (
        <div className={s.wrap}>
            <div className={s.inner}>
                
                <div className={s.products}>
                    <div className={s.product}>
                        <div className={s.img__wrap}>
                            
                        </div>
                        <div className={s.wrap__title}><p className={s.title}>{t('name of product')}</p></div>
                        <div className={s.wrap__count}><p className={s.count}>{t('count')}</p></div>
                        <div className={s.wrap__price}><p className={s.price}>{t('price')}</p></div>
                    </div>
                    {
                        state.map((item)=>{

                            return(
                                <div key={item.id} className={s.product}>
                                    <div className={s.img__wrap}>
                                        <img className={s.img} src={item.image} alt={item.title[getRealLanguage()]} />
                                    </div>
                                    <div className={s.wrap__title}><p className={s.title}>{item.title[getRealLanguage()]}</p></div>
                                    <div className={s.wrap__count}><p className={s.count}>{item.count}</p></div>
                                    <div className={s.wrap__price}><p className={s.price}>{item.price}</p></div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={s.price__total}></div>
            </div>
        </div>
    )
}

export default Receipt;