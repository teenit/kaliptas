import React from "react";
import s from "./Moderation.module.css";
import prodImg from "./../../../../img/admin/icons8-product-48.png";
import prodImgSec from "./../../../../img/admin/icons8-product-482.png"
import categImg from "./../../../../img/admin/icons8-folder-48.png";
import categImgSec from "./../../../../img/admin/icons8-folder-482.png";
import comImg from "./../../../../img/admin/icons8-comments-48.png";
import comImgSec from "./../../../../img/admin/icons8-comments-482.png"
import { useState } from "react";
import Categories from "./Categories/Categories";
import Comment from "./Comment/Comment";
import Products from "./Products/Products";


const Moderation = () =>{
    const [state, setState] = useState({
        showProduct: true,
        showComment: false,
        showCategories: false
    })


     return(
        <div className={s.wrap}>
            <div className={s.in}>

                <div className={state.showProduct ? s.item__change : s.item} onClick={()=>{
                    setState({...state, 
                        showProduct: true, 
                        showComment:false,
                        showCategories:false
                    })
                }}>
                    {!state.showProduct ?  <img className={s.item__image} src={prodImg} alt="Продукция" /> :  <img className={s.item__image} src={prodImgSec} alt="" />}
                </div>

                <div className={state.showCategories ? s.item__change : s.item} onClick={()=>{
                    setState({...state, 
                        showCategories: true,
                        showComment:false,
                        showProduct: false
                    })
                }}>
                    {state.showCategories ?  <img className={s.item__image} src={categImg} alt="Категории" /> :  <img className={s.item__image} src={categImgSec} alt="" />}
                </div>
                

                <div className={state.showComment ? s.item__change : s.item} onClick={()=>{
                    setState({...state, 
                        showCategories: false,
                        showComment: true,
                        showProduct: false
                    })
                }}>
                    {!state.showComment ?  <img className={s.item__image} src={comImg} alt="Комментарии" /> :  <img className={s.item__image} src={comImgSec} alt="" />}
                </div>

            </div>
            <div className={s.content}>
                {state.showCategories ? <Categories /> : null}
                {state.showComment ?  <Comment /> : null}
                {state.showProduct ? <Products /> : null}
            </div>
        </div>
    )
}
export default Moderation