import React, { useEffect, useState } from "react";
import s from "./Admin.module.css";
import Content from "./Content/Content";
import Header from './../General/Header/Header';
import { Navigation } from "./Navigation/Navigation";
import Footer from "../Footer/Footer";
import { apiResponse } from "../functions/api";
import { t } from "i18next";

const Admin = () =>{
    
    const menuItems =[{
        link:'',
        title:"main"
    },{
        link:'orders',
        title:"orders"
    },{
        link:'shops',
        title:"shops"
    },{
        link:'moderation',
        title:"moderation"
    },{
        link:'communication',
        title:"communication"
    },{
        link:'advertising',
        title:"advertising"
    },]
    const burgerItems = [
        {
            link:'users',
            title:"users"
        },{
            link:'categories',
            title:"categories"
        },
    ];
    const[show, setShow] = useState(false);
    const [auth, setAuth]= useState( false);
    const [errorStatus,setErrorStatus] = useState("loading")
    useEffect(()=>{
       
        apiResponse({},"user/check-auth-admin.php").then((e)=>{
            setAuth(true)
            
        }).catch((err)=>setErrorStatus(err.response.status))
    },[])
    return auth ? (
        <div className={s.wrap}>
            <div className={s.header}>
                <Header burgerItems = {burgerItems} menuItems = {menuItems}/>
                
            </div>
            <div className={s.inner}>
                <div className={s.navigation}>
                    <Navigation show = {()=>{setShow(!show)}}/>
                </div>
                <div className={s.content}>
                    <Content />
                </div>
            </div>
            <div className={s.footer}>
                <Footer />
            </div>
        </div>
    ): (
        <>
        <Header burgerItems = {[]} menuItems = {[]}/>
        <div className={s.wrap__auth}>
            {t(errorStatus)}
           
       </div>
       <Footer />
        </>
       
    )
}


export default Admin;