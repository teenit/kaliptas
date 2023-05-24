import React, { useEffect, useState } from "react";
import { apiResponse } from "../../../../../functions/api";
import { NavLink } from "react-router-dom";
import s from "./ProfileInfo.module.css"
import contactsImage from "../../../../../../img/front/contact.png"
import deliveryImage from "../../../../../../img/front/delivery.png"
import profileImage from "../../../../../../img/front/profile3.png"
import arrow from "../../../../../../img/collapse-arrow-50.png"
import login from "../../../../../../img/front/login.png"
import { useTranslation } from "react-i18next";

const ProfileInfo = ({item})=>{
    const {t} = useTranslation()
    const [showInfo, setShowInfo] = useState({
        firstInfo: true,
        secondInfo: false,
        thirdInfo: false,
        foursInfo: false,
        fifthInfo: false
    })
    
    return(
        <div className={s.wrap}>
            <h2>{t('profile-personalData')}</h2>
            <div className={s.item__wrap}>
                <div className={s.item__title}>
                    <div className={s.left}>
                        <img className={s.profile} src={profileImage} alt="Профиль" />
                        <p>{t('profile-personalData')}</p>
                    </div>
                    <div className={s.right}>
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
                                    <label htmlFor="">{t('profile-userName')}</label>
                                    <input disabled type="text" value={item.userName}/> 
                                </div>
                                <div className={s.item}>
                                    <label htmlFor="">{t('profile-birthday')}</label>
                                    <input disabled type="text" value={"13.06.1996"}/> 
                                </div>
                                <div className={s.item}>
                                    <label htmlFor="">{t('profile-sex')}</label>
                                    <input disabled type="text" value={"Мужской"}/> 
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
                        <p>{t('profile-login')}</p>
                    </div>
                    <div className={s.right}>
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
                                    <label htmlFor="">{t('profile-loginEmail')}</label>
                                    <input disabled type="text" value={item.email}/> 
                                </div>
                                <div className={s.item}>
                                    <label htmlFor="">{t('profile-loginPhone')}</label>
                                    <input disabled type="text" value={item.phone}/> 
                                </div>
                                <div className={s.item}>
                                    <label htmlFor="">{t('profile-userType')}</label>
                                    <input disabled type="text" value={item.type}/> 
                                </div>
                            </div>
                        </div>
                    : null
                }
            </div>

            <div className={s.item__wrap}>
                <div className={s.item__title}>
                    <div className={s.left}>
                        <img className={s.profile} src={contactsImage} alt="Профиль" />
                        <p>{t('profile-contacts')}</p>
                    </div>
                    <div className={s.right}>
                        <img className={`${s.arrow} ${showInfo.thirdInfo ? s.arrow__dop : null}`} src={arrow} alt="" onClick={()=>{
                            setShowInfo({...showInfo, thirdInfo: !showInfo.thirdInfo})
                        }} />
                    </div>
                </div>
                {
                    showInfo.thirdInfo ? 
                        <div className={s.item__in}>
                            <div className={s.item__info}>
                                <div className={s.item}>
                                    <label htmlFor="">{t('profile-email')}</label>
                                    <input disabled type="text" value={item.email}/> 
                                </div>
                                <div className={s.item}>
                                    <label htmlFor="">{t('profile-phone')}</label>
                                    <input disabled type="text" value={item.phone}/> 
                                </div>
                                <div className={s.item}>
                                    <label htmlFor="">{t('profile-secondPhone')}</label>
                                    <input disabled type="text" value={"0688562345"}/> 
                                </div>
                            </div>
                        </div>
                    : null
                }
            </div>

            <div className={s.item__wrap}>
                <div className={s.item__title}>
                    <div className={s.left}>
                        <img className={s.profile} src={deliveryImage} alt="Профиль" />
                        <p>{t('profile-deliveryAdress')}</p>
                    </div>
                    <div className={s.right}>
                        <img className={`${s.arrow} ${showInfo.foursInfo ? s.arrow__dop : null}`} src={arrow} alt="" onClick={()=>{
                            setShowInfo({...showInfo, foursInfo: !showInfo.foursInfo})
                        }} />
                    </div>
                </div>
                {
                    showInfo.foursInfo ? 
                        <div className={s.item__in}>
                            <div className={s.item__info}>
                                <div className={s.item}>
                                    <label htmlFor="">{t('profile-city')}</label>
                                    <input disabled type="text" value={"Тбилиси"}/> 
                                </div>
                                <div className={s.item}>
                                    <label htmlFor="">{t('profile-street')}</label>
                                    <input disabled type="text" value={"Львови"}/> 
                                </div>
                                <div className={s.item}>
                                    <label htmlFor="">{t('profile-house')}</label>
                                    <input disabled type="text" value={"25"}/> 
                                </div>
                                <div className={s.item}>
                                    <label htmlFor="">{t('profile-flat')}</label>
                                    <input disabled type="text" value={"13"}/> 
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