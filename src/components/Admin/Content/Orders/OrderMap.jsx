import React, { useState } from "react";
import s from './style.module.css';
import eyeImg from './../../../../img/admin/eye-50.png'
import OrderOpen from "./OrderOpen";
const OrderMap = ({order})=>{
    const [state, setState] = useState({...order})
    const [modal, setModal] = useState(false)
    console.log(order)
    return(
        <div className={`${s.order} ${s[state.status?.value]}`}>
            <div className={s.id}>{state.id}</div>
            <div>{state.email}</div>
            <div>{state.phone}</div>
            <div>{state.methodPay}</div>
            <div>{state.total_price}</div>
            <div>{state.date_start}</div>
            <div onClick={()=>setModal(!modal)}><img className={s.eye__img} src={eyeImg}/></div>
            {
                modal ? <OrderOpen close = {()=>setModal(!modal)} order = {state}/> : null
            }
        </div>
    )
}

export default OrderMap;