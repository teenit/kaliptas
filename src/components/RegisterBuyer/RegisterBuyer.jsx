import React, { useState } from "react";
import { api } from "../functions/api";
import s from "./RegisterBuyer.module.css"
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import eyeIcon from "../../img/icons/icons8-eye-24.png"

const RegisterBuyer = () =>{
    const {t} = useTranslation()
    const [state, setState] = useState({
        userName : "",
        name: "",
        surname: "",
        fathersName: "",
        phone: "",
        email: "",
        pass: "",
        checkPass: "",
        happy: "",
        userData: {
            test: "test hak"
        }
    })
    const [inputPassState, setInputPassState] = useState({
        firstPasswordType: "password",
        secondPasswordType: "password"
    })

    function sendForm(event){
       
        event.preventDefault();
        api((arg)=>{
            alert(t(arg.message))
           // window.location.reload()
        },{
            ...state, 
            userName: `${state.surname} ${state.name} ${state.fathersName}`.trim(),
            userData: {
                name: state.name,
                surname: state.surname,
                fathersName: state.fathersName
            }
        }, "user/register.php")
    }


    return(
        <div className={s.page}>
            <div className={s.wrap}>
            <h2 className={s.title}>{t('register-buyer-register')}</h2>
            <form  onSubmit={sendForm} className={s.form} action="">
                <div className={s.inp__div}>
                    <label htmlFor="">{t('register-buyer-name')}</label>
                    <input required value={state.name} type="text" onChange={(event)=>{setState({...state, name: event.target.value})}}/>
                </div>
                <div className={s.inp__div}>
                    <label htmlFor="">{t('register-buyer-surname')}</label>
                    <input required value={state.surname} type="text" onChange={(event)=>{setState({...state, surname: event.target.value})}}/>
                </div>
                <div className={s.inp__div}>
                    <label htmlFor="">{t('register-buyer-fathersname')}</label>
                    <input value={state.fathersName} type="text" onChange={(event)=>{setState({...state, fathersName: event.target.value})}}/>
                </div>
                <div className={s.inp__div}>
                    <label htmlFor="">{t('register-buyer-phone')}</label>
                    <input required value={state.phone} type="number" onChange={(event)=>{setState({...state, phone: event.target.value})}}/>
                </div>
                <div className={s.inp__div}>
                    <label htmlFor="">Е-mail</label>
                    <input required value={state.email} type="email" onChange={(event)=>{setState({...state, email: event.target.value})}}/>
                </div>
                <div className={s.inp__div}>
                    <label htmlFor="">{t('register-buyer-date')}</label>
                    <input required value={state.happy} type="date" onChange={(event)=>{setState({...state, happy: event.target.value})}}/>
                </div>
                <div className={s.inp__div}>
                    <label htmlFor="">{t('register-buyer-pass')}</label>
                    <div className={s.input__eye__wrap}>
                        <input required value={state.pass} type={inputPassState.firstPasswordType} onChange={(event)=>{setState({...state, pass: event.target.value})}}/>
                        <div className={s.input__eye} onClick={()=>{
                            if(inputPassState.firstPasswordType === "password") setInputPassState({...inputPassState, firstPasswordType: "text"})
                            else setInputPassState({...inputPassState, firstPasswordType: "password"})
                        }}>
                            <img src={eyeIcon} alt="Глазик" />
                        </div>
                    </div>
                </div>
                <div className={s.inp__div}>
                    <label htmlFor="">{t('register-buyer-more-pass')}</label>
                    <div className={s.input__eye__wrap}>
                        <input required value={state.checkPass} type={inputPassState.secondPasswordType} onChange={(event)=>{setState({...state, checkPass: event.target.value})}}/>
                        <div className={s.input__eye} onClick={()=>{
                            if(inputPassState.secondPasswordType === "password") setInputPassState({...inputPassState, secondPasswordType: "text"})
                            else setInputPassState({...inputPassState, secondPasswordType: "password"})
                        }}>
                            <img src={eyeIcon} alt="Глазик" />
                        </div>
                    </div>
                </div>
                <div className={s.inp__div}>
                    <Button className="btn" onClick={sendForm} variant="contained" endIcon={<Send/>}>{t('auth-register')}</Button>
                    
                </div>
            </form>
        </div>
        </div>
    )
}
export default RegisterBuyer