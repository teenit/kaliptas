import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";
import { Auth } from "../Auth/Auth";
import { Front } from "../Front/Front";
import RegisterBuyer from "../RegisterBuyer/RegisterBuyer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useState } from "react";
import Users from "../Admin/Content/Users/Users";

const MainRouter = ()=>{
    const {t,i18n} = useTranslation()
    let langPath = window.location.pathname
    langPath = langPath.slice(1,3);
    let langto = langPath !== 'en' && langPath !== 'ru' ? '' : langPath;


    useEffect(()=>{
        i18n.changeLanguage(langto == '' ? 'ge' : langto)
    },[])
    localStorage.setItem('lang', langto)
    localStorage.setItem('LNG', langto == '' ? 'GE' : langto.toUpperCase())
   
    return(
        <div className="kaliptas">
            <Routes>
                <Route path={`${langto}/*`} element={<Front />}/>
                <Route path={`${langto}/login`} element={<Auth />}/>
                <Route path={`${langto}/admin/*`} element={<Admin />} ></Route>
                <Route path={`${langto}/register`} element={<RegisterBuyer />}/>
            </Routes>
        </div>
    )
}
export default MainRouter;