import React from "react";
import s from "../Moderation.module.css"


const FormButton = () =>{
    return(
        <td className={s.td__btn}>
            <div className={s.close__btn}></div>  
            <div className={s.accept__btn}></div> 
        </td>
    )
}
export default FormButton