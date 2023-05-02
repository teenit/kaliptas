import React from "react";
import s from "./Categories.module.css";
import FormButton from "../FormButtons/FormButton";

const CategoriesRow = () =>{
    return(
        <tr className={s.categories__tr}>
            <td className={s.categories__td__row}>Баскетбольные мячи</td>
            <td className={s.categories__td__row}>Спорт</td>
            <td className={s.categories__td__row}>На лету</td>
            <FormButton />
        </tr>
    )
}
export default CategoriesRow