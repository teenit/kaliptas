import React, { useEffect, useState } from "react";
import Header from "../General/Header/Header";
import Footer from "../Footer/Footer";
import ShopContent from "./ShopContent/ShopContent";
import { useAuth } from "../functions/useAuth";
import s from './shop.module.css'
import { apiResponse } from "../functions/api";
import { t } from "i18next";
const Shop = ()=>{
    const menuItems =[{
        link:'',
        title:"main"
    },{
        link:'products',
        title:"products"
    },{
        link:'categories',
        title:"categories"
    },{
        link:'statistics',
        title:"statistics"
    },{
        link:'support',
        title:"support"
    },]
    const burgerItems = [];
    const [errorStatus, setErrorStatus] = useState("loading")
    const [auth, setAuth] = useState( false);
    
    useEffect(()=>{
        apiResponse({},"user/check-auth-shop.php").then((e)=>{
            setAuth(true)
        }).catch((err)=>setErrorStatus(err.response.status))
    },[])
    return auth ?(
        <>
            <Header burgerItems = {burgerItems} menuItems = {menuItems} />

               <div style={{width:'80%',margin:"auto"}}><ShopContent /></div> 
            <Footer />
            
        </>
    ):(
        <>
            <Header menuItems = {[]} burgerItems={[]}/>
                <div className={s.fail__content}>{t(errorStatus)}</div>
            <Footer />
        </>
    )
}
export default Shop;