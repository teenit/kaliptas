import React, {useState} from "react";
import { api } from "../functions/api";
import LoginForm from "./LoginForm";
import { LoginFormCode } from "./LoginFormCode";
import s from "./style.module.css";
import { t } from "i18next";

const LoginAuth = ()=>{ 
    const [emailCode, setEmailCode] = useState(false)
    const [state, setState] = useState({
        email:"",
        pass:"",
        capcha:"",
        secretCode:"",
        generateCapcha:"",
        answerClass: s.inp__capcha__input,
        answerServer: true, 
        answer:"",
        num1: Math.floor(Math.random() * 30),
        num2: Math.floor(Math.random() * 30)
    })   

    function checkAnswer(){
        if (state.answer == state.num1 + state.num2) {
            return true;
        }else{
            setState({...state, answerClass: s.inp__capcha__input__err})
            setEmailCode(false);
            return false;
        }
    }

    function errorEmailOrPass(){
        window.alert(t('error'))
        setState({
            ...state,
            num1: Math.floor(Math.random() * 30),
            num2: Math.floor(Math.random() * 30),
            answer: "",
            answerServer: false,
            answerClass: s.inp__capcha__input,
        })
    }

    return(
        <div className={s.page}>
            <div className={s.wrap}>
                <h2 className={s.title}>Авторизация</h2>
                <div className={s.form__inner}>
                    {!emailCode ? <LoginForm 
                        errorEmailOrPass = {errorEmailOrPass} 
                        checkAnswer = {checkAnswer}
                        state = {state}
                        setState = {(arg)=>{
                            setState(arg)
                        }}
                        setEmailCode = {(arg)=>{
                            setEmailCode(arg)
                        }}/> : <LoginFormCode email = {state.email}/>}
                </div>
            </div>
        </div>
    )
}
export default LoginAuth;