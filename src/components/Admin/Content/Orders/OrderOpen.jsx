import React, { useEffect, useState } from "react";
import Modal from "../../../Modals/Modal";
import { t } from "i18next";
import s from './style.module.css'
import CloseBtn from "../../../General/Btn/CloseBtn/CloseBtn";
import Select from 'react-select'
import { apiResponse } from "../../../functions/api";
import { Button } from "@mui/material";

const OrderOpen = ({order, close})=>{
 
    const [selectedOption, setSelectedOption] = useState({...order.status});
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
       // return console.log(order)
       if(window.confirm("Вы уверены что хотите изменить статус заказа")){apiResponse({status:selectedOption,orderID:order.id},"orders/update-order-status-by-id.php").then((e)=>console.log(e))}
    }
    return(
        <Modal>
            <div className={s.card__wrap}>
                <div className={`${s.card__inner} ${s[order.status.value]}`}>
                    <div className={s.close__btn}>
                        <CloseBtn close = {close}/>
                    </div>
                    <div className={s.card}>
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
                                    <Button onClick={updateStatus}>Save</Button>

                                </div>
                            </div>
                        
                            <div className={s.card__line}>
                                <h3>{t('details order')}</h3>
                                <div className={s.card__line__in}>
                                    <p>№  ↪ <span className={s.bold}>{order.id}</span> | {t('total price')} ↪ <span className={s.bold}>{order.total_price}</span></p>
                                    <p>{t('Payment method')} ↪ <span className={s.bold}>{order.methodPay}</span></p>
                                    <p>{t('delivery method')} ↪ <span className={s.bold}>{order.delivery.deliveryMethod}</span></p>
                                    <p>{t('Date order')} ↪ <span className={s.bold}>{order.date_start}</span></p>
                                </div>
                            </div>
                            
                            <div className={s.card__line}>
                                <h3>{t('user info')}</h3>
                                <div className={s.card__line__in}>
                                    <p>{t("Email")}: <span>{order.email}</span></p>
                                    <p>{t("Phone")}: {order.phone}</p>
                                    <p>{t("Name")}: {order.user_data.name}</p>
                                    <p>{t("Surname")}: {order.user_data.surname}</p>
                                    <p>{t("Comment")}: {order.user_data.comment}</p>
                                </div>
                            </div>   
                            
                            <div className={s.card__line}>
                                <h3>{t('Delivery')}</h3>
                                <div className={s.card__line__in}>
                                    <p>{t("city")}: <span>{order.delivery.city}</span></p>
                                    <p>{t("residential")}: {order.delivery.residential}</p>
                                    <p>{t("street")}: {order.delivery.street}</p> 
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
export default OrderOpen;