import React, {useState} from "react";
import { api } from "../functions/api";
import s from "./style.module.css";
import { Button } from "@mui/material";
import { t } from "i18next";
import { Send } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import eyeIcon from "../../img/icons/icons8-eye-24.png"

const LoginForm = ({errorEmailOrPass, checkAnswer, state, setState, setEmailCode})=>{ 
    function sendForm(event){
        event.preventDefault();
        checkAnswer();
        if(!checkAnswer()){
            return;
        }
        api((arg)=>{
            
            if(arg) setEmailCode(true);
            else errorEmailOrPass();
        }, state, "user/login.php")
    }    
    const [inputPassState, setInputPassState] = useState("password")
    const {t} = useTranslation()
    return(        
        <form onSubmit={sendForm} className={s.form}>
            <div className={s.inp__div}>
                <label htmlFor="">E-mail</label>
                <input className={`${state.answerServer ? s.inp__div__inp : s.inp__div__inp__err}`} required value={state.email} type="email" onChange={(event)=>{setState({...state, email: event.target.value})}}/>
            </div>
            <div className={s.inp__div}>
                <label htmlFor="">{t('login-form-pass')}</label>
                <div className={s.input__eye__wrap}>
                    <input className={`${state.answerServer ? s.inp__div__inp : s.inp__div__inp__err}`} required value={state.pass} type={inputPassState} onChange={(event)=>{setState({...state, pass: event.target.value})}}/>
                    <div className={s.input__eye} onClick={()=>{
                        if(inputPassState === "password") setInputPassState("text")
                        else setInputPassState("password")
                    }}>
                        <img src={eyeIcon} alt="Глазик" />
                    </div>
                </div>
            </div>
            <div className={s.inp__div}>
                <label htmlFor="">{t('login-form-capcha')}</label>
                <div className={s.inp__capcha}>
                    <div className={s.inp__capcha__number}>
                        <span className={s.inp__capcha__num}>{state.num1}</span>
                        <span className={s.inp__capcha__plus}> + </span>
                        <span className={s.inp__capcha__num}>{state.num2}</span>
                        <span className={s.inp__capcha__plus}> = </span>
                    </div>
                    <div className={state.answerClass}>
                        <input className={s.number} required value={state.answer} type="number" onChange={(event)=>{setState({...state, answer: event.target.value})}}/>
                    </div>
                </div>
            </div>
            <div className={s.inp__div}>
                <Button onClick={sendForm} className="btn" variant="contained" endIcon={<Send />}>{t('auth-auth')}</Button>
            </div>
        </form>
    )
}
export default LoginForm;