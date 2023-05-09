import React from "react";
import s from './ProductRegister.module.css'
import { useState } from "react";
const ProductGetCats = ({cats,addCat,addState})=>{
    const [state,setState] = useState({
        lng:localStorage.getItem('LNG').toLowerCase()
    })
    return(
        <div className={s.cat__wrap}>
            {
                cats.map((item,index)=>{
                    return(
                        <div key={item.id} className={`${s.cat__item} ${item.good ? s.cat__category__good : ''}`}>
                            <label htmlFor={`catList${item.id}`}>
                                <input checked = {item.checked} value={item.id} type="checkbox" id={`catList${item.id}`} onChange={(e)=>{
                                   // cats[index].checked = e.target.checked;
                                   addCat(index,e.target.checked);
                                   addState();
                                }} />
                                <span>{item.category.title[state.lng]}</span>
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductGetCats;