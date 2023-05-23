import React, { useEffect, useState } from "react";
import { apiResponse } from "../../../../../functions/api";
import { NavLink } from "react-router-dom";
import s from "./ProfileInfo.module.css"
import pencil from "../../../../../../img/pencilCheck.png"
import profileImage from "../../../../../../img/front/profile3.png"
import arrow from "../../../../../../img/collapse-arrow-50.png"
import login from "../../../../../../img/front/login.png"

const ProfileInfo = ({item})=>{
    const [showInfo, setShowInfo] = useState({
        firstInfo: true,
        secondInfo: false
    })
    
    return(
        <div className={s.wrap}>
            <h2>Личные данные</h2>
            <div className={s.item__wrap}>
                <div className={s.item__title}>
                    <div className={s.left}>
                        <img className={s.profile} src={profileImage} alt="Профиль" />
                        <p>Личные данные</p>
                    </div>
                    <div className={s.right}>
                        <img className={s.pencil} src={pencil} alt="Редактировать" />
                        <img className={`${s.arrow} ${showInfo.firstInfo ? s.arrow__dop : null}`} src={arrow} alt="" onClick={()=>{
                            setShowInfo({...showInfo, firstInfo: !showInfo.firstInfo})
                        }} />
                    </div>
                </div>
                {
                    showInfo.firstInfo ? 
                        <div className={s.item__in}>
                            <div className={s.item__info}>
                                <div className={s.item}>
                                    <label htmlFor="">Имя пользователя</label>
                                    <input disabled type="text" value={item.userName}/> 
                                </div>
                                <div className={s.item}>
                                    <label htmlFor="">Дата рождения</label>
                                    <input disabled type="text" value={""}/> 
                                </div>
                                <div className={s.item}>
                                    <label htmlFor="">Пол</label>
                                    <input disabled type="text" value={""}/> 
                                </div>
                                <div className={s.item}>
                                    <label htmlFor="">Язык общения</label>
                                    <input disabled type="text" value={""}/> 
                                </div>
                            </div>
                        </div>
                    : null
                }
            </div>


            <div className={s.item__wrap}>
                <div className={s.item__title}>
                    <div className={s.left}>
                        <img className={s.profile} src={login} alt="Профиль" />
                        <p>Логин</p>
                    </div>
                    <div className={s.right}>
                        <img className={s.pencil} src={pencil} alt="Редактировать" />
                        <img className={`${s.arrow} ${showInfo.secondInfo ? s.arrow__dop : null}`} src={arrow} alt="" onClick={()=>{
                            setShowInfo({...showInfo, secondInfo: !showInfo.secondInfo})
                        }} />
                    </div>
                </div>
                {
                    showInfo.secondInfo ? 
                        <div className={s.item__in}>
                            <div className={s.item__info}>
                                <div className={s.item}>
                                    <label htmlFor="">Телефон пользователя</label>
                                    <input disabled type="text" value={item.phone}/> 
                                </div>
                                <div className={s.item}>
                                    <label htmlFor="">Email пользователя</label>
                                    <input disabled type="text" value={item.email}/> 
                                </div>
                                <div className={s.item}>
                                    <label htmlFor="">Тип пользователя</label>
                                    <input disabled type="text" value={item.type}/> 
                                </div>
                            </div>
                        </div>
                    : null
                }
            </div>
        </div>
    )
}
export default ProfileInfo