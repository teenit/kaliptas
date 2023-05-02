import React from "react";
import s from './Subheader.module.css'
import { NavLink } from "react-router-dom";
const FrontSubheader = ()=>{
    return(
        <div className={s.wrap}>
            <div className={s.inner}>
                <button className={s.button}>Каталог</button>
                <input type="text" placeholder="Поиск..." className={s.input}/>
                <div className={s.options}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}>
                        
                    </div>
                    <div className={s.icon}>
                        <NavLink to={'cart'}>O</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FrontSubheader;