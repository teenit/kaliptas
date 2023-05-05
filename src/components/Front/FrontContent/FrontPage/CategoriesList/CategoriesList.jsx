import React from "react";
import s from "./CategoriesList.module.css"

const CategoriesList = ({categories}) =>{
    return(
        <div className={s.wrap}>
            {
                categories.map((item)=>{
                    return(
                        <div className={s.category}>{item.name}</div>
                    )
                })
            }
        </div>
    )
}
export default CategoriesList