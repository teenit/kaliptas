import React from "react";
import { useState } from "react";
import s from './CatCreateTreeHTML.module.css';
import imgArrow from './../../../../../../img/collapse-arrow-50.png'
const CatCreateTreeHTML = ({data,addCategory}) => {
    const [stateCat, setStateCat] = useState({})
    return (
        <ul>
            {   
                data.map((n)=>{
                    return(
                        <li data-id={['cat'+n.id]} 
                            className={`${s.cat__list} ${stateCat['cat'+n.id] ? s.active: ''} ${'cat'+n.id}`} 
                            key={n.id} >
                            <p className={s.p__list} >
                                <span className={s.plus} onClick={()=>addCategory({parent_id:n.parent_id,catID:n.id,category:n.category})}>
                                    <span>+</span>
                                </span>
                                <span>{n.category.title.en}</span> 
                                <img className={`${s.img__arrow} 
                                     ${stateCat['cat'+n.id] ? s.active: ''}`} 
                                     src={imgArrow} alt="" 
                                     onClick={(e)=>{
                                     setStateCat({...stateCat,['cat'+n.id]:!stateCat['cat'+n.id]})
                                }} />
                            </p>
                            {n.children.length > 0 ? <CatCreateTreeHTML addCategory = {(arg)=>addCategory(arg)} data = {n.children} /> : <hr />}
                        </li>
                    )  
                })
            }
        </ul>
    )
}

export default CatCreateTreeHTML;