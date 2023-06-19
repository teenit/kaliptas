import React from "react";
import { useState } from "react";
import s from './Users.module.css';
import { useTranslation } from "react-i18next";
import { api } from "../../../functions/api";


const UserRow = ({user,index})=>{
    const [state,setState] = useState(user);

    const {t} = useTranslation();
    const updateUser = () =>{
       
        api((arg)=>{
            window.alert(t(arg.message));
        },{
            userID:state.id,
            userEmail:state.email,
            userName:state.userName,
            userType:state.type,
            userActive:state.active + "",
            userPhone:state.phone
        },"manage/users/update-user.php")
    }
    const masAccess = [{
            value:"saxon",
            title:"Супер Админ",
            translateKey:"Super Admin"
        },
        {
            value:"buyer",
            title:"Покупатель",
            translateKey:"Customer"
        },
        {
            value:"seller",
            title:"Продавец",
            translateKey:"Seller"
        },
        {
            value:"manager",
            title:"Менеджер",
            translateKey:"Manager"
        },
        {
            value:"admin",
            title:"Админ",
            translateKey:"Admin"
        },
    ]
    return(
        <tr className={s.tr}>
            <td className={s.td}>{index}</td>
            <td className={s.td}><input className={s.check__inp} type="text" disabled = {!state.edit} value={state.userName} onChange={(event)=>{
                setState({...state,userName:event.target.value})
            }}/></td>
            <td className={s.td}><input className={s.check__inp} type="text" disabled = {!state.edit} value={state.phone} onChange={(event)=>{
                setState({...state,phone:event.target.value})
            }}/></td>
            <td className={s.td}><input className={s.check__inp} type="text" disabled = {!state.edit} value={state.email} onChange={(event)=>{
                setState({...state,email:event.target.value})
            }}/></td>
            <td className={s.td}><select className={s.select} name="" id="" disabled = {!state.edit} value={state.type} onChange={(event)=>{
                setState({...state,type:event.target.value})
            }}> 
                {masAccess.map((item)=>{
                    return(
                        <option key={item.value} value={item.value}>{t(item.translateKey)}</option>
                    )
                })}
                </select></td>
            <td className={s.td}>
                <div className={s.check}>
                    <input className={s.check__inp} disabled = {!state.edit} checked={state.active?1:0} onChange={(event)=>{
                        setState({...state,active:event.target.checked})
                    }} type="checkbox" name="" id="" />
                </div>
            </td>
            <td className={s.td}>
                {!state.edit ? 
                    <div className={s.change__ok} onClick={()=>{
                        setState({...state,edit:!state.edit})
                    }}></div> 
                    : 
                    <div className={s.change__ch} onClick={()=>{
                        console.log(state);
                        setState({...state,edit:!state.edit})
                        updateUser()
                    }}></div>} 
            </td>   
        </tr>
    )
}
export default UserRow;