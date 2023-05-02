import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import s from './Users.module.css';
import { api } from "../../../functions/api";
import UserRow from "./UserRow";
const Users = ()=>{
    const {t} = useTranslation()
    const [users,setUsers] = useState([])
    const [usersDefault,setUsersDefault] = useState([])
    const [state, setState] = useState(false)


    useEffect(()=>{
        api((arg)=>{
            setUsers(arg);
            setUsersDefault(arg);
          
        },{},"manage/users/get-users.php")
    },[])

    return(
        <div className={s.wrap}>
            <table className={s.table}>
                <thead className={s.thead}>
                    <tr className={s.tr}>
                        <td className={s.td}>№</td>
                        <td className={s.td}>{t('fio')}</td>
                        <td className={s.td}>{t('phone')}</td>
                        <td className={s.td}>E-mail</td>
                        <td className={s.td}>{t('type')}</td>
                        <td className={s.td}>{t('status')}</td>
                        <td className={s.td}></td>
                    </tr>
                </thead>
                <tbody>        
                    {
                    users.map((item,index)=><UserRow key={item.id} user={item} index={index + 1}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Users;