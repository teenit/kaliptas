import React, { useEffect } from "react";
import s from "./ProductCard.module.css";
import { useState } from "react";
import heartImg from "../../../../../../img/front/icons8-heart-64.png";
import heartImgSec from "../../../../../../img/front/icons8-heart-642.png";
import star from "../../../../../../img/front/Многоугольник 1 копия 3.png";
import starDop from "../../../../../../img/front/Многоугольник 1 копия 4.png";
import {api} from "../../../../../functions/api";
import {ProductObject} from "../../../FrontProduct/ProductObject";
import {Link} from "react-router-dom";
import {buy, decrementById, getCountById, incrementById} from "../../../../../functions/cartControll";
import cartMinus from "../../../../../../img/front/cartMinus.png";
import cartPlus from "../../../../../../img/front/cartPlus.png";
import {getLanguageForRootLink, getRealLanguage} from "../../../../../functions/getLanguage";

const ProductCard = ({ id }) => {
    const [liked, setLiked] = useState({
        like: localStorage.getItem("like" + id),
    });
    const [ready, setReady] = useState(false);
    const [product, setProduct] = useState({});
    const [countInCart, setCountInCart] = useState(0);

    useEffect(()=>{
        api((response)=>{
            let loadedProduct = new ProductObject(response, getRealLanguage());
            setProduct(loadedProduct);
            setCountInCart(getCountById(id))
            setReady(true)
        }, {
            productID: id
        }, "content/products/get-product-by-id.php")

        setInterval(()=>{
            setLiked({
                like: localStorage.getItem("like" + id),
            })
            setCountInCart(getCountById(id));
        }, 1000);
    },[id])

    return ready ? (
        <div className={s.in}>
            <div className={s.in__dop}>
                <div className={s.section__img}>
                    <Link className={s.img__link} to={getLanguageForRootLink() + "/product/" + product.getLink()}>
                        <img className={s.main__image} src={product.mainPhoto} alt={product.title} />
                    </Link>
                </div>
                <div className={s.section}>
                    <Link className={s.title__link} to={getLanguageForRootLink() + "/product/" + product.getLink()}>
                        <h4 className={s.title}>{product.title}</h4>
                    </Link>
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
                            0 отзывов
                        </a>
                    </div>
                </div>
                <div className={`${s.section} ${s.section__dop}`}>
                    <div className={s.price__wrap}>
                        {product.isDiscountPresent() ?  <div className={s.not__price}>
                            <div className={s.line}></div>
                            <p className={s.price}>{product.price}$</p>
                        </div> : null}
                        <p className={s.price__dop}>{product.getPriceWithDiscount()}$</p>
                    </div>
                </div>
                
                <div className={`${s.section} ${s.section__dop}`}>
                    {
                        product.inStock ? (countInCart > 0
                            ? (<div className={s.amount}>
                                    <div className={s.minus}>
                                        <img src={cartMinus} alt="Минус" onClick={()=>{
                                            decrementById(id);
                                            setCountInCart(getCountById(id));
                                        }}/>
                                    </div>
                                    <div className={s.amount__in}>
                                        <p>{countInCart}</p>
                                    </div>
                                    <div className={s.plus}>
                                        <img src={cartPlus} alt="Плюс" onClick={()=>{
                                            incrementById(id);
                                            setCountInCart(getCountById(id));
                                        }}/>
                                    </div>
                                </div>)
                            :
                                (<div className={s.buy} onClick={(event)=>{
                                    buy(id);
                                    setCountInCart(1);
                                }}>Купить</div>))
                            : <div className={`${s.buy} ${s.inactive}`}>Купить</div>
                    }

                    <div className={s.add__to}>
                        {liked.like == "true" ? (
                            <img
                                className={s.heart__img}
                                src={heartImgSec}
                                alt="Зарисованое"
                                onClick={() => {
                                    localStorage.setItem(`like${id}`, false);
                                    setLiked({ like: false });
                                }}
                            />
                        ) : (
                            <img
                                className={s.heart__img}
                                src={heartImg}
                                alt="Не зарисованое"
                                onClick={() => {
                                    localStorage.setItem(`like${id}`, true);
                                    setLiked({ like: "true" });
                                }}
                            />
                        )}
                    </div>
                </div>
                <div className={s.in__stock}>
                    {
                        product.inStock ? <p className={s.in__stock__yep}>Есть в наличии</p> : <p className={s.in__stock__nop}>Нет в наличии</p>
                    }
                </div>
            </div>
        </div>
    ) : null;
};
export default ProductCard;
