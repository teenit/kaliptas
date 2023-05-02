import React from "react";
import { useState } from "react";
import s from './CreateTreeHTML.module.css';
import imgArrow from './../../../../../img/collapse-arrow-50.png'
const CatCreateTreeList = ({data,setState}) => {
    const [stateCat, setStateCat] = useState({})
    return (
        <ul className={s.ul__list}>
            {   
                data.map((n)=>{
                    return(
                        <li data-id={['cat'+n.id]} className={``} key={n.id} >
                            <label htmlFor={['cat'+n.id]}>
                                <input type="radio" name="catRadio" id={['cat'+n.id]} 
                                    onChange={()=>{setState(n.id)}}
                                />
                                <span>{n.category.title.en}</span>
                            </label>
                            
                            {n.children.length > 0 ? <CatCreateTreeList setState = {(arg)=>setState(arg)} data = {n.children} /> : ''}
                        </li>
                    )  
                })
            }
        </ul>
    )
}

export default CatCreateTreeList;