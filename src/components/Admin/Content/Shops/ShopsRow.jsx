import React from "react";
import s from "./Shops.module.css"
import { useState } from "react";
import btnOff from "../../../../img/btnOff.png";
import logoStore from "../../../../img/admin/logoStore.png"
import { api } from "../../../functions/api";
import { NavLink } from "react-router-dom";

const ShopsRow = ({shop,index}) =>{
    const [state, setState] = useState({...shop})
    const lng = localStorage.getItem('LNG').toLowerCase()
    return(
        <tr className={s.tr}>
            <td className={s.td__row}>{index}</td>
            <td className={s.td__row}>
                <img src={logoStore} alt="Логотип" />
            </td>
            <td className={`${s.td__row} ${s.td__row__bold}`}><NavLink to={`shop/${state.shop.slug}`}>{state.shop.title[lng]}</NavLink></td>
            <td className={s.td__row}>+995 97 456 2343</td>
            <td className={s.td__row}>{state.productsCount !== null ? state.productsCount : 0}</td>
            <td className={s.td__row}>{state.advertisingCount !== null ? state.advertisingCount : 0}</td>
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