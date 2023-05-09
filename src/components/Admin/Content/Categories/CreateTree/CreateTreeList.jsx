import React from "react";
import { useState } from "react";
import s from './CreateTreeHTML.module.css';
import imgArrow from './../../../../../img/collapse-arrow-50.png'
const CreateTreeList = ({data,setState,lng}) => {
    const [stateCat, setStateCat] = useState({})
    return (
        <ul className={s.ul__list}>
            {data.map((n)=>{
                console.log(n)
                return(
                    <li data-id={['cat'+n.id]} className={``} key={n.id} >
                        <label htmlFor={['cat'+n.id]}>
                            <input type="radio" name="catRadio" id={['cat'+n.id]} 
                                onChange={()=>{setState(n.id)}}/>
                           
                            <span>{n.category.title[lng]}</span>
                            
                        </label>
                        {n.children.length > 0 ? <CreateTreeList setState = {(arg)=>setState(arg)} lng={lng} data = {n.children} /> : ''}
                    </li>
                )  
            })
            }
        </ul>
    )
}

export default CreateTreeList;