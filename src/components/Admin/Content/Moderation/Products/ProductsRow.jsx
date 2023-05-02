import React from "react";
import s from "./Products.module.css";
import FormButton from "../FormButtons/FormButton";

const ProductsRow = () =>{
    return(
        <tr className={s.products__tr}>
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td}>1</span></td>
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td}>Картинка</span></td>
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td}>Название</span></td>
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td}>Направление</span></td>
            <td className={`${s.products__td} ${s.product__td__row}`}><span className={s.span__td}>Магазин</span></td>
            <FormButton />
        </tr>
    )
}
export default ProductsRow