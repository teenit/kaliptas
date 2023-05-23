import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import ShopHome from "./ShopHome/ShopHome";
import ShopCategories from "./ShopCategories/ShopCategories";
import ShopProducts from "./ShopProducts/ShopProducts";
import ShopSupport from "./ShopSupport/ShopSupport";
import ShopStatistics from "./ShopStatistics/ShopStatistics";
import { api, apiResponse } from "../../functions/api";
import { useState } from "react";
import { useEffect } from "react";
import s from './../shop.module.css'
import Default404 from "../../General/404/Default404";
import { t } from "i18next";
const ShopContent = ()=>{
    const link = useParams()
    const [shop,setShop] = useState({load:false});
    const [errorStatus,setErrorStatus] = useState('loading')
    useEffect(()=>{
        apiResponse({slug:link.link},"manage/shop/get-shop.php").then((e)=>{
            setShop({...shop,load:true,...e})
        }).catch((err)=>setErrorStatus(err.response.status))


        // api((arg)=>{
        //     console.log(arg)
        //     if(arg?.id){
        //         setShop({...shop,load:true,...arg})
        //     }
        // },{slug:link.link},"manage/shop/get-shop.php");
        
    },[])
   

    return shop.load ? (
        <div className={s.min__height50}>
            <Routes>
                <Route path="/" element={<ShopHome shop={shop} link={link.link} />}/>
                <Route path="categories" element={<ShopCategories shop={shop} link={link.link} />}/>
                <Route path="statistics" element={<ShopStatistics shop={shop} link={link.link} />}/>
                <Route path="products" element={<ShopProducts shop={shop} link={link.link} />}/>
                <Route path="support" element={<ShopSupport shop={shop} link={link.link} />}/>
                <Route path="/*" element={<Default404/>}/>
            </Routes>
            
        </div>
    ):<div className={s.fail__content}>{t(errorStatus)}</div>
}

export default ShopContent