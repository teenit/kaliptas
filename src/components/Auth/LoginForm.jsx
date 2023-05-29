import React, {useState} from "react";
import { api } from "../functions/api";
import s from "./style.module.css";

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

    return(        
        <form onSubmit={sendForm} className={s.form}>
            <div className={s.inp__div}>
                <label htmlFor="">E-mail</label>
                <input className={`${state.answerServer ? s.inp__div__inp : s.inp__div__inp__err}`} required value={state.email} type="email" onChange={(event)=>{setState({...state, email: event.target.value})}}/>
            </div>
            <div className={s.inp__div}>
                <label htmlFor="">Пароль</label>
                <input className={`${state.answerServer ? s.inp__div__inp : s.inp__div__inp__err}`} required value={state.pass} type="password" onChange={(event)=>{setState({...state, pass: event.target.value})}}/>
            </div>
            <div className={s.inp__div}>
                <label htmlFor="">Введите ответ на пример</label>
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
                <button>Войти</button>
            </div>
        </form>
    )
}
export default LoginForm;