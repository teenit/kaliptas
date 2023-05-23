import React, { useEffect, useState } from "react";
import { apiResponse } from "../../../../../functions/api";
import { NavLink } from "react-router-dom";

const ProfileInfo = ()=>{
    const [user,setUser] = useState({})
    useEffect(()=>{
        apiResponse({},"user/get-user.php").then((data)=>setUser(data))
    },[])
    const createLink = (link)=>{
        let lang = localStorage.getItem('lang');
        if(lang === '') return `/${link}`;
        else return `/${lang}/${link}`;
    }
    return(
        <div>
            <h3>Информация про пользователя</h3>
            <span>{user.userName}</span> 
            <span>{user.phone}</span> 
            <span>{user.email}</span> 
            <span>{user.type}</span>
            {
                user.type === 'saxon' || user.type === 'manager' ? <NavLink to={createLink('admin')}>Перейти в админпанель</NavLink> : null
            }
            {
                user.type === 'seller' ? <NavLink to={createLink('shop')}>Перейти в админпанель магазина</NavLink> : null
            }
        </div>
    )
}
export default ProfileInfo