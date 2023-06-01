import React from "react";
import s from "./Shops.module.css"
import { useState } from "react";
import btnOff from "../../../../img/btnOff.png";
import logoStore from "../../../../img/admin/logoStore.png"
import { api, apiResponse } from "../../../functions/api";
import { NavLink } from "react-router-dom";
import RegisterStore from "./RegisterStore/RegisterStore";
import imgEdit from './../../../../img/admin/icons8-edit-50.png'
import { t } from "i18next";
const ShopsRow = ({shop,index}) =>{
    const [state, setState] = useState({...shop})
    const [stateShop, setStateShop] = useState({...shop.shop})
    const [change,setChange] = useState(false)
    const lng = localStorage.getItem('LNG').toLowerCase()
    function changeStore(){
        apiResponse({shop:stateShop,shopID:state.id},"manage/shops/update-shop-by-id.php").then((e)=>{
            window.alert(t(e.message))
            window.location.reload()
        })
    }
    console.log(state)
    const close = () => setChange(false)
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
            <td className={`${s.td__row} ${s.td__control}`}> 
            <img src={imgEdit} className={s.td__edit__img}  alt="" onClick={()=>setChange(true)} />
                <img className={`${s.td__check} ${state.status.value ? s.td__check__true : s.td__check__false}`} src={btnOff} alt="Редактировать" onClick={()=>{
                    api((arg)=>{
                        setState({...state, status:{...state.status,value:!state.status.value}});
                    },{status:{...state.status,value:!state.status.value},shopID:state.id},"manage/shops/activate-shop.php")   
                }}/>
            </td>
            {
                change ? <RegisterStore close = {close} newStore = {stateShop} setNewStore = {setStateShop} regStore = {changeStore} btn = {t('update')} /> : null
            }
        </tr>       
    )
}
export default ShopsRow