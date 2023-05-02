import React from "react";
import { useState } from "react";
import s from './CreateTreeHTML.module.css';
import imgArrow from './../../../../../img/collapse-arrow-50.png'
const CreateTreeHTML = ({data}) => {
    const [stateCat, setStateCat] = useState({})
    return (
        <ul>
            {   
                data.map((n)=>{
                    return(
                        <li data-id={['cat'+n.id]} className={`${s.cat__list} ${stateCat['cat'+n.id] ? s.active: ''} ${'cat'+n.id}`} key={n.id} >
                            <p className={s.p__list} onClick={(e)=>{
                                setStateCat({...stateCat,['cat'+n.id]:!stateCat['cat'+n.id]})
                                }}><span>{n.category.title.en}</span> <img className={`${s.img__arrow} ${stateCat['cat'+n.id] ? s.active: ''}`} src={imgArrow} alt="" /></p>
                            {n.children.length > 0 ? <CreateTreeHTML data = {n.children} /> : <hr />}
                        </li>
                    )  
                })
            }
        </ul>
    )
}

export default CreateTreeHTML;