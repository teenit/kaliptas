import React from "react";
import s from "./Shops.module.css"
import { useState } from "react";
import btnOff from "../../../../img/btnOff.png";
import logoStore from "../../../../img/admin/logoStore.png"
import { api } from "../../../functions/api";
import { NavLink } from "react-router-dom";

const ShopsRow = ({shop,index}) =>{
    const [state, setState] = useState({...shop})
    return(
        <tr className={s.tr}>
            <td className={s.td__row}>{index}</td>
            <td className={s.td__row}>
                <img src={logoStore} alt="Логотип" />
            </td>
            <td className={`${s.td__row} ${s.td__row__bold}`}><NavLink to={`shop/${state.shop.slug}`}>{state.shop['name'+localStorage.getItem('LNG')]}</NavLink></td>
            <td className={s.td__row}>+995 97 456 2343</td>
            <td className={s.td__row}>4.2</td>
            <td className={s.td__row}>15 дней</td>
            <td className={s.td__row}>
                <img className={`${s.td__check} ${state.status.value ? s.td__check__true : s.td__check__false}`} src={btnOff} alt="Редактировать" onClick={()=>{
                  console.log(state.status)
                    api((arg)=>{
                        setState({...state, status:{...state.status,value:!state.status.value}});
                    },{status:{...state.status,value:!state.status.value},shopID:state.id},"manage/shops/activate-shop.php")   
                }}/>
            </td>
        </tr>       
    )
}
export default ShopsRow