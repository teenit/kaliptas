import React, { useState } from "react";
import s from "./ViewedProductCard.module.css"
import heartImg from "../../../../../../img/front/icons8-heart-64.png";
import heartImgSec from "../../../../../../img/front/icons8-heart-642.png";
import mainImg from "../../../../../../img/front/Слой 1208.png";
import star from "../../../../../../img/front/Многоугольник 1 копия 3.png";
import starDop from "../../../../../../img/front/Многоугольник 1 копия 4.png";

const ViewedProductCard = ({item})=>{
    const [liked, setLiked] = useState({
        like: localStorage.getItem("like" + item.id),
    });
    return(
        <div className={s.in}>
            <div className={s.in__dop}>
                <div className={s.section__img}>
                    <a className={s.img__link} href="#">
                        <img className={s.main__image} src={mainImg} alt={item.imgAlt} />
                    </a>
                </div>
                <div className={s.section}>
                    <a className={s.title__link} href="#">
                        <h4 className={s.title}>{item.title}</h4>
                    </a>
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
                        <a className={s.review__link} href="#">
                            {item.reviews} отзывов
                        </a>
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
                        {liked.like == "true" ? (
                            <img
                                className={s.heart__img}
                                src={heartImgSec}
                                alt="Зарисованое"
                                onClick={() => {
                                    localStorage.setItem(`like${item.id}`, false);
                                    setLiked({ like: false });
                                }}
                            />
                        ) : (
                            <img
                                className={s.heart__img}
                                src={heartImg}
                                alt="Не зарисованое"
                                onClick={() => {
                                    localStorage.setItem(`like${item.id}`, true);
                                    setLiked({ like: "true" });
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewedProductCard