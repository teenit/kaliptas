import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../functions/useAuth";
import LoginForm from "../../../../Auth/LoginForm";
import { apiResponse } from "../../../../functions/api";
import { Auth } from "../../../../Auth/Auth";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileOrders from "./ProfileOrders/ProfileOrders";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../../../Store/Slices/userSlice";
import s from "./Profile.module.css"
import profile from "../../../../../img/front/profile3.png"
import order from "../../../../../img/front/order.png"
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import arrow from "../../../../../img/collapse-arrow-50.png"

const Profile = ()=>{
    const {t} = useTranslation()
    const [user,setUser] = useState({})
    const [auth, setAuth]= useState( false);
    const dispatch = useDispatch();

    useEffect(()=>{
        apiResponse({},"user/check-auth.php").then((data)=>{
            if(data.email !== null && data.token !== null){
                setAuth(true)
                apiResponse({},"user/get-user.php").then((data)=>setUser(data))
            }  
        }).catch((err,dar)=>{
            console.log(err.propertyIsEnumerable())
        })
        
    },[])

    const createLink = (link)=>{
        let lang = localStorage.getItem('lang');
        if(lang === '') return `/${link}`;
        else return `/${lang}/${link}`;
    }

    const [showContent, setShowContent] = useState({
        showProfileInfo: true,
        showProfileOrders: false,
    })

    const [showMobileItems, setShowMobileItems] = useState({
        visibility: window.innerWidth < 600 ? false : true,
        changeArrow: false 
    })//need function for onloading page
    return auth ?(
        <div className={s.wrap}>
            <div className={s.in}>
                <div className={s.left__wrap}>
                    <div className={`${s.item__wrap} ${s.item__wrap__in}`}>
                        <div className={`${s.item__in} ${showContent.showProfileInfo ? s.item__wrap__dop : null}`}>
                            <img src={profile} alt="Профиль" />
                            <p className={s.title} onClick={()=>{
                                setShowContent({...showContent, showProfileInfo: true, showProfileOrders: false})
                            }}>{t('profile-personalData')}</p>
                        </div>
                        <img className={`${s.arrow__item} ${showMobileItems.changeArrow ? s.arrow__item__dop : null}`} src={arrow} alt="Стрелка" onClick={()=>{
                            setShowMobileItems({...showMobileItems, changeArrow: !showMobileItems.changeArrow, visibility: !showMobileItems.visibility})
                        }}/>
                    </div>
                    {
                        showMobileItems.visibility ? 
                            <div className={s.show__div}>
                                <div className={`${s.item__in} ${showContent.showProfileOrders ? s.item__wrap__dop : null}`}>
                                    <img src={order} alt="Заказы" />
                                    <p className={s.title} onClick={()=>{
                                        setShowContent({...showContent, showProfileInfo: false, showProfileOrders: true})
                                    }}>{t('profile-myOrders')}</p>
                                </div>
                                <p className={`${s.title} ${s.title__col}`} onClick={()=>{
                                    dispatch(removeUser())
                                    window.location.reload()
                                }}>{t('profile-exit')}</p>
                                {
                                    user.type === 'saxon' || user.type === 'manager' ? <NavLink to={createLink('admin')}><p className={s.link__title}>{t('profile-adminPanel')}</p></NavLink> : null
                                }
                                {
                                    user.type === 'seller' ? <NavLink to={createLink('shop')}><p className={s.link__title}>Перейти в админпанель магазина</p></NavLink> : null
                                }
                            </div>
                        : null
                    }
                </div>
                <div className={s.rigth__part}>
                    {
                        showContent.showProfileInfo ?
                            <div><ProfileInfo item={user}/></div>
                        : null
                    }
                    {
                        showContent.showProfileOrders ?
                            <div><ProfileOrders /></div>
                        : null
                    }
                </div>
            </div>
        </div>
    ):(
        <Auth />
    )
}
export default Profile