import React, { useEffect, useState } from "react";
import Header from "../General/Header/Header";
import Footer from "../Footer/Footer";
import s from './shop.module.css'
import { useAuth } from "../functions/useAuth";
import { useTranslation } from "react-i18next";
import { api, apiResponse } from "../functions/api";
import RegisterStore from "../Admin/Content/Shops/RegisterStore/RegisterStore";
import { NavLink } from "react-router-dom";
const ShopLInks = ()=>{
    const [auth, setAuth] = useState( false);
    const lng = localStorage.getItem("LNG").toLowerCase()
   // useAuth((arg)=>{console.log(arg); setAuth(arg)},'user/check-auth-shop.php')

    const {t} = useTranslation()
    const [state, setState] = useState(false);
    const [newStore, setNewStore] = useState({
        title:{
            en:"",
            ru:"",
            ge:""
        },
        description:{
            en:"",
            ru:"",
            ge:""
        },
        typeProducts:{
            en:"",
            ru:"",
            ge:""
        },
        slug:""
    })
    const [errorStatus,setErrorStatus] = useState("loading")
    const [shops,setShops] = useState([])
    useEffect(()=>{
        
       
        apiResponse({},"user/check-auth-shop.php").then((resolve)=>{
          // return console.log(resolve)
            
            if(resolve.token !== null && resolve.email !== null){
                
                apiResponse({},"manage/shop/get-shops-by-seller.php").then((data)=>{
                setShops(data)
                setAuth(true)
            }).catch((err)=>{
                console.log(err)
                setErrorStatus(err?.response?.status ? err.response.status : err.message)
            })}
        }).catch((err)=>{
            setErrorStatus(err.response.status)
        })
    },[])
    const regStore = () =>{
        apiResponse({slug:newStore.slug,shop:{...newStore}},"manage/shops/create-shop.php").then((e)=>{
            window.alert(t('shop-links-succes'));
            window.location.reload()
        })
    }
    

    return auth ?(
        <div>
            
            <Header burgerItems = {[]} menuItems = {[]}/>
            <div className={`${s.wr} ${s.min__height50}`}>
                <div className={s.add__shop} onClick={()=>setState(!state)}>
                <span className={`${s.span} ${s.span1}`}></span>
                <span className={`${s.span} ${s.span2}`}></span>
            </div>
                {state ? <RegisterStore regStore = {regStore} newStore = {newStore} setNewStore = {setNewStore} close = {()=>setState(!state)}/> : null}
                
            <h2>{t('shop-links-stores')}</h2>
            <div className={s.cards}>

            
            {
                shops.map((item)=>{
                    
                    return(
                    <div key={item.slug} className={`${s.card} ${item.status.value ? s.active__shop : s.not__active__shop}`}>
                        <div>
                            <p>{t('shop-links-name')} - {item.shop.title[lng] == "" ? item.shop.title.ge :item.shop.title[lng]}</p>
                            <p>{t('shop-links-desc')} - {item.shop.description[lng] == "" ? item.shop.description.ge : item.shop.description[lng]}</p>
                        </div>
                        {item.status.value ?<div>
                            <NavLink key={item.slug} to={item.slug}>{t('shop-links-go-to')}</NavLink>
                        </div>:null}
                        

                    </div>
                    )
                })
            }  
            </div>  
            </div>
            
            <Footer />
        </div>
    ):(
        <div>
            <Header burgerItems = {[]} menuItems = {[]}/>
                <div className={`${s.wr} ${s.min__height50}`}>
                    <p>{t(errorStatus)}</p>
                </div>
            <Footer />
        </div>
    )
}

export default ShopLInks;