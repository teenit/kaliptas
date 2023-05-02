import React from "react";
import s from './FrontProductFloat.module.css'
const FrontProductFloat = ()=>{
 return(
    <div className={s.wrap}>
      <div className={s.content}>
         <div className={s.photo}></div>
         <div className={s.bottom}>
         <h3>Подушка "Miniso" Супер кот</h3>
         <div className={s.avaible}>в наличии</div>
         <div className={s.panel}>
            <h3>599грн</h3>
            <div className={s.icons}>
            <div className={s.icon}></div>
            <div className={s.icon}></div>
            </div>
         </div>
         <button className={s.buy__button}>Купить</button>
         </div>


      </div>
    </div>
 )
}
export default FrontProductFloat
