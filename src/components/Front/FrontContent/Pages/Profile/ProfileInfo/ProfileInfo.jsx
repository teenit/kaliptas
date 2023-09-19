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
                                    <p>{t('profile-userName')}</p>
                                    <span>{item.userName}</span>
                                </div>
                                <div className={s.item}>
                                    <p>{t('profile-birthday')}</p>
                                    <span></span> 
                                </div>
                                <div className={s.item}>
                                    <p>{t('profile-sex')}</p>
                                    <span></span>
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
                                    <p>{t('profile-loginEmail')}</p>
                                    <span>{item.email}</span>
                                </div>
                                <div className={s.item}>
                                    <p>{t('profile-loginPhone')}</p>
                                    <span>{item.phone}</span> 
                                </div>
                                <div className={s.item}>
                                    <p>{t('profile-userType')}</p>
                                    <span>{item.type}</span>
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
                                    <p>{t('profile-email')}</p>
                                    <span>{item.email}</span>
                                </div>
                                <div className={s.item}>
                                    <p>{t('profile-phone')}</p>
                                    <span>{item.phone}</span> 
                                </div>
                                <div className={s.item}>
                                    <p>{t('profile-secondPhone')}</p>
                                    <span></span>
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
                                    <p>{t('profile-city')}</p>
                                    <span></span>
                                </div>
                                <div className={s.item}>
                                    <p>{t('profile-street')}</p>
                                    <span></span> 
                                </div>
                                <div className={s.item}>
                                    <p>{t('profile-house')}</p>
                                    <span></span>
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