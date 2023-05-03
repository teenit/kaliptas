import React, { useEffect } from "react";
import s from "./ProductCard.module.css"
import { useState } from "react";
import heartImg from "../../../../../../img/front/icons8-heart-64.png"
import heartImgSec from "../../../../../../img/front/icons8-heart-642.png"
import mainImg from "../../../../../../img/front/Слой 1095.png"
import star from "../../../../../../img/front/Многоугольник 1 копия 3.png"
import starDop from "../../../../../../img/front/Многоугольник 1 копия 4.png"



const ProductCard = ({cards}) =>{
    const [liked, setLiked] = useState({})
    function test(){
        let obj = {}
        let mas = cards.map((item)=>{
            obj[`like${item.id}`] = localStorage.getItem(`like${item.id}`)
            return{
                [`like${item.id}`]:localStorage.getItem(`like${item.id}`)
            }
        })
        setLiked(obj);
    }
    useEffect(()=>test(),[])

    return(
        <div className={s.wrap}>
            {
                cards.map((item, index)=>{ 
                    return(
                        <div className={s.in} key={index}>
                            <div className={s.in__dop}>
                                <div className={s.section__img}>
                                    <a className={s.img__link} href="#"><img className={s.main__image} src={mainImg} alt={item.imgAlt} /></a>
                                </div>
                                <div className={s.section}>
                                    <a className={s.title__link} href="#"><h4 className={s.title}>{item.title}</h4></a>
                                </div>
                                <div className={`${s.section} ${s.section__dop}`}>
                                    <div className={s.stars}>
                                        <img src={star} alt="Оценка" />
                                        <img src={star} alt="Оценка" />
                                        <img src={star} alt="Оценка" />
                                        <img src={star} alt="Оценка" />
                                        <img src={starDop} alt="Оценка" />
                                    </div>
                                    <div className={s.reviews}>
                                        <a className={s.review__link} href="#">{item.reviews} отзывов</a>
                                    </div>
                                </div>
                                <div className={`${s.section} ${s.section__dop}`}>
                                    <div className={s.price__wrap}>
                                        <div className={s.not__price}>
                                            <div className={s.line}></div>
                                            <p className={s.price}>{item.dopPrice}$</p>
                                        </div>
                                        <p className={s.price__dop}>{item.price}$</p>
                                    </div>
                                    <div className={s.add__to}>
                                        {liked[`like${item.id}`] == 'true' ? 
                                            <img className={s.heart__img} src={heartImgSec} alt="Зарисованое" onClick={()=>{
                                                localStorage.setItem(`like${item.id}`, false);
                                                setLiked({...liked,[`like${item.id}`]:false});
                                            }}/>
                                        :   
                                            <img className={s.heart__img} src={heartImg} alt="Не зарисованое" onClick={()=>{
                                                localStorage.setItem(`like${item.id}`, true);
                                                setLiked({...liked,[`like${item.id}`]:true});
                                            }}/>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductCard;
