import React, { useEffect, useState } from "react";
import { Auth } from "../Auth/Auth";
import { useAuth } from "../functions/useAuth";
import s from "./Admin.module.css";
import Content from "./Content/Content";
import Header from "./Header/Header";
import { Navigation } from "./Navigation/Navigation";
import { Footer } from "./Footer/Footer";

const Admin = () =>{
    const[show, setShow] = useState(false);
    const [auth, setAuth]= useState( false);
    useAuth((arg)=>{setAuth(arg)})
    return auth ? (
        <div className={s.wrap}>
            <div className={s.header}>
                <Header />
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
       <div className={s.wrap__auth}>
            <Auth />
       </div>
    )
}


export default Admin;