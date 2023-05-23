import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../Store/Slices/userSlice";
import { api } from "../functions/api";
import s from "./style.module.css"
import { useTranslation } from "react-i18next";

const LoginFormCode = ({email})=>{
    const {t} = useTranslation()
    const [state, setState] = useState({
        email: email,
        secretCode: ""
    })
    const dispatch = useDispatch()
    function sendForm(event){
        event.preventDefault();
        console.log(state);
        if(state.secretCode.length !== 6){
            return console.log("Error")
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
                <label htmlFor="">Код с почты</label>
                <input className={s.inp__div__inp} required value={state.secretCode} type="text" onChange={(event)=>{setState({...state, secretCode: event.target.value})}}/>
            </div>
            <div className={s.inp__div}>
                <button>Войти</button>
            </div>
        </form>
    )
}
export {LoginFormCode};