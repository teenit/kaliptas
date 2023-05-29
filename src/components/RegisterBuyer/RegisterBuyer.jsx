import React, { useState } from "react";
import { api } from "../functions/api";
import s from "./RegisterBuyer.module.css"
import { useTranslation } from "react-i18next";


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


    function sendForm(event){
        event.preventDefault();
        
        api((arg)=>{
            alert(t(arg.message))
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
            <h2 className={s.title}>Регистрация</h2>
            <form  onSubmit={sendForm} className={s.form} action="">
                <div className={s.inp__div}>
                    <label htmlFor="">Имя</label>
                    <input required value={state.name} type="text" onChange={(event)=>{setState({...state, name: event.target.value})}}/>
                </div>
                <div className={s.inp__div}>
                    <label htmlFor="">Фамилия</label>
                    <input required value={state.surname} type="text" onChange={(event)=>{setState({...state, surname: event.target.value})}}/>
                </div>
                <div className={s.inp__div}>
                    <label htmlFor="">Отчество</label>
                    <input value={state.fathersName} type="text" onChange={(event)=>{setState({...state, fathersName: event.target.value})}}/>
                </div>
                <div className={s.inp__div}>
                    <label htmlFor="">Телефон</label>
                    <input required value={state.phone} type="number" onChange={(event)=>{setState({...state, phone: event.target.value})}}/>
                </div>
                <div className={s.inp__div}>
                    <label htmlFor="">Е-mail</label>
                    <input required value={state.email} type="email" onChange={(event)=>{setState({...state, email: event.target.value})}}/>
                </div>
                <div className={s.inp__div}>
                    <label htmlFor="">Дата рождения</label>
                    <input required value={state.happy} type="date" onChange={(event)=>{setState({...state, happy: event.target.value})}}/>
                </div>
                <div className={s.inp__div}>
                    <label htmlFor="">Пароль</label>
                    <input required value={state.pass} type="password" onChange={(event)=>{setState({...state, pass: event.target.value})}}/>
                </div>
                <div className={s.inp__div}>
                    <label htmlFor="">Повторите пароль</label>
                    <input required value={state.checkPass} type="password" onChange={(event)=>{setState({...state, checkPass: event.target.value})}}/>
                </div>
                <div className={s.inp__div}>
                    <button>Регистрация</button>
                </div>
            </form>
        </div>
        </div>
    )
}
export default RegisterBuyer