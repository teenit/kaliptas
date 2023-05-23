import React, { useState } from "react";
import RestoreForm from "./RestoreForm";
import s from "./style.module.css";
import LoginAuth from "./LoginAuth";
import RegisterBuyer from "../RegisterBuyer/RegisterBuyer";
import LoginForm from "./LoginForm";

const Auth = ()=>{
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
                            <p>Забыли пароль - <span className={s.too} onClick={resIn}>Восстановить</span></p>
                            <p>Еше нет аккаунта - <span className={s.too} onClick={regIn}>Зарегистрироваться</span></p>
                       </div> 
                    :null}
                    {
                        state.register ?
                        <div>
                            <p>Забыли пароль - <span className={s.too} onClick={resIn}>Восстановить</span></p>
                            <p>Есть аккаунт - <span className={s.too} onClick={logIn}>Авторизоваться</span></p> 
                        </div> 
                        : null
                    }
                    {
                        state.restore ?
                        <div>
                            
                            <p>Есть аккаунт - <span className={s.too} onClick={logIn}>Авторизоваться</span></p> 
                            <p>Еше нет аккаунта - <span className={s.too} onClick={regIn}>Зарегистрироваться</span></p>
                        </div> 
                        : null
                    }
                    
                </div>    
            </div> 
        </div>
    )
}
export {Auth}