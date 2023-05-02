import React, { useState } from "react";
import RestoreForm from "./RestoreForm";
import s from "./style.module.css";
import LoginAuth from "./LoginAuth";

const Auth = ()=>{
    const [state, setState] = useState({
        login: true
    })
    function repair(arg){
        setState({...state, login: arg})
    }
    return(
        <div className={s.wrap}>
            <div className={s.inner}>
                {state.login ? <LoginAuth/> : <RestoreForm />}
                <div className={s.restore}>
                    {state.login ? <p>Забыли пароль - <span className={s.too} onClick={()=>{repair(false)}}>Восстановить</span></p>:
                    <p>Вспомнили пароль - <span className={s.too} onClick={()=>{repair(true)}}>Авторизоваться</span></p>}   
                </div>    
            </div> 
        </div>
    )
}
export {Auth}