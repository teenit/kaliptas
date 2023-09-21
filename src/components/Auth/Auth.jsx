import React, { useState } from "react";
import RestoreForm from "./RestoreForm";
import s from "./style.module.css";
import LoginAuth from "./LoginAuth";
import RegisterBuyer from "../RegisterBuyer/RegisterBuyer";
import LoginForm from "./LoginForm";
import { useTranslation } from "react-i18next";

const Auth = ()=>{
    const {t} = useTranslation()
    const [state, setState] = useState({
        login: true,
        register:false,
        restore:false
    })
    const logIn = ()=>setState({
        login: true,
        register:false,
        restore:false})
    const regIn = ()=>setState({
        login: false,
        register:true,
        restore:false})
    const resIn = ()=>setState({
        login: false,
        register:false,
        restore:true})

    return(
        <div className={s.wrap}>
            <div className={s.inner}>
                <div className={s.inner__in}>
                    {
                        state.login ? <LoginAuth />: null
                    }
                    {
                        state.restore ? <RestoreForm />: null
                    }
                    {
                        state.register ? <RegisterBuyer />: null
                    }
                    <div className={s.restore}>
                        {   state.login ?
                        <div>
                                <p>{t('auth-forgot-pass')} - <span className={s.too} onClick={resIn}>{t('auth-remake-pass')}</span></p>
                                <p>{t('auth-no-acc')} - <span className={s.too} onClick={regIn}>{t('auth-register')}</span></p>
                        </div> 
                        :null}
                        {
                            state.register ?
                            <div>
                                <p>{t('auth-forgot-pass')} - <span className={s.too} onClick={resIn}>{t('auth-remake-pass')}</span></p>
                                <p>{t('auth-have-acc')} - <span className={s.too} onClick={logIn}>{t('auth-auth')}</span></p> 
                            </div> 
                            : null
                        }
                        {
                            state.restore ?
                            <div>
                                
                                <p>{t('auth-have-acc')} - <span className={s.too} onClick={logIn}>{t('auth-auth')}</span></p> 
                                <p>{t('auth-no-acc')} - <span className={s.too} onClick={regIn}>{t('auth-register')}</span></p>
                            </div> 
                            : null
                        }

                    </div>  
                </div>  
            </div> 
        </div>
    )
}
export {Auth}