import React, { useState } from "react";
import s from './Header.module.css'
import logo from './../../../img/logo.png'
const FrontHeader  =()=>{
    const[phone,setPhone] =  useState(false)
    const[city,setCity] = useState(false)
    return(
        <header className={s.wrap}>
            <div className={s.inner}>
                <div className={s.inner__left}>
                    <div className={s.logo}><a href="#"><img src={logo}  /></a></div>
                    <div tabIndex={0} onClick={()=>{
                        setCity(!city)
                    }}><p style={{cursor:"pointer"}}>Тбилиси</p>
                     {city ? <ul className={s.city}>
                                    <li>Город 1</li>
                                    <li>Город 1</li>
                                    <li>Город 1</li>
                                </ul>: null}
                    </div>
                    <div tabIndex={0} onClick={()=>{
                        setPhone(!phone)
                    }}><p style={{cursor:"pointer"}}><b>+995 066 666 66 66</b></p>
                     {phone ? <ul className={s.list}>
                                    <li>+995 066 666 66 66</li>
                                    <li>+995 066 666 66 66</li>
                                    <li>+995 066 666 66 66</li>
                                </ul>: null}
                    </div>
                    
                </div>
                <div className={s.inner__right}>
                    <p><a href="#">Оплата и доставка</a></p>
                    <div className={s.lang}>
                        <p tabIndex={0}>рус</p>
                        <div className={s.lang__line}></div>
                        <p tabIndex={0}>Груз</p>
                        <div className={s.lang__line}></div>
                        <p tabIndex={0}>Eng</p>
                    </div>
                </div>
            </div>      
            </header>
    )
}
export default FrontHeader