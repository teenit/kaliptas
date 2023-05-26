import React, { useEffect, useState } from "react";
import Modal from "../../../Modals/Modal";
import { t } from "i18next";
import s from './style.module.css'
import CloseBtn from "../../../General/Btn/CloseBtn/CloseBtn";
import Select from 'react-select'
import { apiResponse } from "../../../functions/api";

const OrderOpen = ({order, close})=>{
    console.log(order.status)
    const status = {
        value: order
    }
    const [selectedOption, setSelectedOption] = useState(null);
    useEffect(()=>{
        
        console.log("kergjerjig")
       // setSelectedOption({...order.status})
    },[])
    const options = [
        { value: 'created', label: 'Created' },
        { value: 'in_working', label: 'In working' },
        { value: 'waiting_payment', label: 'Waiting payment' },
        { value: 'on_hold', label: 'On hold' },
        { value: 'done', label: 'Done' },
        { value: 'cancelled', label: 'Cancelled' },
        { value: 'goods_returned', label: 'Goods returned' },
        { value: 'failure', label: 'Failure' },
        { value: 'draft', label: 'Draft' }
      ]
     
      const updateStatus = ()=>{
        apiResponse({status:selectedOption,orderID:order.id},"orders/update-order-status-by-id.php").then((e)=>console.log(e))
    }
    return(
        <Modal>
            <div className={s.card__wrap}>
                <div className={s.card__inner}>
                    <div className={s.close__btn}>
                        <CloseBtn close = {close}/>
                    </div>
                    
                    <div onClick={()=>console.log(selectedOption)} className={s.card}>
                        <div className={s.card__info}>
                        <div className={s.card__line}>
                                <h3>{t('Edit status')}</h3>
                            </div>
                            <div className={s.card__line}>
                                <div className={s.select}>
                                    <Select 
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}/>
                                <button onClick={updateStatus}>OK</button>
                                </div>
                            </div>
                            <div className={s.card__line}>
                                <h3>{t('details order ')}</h3>
                            </div>
                            <div className={s.card__line}>
                                <p>№  ↪ <span className={s.bold}>{order.id}</span> | {t('total price')} ↪ <span className={s.bold}>{order.total_price}</span></p>
                                <p>{t('Payment method')} ↪ <span className={s.bold}>{order.methodPay}</span></p>
                                <p>{t('delivery method')} ↪ ?</p>
                                <p>{t('status order')} ↪ <span className={s.bold}>{order.status}</span> | {t('Date order')} ↪ <span className={s.bold}>{order.date_start}</span></p>
                            </div>
                            
                            <div className={s.card__line}>
                                <h3>{t('user info')}</h3>
                            </div>
                            <div className={s.card__line}>
                                <p>{t("Email")}: <span>{order.email}</span></p>
                                <p>{t("Phone")}: {order.phone}</p>
                                <p>{t("Name")}: {order.user_data.name}</p>
                                <p>{t("Surname")}: {order.user_data.surname}</p>
                                <p>{t("Comment")}: {order.user_data.comment}</p>
                            </div>
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
export default OrderOpen;