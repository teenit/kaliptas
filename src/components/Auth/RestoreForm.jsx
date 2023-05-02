import React from "react";
import s from "./style.module.css";

const RestoreForm = ()=>{
    return(
        <div className={s.page}>
            <div className={s.wrap}>
                <h2 className={s.title}>Восстановление</h2>
                <div className={s.form__inner}>
                    <form  className={s.form}>
                        <div className={s.inp__div}>
                            <label htmlFor="">E-mail</label>
                            <input required type="email" />
                        </div>
                        <div className={s.inp__div}>
                            <label htmlFor="">Пароль</label>
                            <input required type="password" />
                        </div>
                        <div className={s.inp__div}>
                            <label htmlFor="">Введите код авторизации (пришел на почту)</label>
                            <input required type="number"/>
                        </div>
                        <div className={s.inp__div}>
                            <button>Восстановить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default RestoreForm