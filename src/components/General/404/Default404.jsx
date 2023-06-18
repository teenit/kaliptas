import React from "react";
import s from './style.module.css';
import { NavLink } from "react-router-dom";
const Default404 = ()=>{
    return(
        <div className={s.wrap}>
           <div> <h1>
                404
            </h1>
            <p>
                Перейти в <NavLink to = {"/catalog"}>каталог</NavLink>
            </p>
            </div>
        </div>
    )
    
}
export default Default404;