import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../Store/Slices/userSlice";
import { api } from "../functions/api";
import s from "./style.module.css"
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";

const LoginFormCode = ({email})=>{
    const {t} = useTranslation()
    const [state, setState] = useState({
        email: email,
        secretCode: ""
    })
    const dispatch = useDispatch()
    function sendForm(event){
        event.preventDefault();
        if(state.secretCode.length !== 6){
            return 
        }
        api((arg)=>{
            alert(t(arg.message))
            localStorage.setItem('token', arg.token);
            localStorage.setItem('email', arg.email);
            dispatch(setUser({
                token:arg.token,
                email:arg.email
            }))
            window.location.reload();
        }, state, "user/enter-code.php")
    }

    return(
        <form onSubmit={sendForm} className={s.form}>
            <div className={s.inp__div}>
                <label htmlFor="">{t('login-form-code-capcha')}</label>
                <input className={s.inp__div__inp} required value={state.secretCode} type="text" onChange={(event)=>{setState({...state, secretCode: event.target.value})}}/>
            </div>
            <div className={s.inp__div}>
                <Button onClick={sendForm} className="btn" variant="contained" endIcon={<Send/>}>{t('Enter')}</Button>
            </div>
        </form>
    )
}
export {LoginFormCode};