import React from "react";
import s from "./Comment.module.css";
import FormButton from "../FormButtons/FormButton";

const CommentRow = () =>{
    return(
        <tr className={s.categories__tr}>
            <td className={s.comment__td__row}>1</td>
            <td className={s.comment__td__row}>Картинка</td>
            <td className={`${s.comment__td__row} ${s.comment__td__centre}`}>Комментарий</td>
            <td className={`${s.comment__td__row} ${s.comment__td__centre}`}>Товар</td>
            <td className={s.comment__td__row}>12.12.2022</td>
            <FormButton />
        </tr>
    )
}
export default CommentRow