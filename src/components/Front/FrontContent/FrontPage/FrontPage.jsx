import React from "react";
import s from './FrontPage.module.css';
import Adwords from "../../Modules/Adwords/Adwrods";
import Product from "../../FrontContent/FrontPage/Product/Product";

const FrontPage = ()=>{

    return(
        <div className={s.wrap}>
            <Adwords />
            <div className={s.in}>
                <h3 className={s.title}>Похожие товары</h3>
                <div className={s.product__in}>
                    <Product />
                </div>
                <h3 className={s.title}>Вы смотрели</h3>
            </div>
        </div>
    )
}

export default FrontPage