import React, { useEffect, useState } from "react";
import s from './FrontProduct.module.css'
import {useLocation, useParams} from "react-router-dom";
import heartImg from "../../../../img/front/icons8-heart-64.png";
import heartImgSec from "../../../../img/front/icons8-heart-642.png";
import star from "./../../../../img/front/Многоугольник 1 копия 3.png"
import dopStar from "./../../../../img/front/Многоугольник 1 копия 4.png"
import okey from "./../../../../img/front/icons8-эмодзи-жест-ок-48.png"
import cart from "./../../../../img/front/icons8-корзина-64.png"
import ProductList from "../FrontPage/Product/ProductList";
import FrontSlide from "../../Modules/FrontSlider/FrontSlide/FrontSlide";
import { api, apiResponse } from "../../../functions/api";
import { ProductObject } from "./ProductObject";
import { getRealLanguage } from "../../../functions/getLanguage";
import { useTranslation } from "react-i18next";
import { buy, decrementById, getCountById, incrementById } from "../../../functions/cartControll"
import cartMinus from "../../../../img/front/cartMinus.png"
import cartPlus from "../../../../img/front/cartPlus.png"
import {getCurrencyTag} from "../../../functions/utils";
import {MenuItem, TextField} from "@mui/material";

const FrontProduct = () => {
    const { t } = useTranslation()
    const [liked, setLiked] = useState(false)
    const [ready, setReady] = useState(false)
    const [productObject, setProduct] = useState({});
    const params = useParams();
    const [productId, setId] = useState(ProductObject.getIdFromLink(params.id));
    const [prevInterval, setPrevInterval] = useState(-1);
    const [allPhotosMas, setAllPhotosMas] = useState([]);
    const [variableId, setVariableId] = useState(undefined);
    const [displayedPrice, setDisplayedPrice] = useState(0);
    const [displayedDiscountPrice, setDisplayedDiscountPrice] = useState(0)
    const location = useLocation();
    const [countInCart, setCountInCart] = useState(0);


    useEffect(() => {
        let localProductId = ProductObject.getIdFromLink(params.id);
        setId(localProductId)
        if (prevInterval !== -1) {
            clearInterval(prevInterval)
        }

        api((response) => {
            let loadedProduct = new ProductObject(response, getRealLanguage());
            setProduct(loadedProduct)
            setDisplayedPrice(loadedProduct.price)
            setDisplayedDiscountPrice(loadedProduct.discount)
            setImage(loadedProduct.mainPhoto)
            setCountInCart(getCountById(localProductId))
            setReady(true);
            setAllPhotosMas([loadedProduct.mainPhoto, ...loadedProduct.photos])

            if (loadedProduct.isVariable) {
                let varId = variableId;
                if (varId === undefined) {
                    varId = loadedProduct.getFirstVariableId();
                    setVariableId(varId);
                }

                setDisplayedPrice(loadedProduct.getVariableById(varId).price);
                setDisplayedDiscountPrice(loadedProduct.getVariableById(varId).discount)
            } else {
                setVariableId(undefined)
            }
        
        }, {
            productID: localProductId
        }, "content/products/get-product-by-id.php")
        
        let countUpdateInterval = setInterval(() => {
            setCountInCart(getCountById(localProductId, variableId));
        }, 100);
        setPrevInterval(countUpdateInterval);
    }, [params.id, productId, location, variableId])
    
    const [image, setImage] = useState(
        productObject.mainPhoto
    )

    const SliderContent = {
        title: "Время осеннего",
        titleDop: "шопинга!",
        skidca: "50 %",
        backUrl: "https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg"
    }

    const [state, setState] = useState({
        showDesc: true,
        showChar: false,
        showRew: false,
        showQuest: false,
        showPhoto: false
    })

    const renderBuyButton= function () {
        return productObject.inStock ? countInCart > 0
            ? (<div className={s.amount}>
                <div className={s.minus}>
                    <img src={cartMinus} alt="Минус" onClick={() => {
                        decrementById(productId, variableId);
                        setCountInCart(getCountById(productId, variableId));
                    }} />
                </div>
                <div className={s.amount__in}>
                    <p>{countInCart}</p>
                </div>
                <div className={s.plus}>
                    <img src={cartPlus} alt="Плюс" onClick={() => {
                        incrementById(productId, variableId);
                        setCountInCart(getCountById(productId, variableId));
                    }} />
                </div>
            </div>)
            :
            (<div className={s.button} onClick={(event) => {
                buy(productId, variableId);
                setCountInCart(1);
            }}>
                <img src={cart} alt="" />
                <p>{t('frontProduct-buyButton')}</p>
            </div>) : (<div className={`${s.button} ${s.inactive}`}>
            <img src={cart} alt="" />
            <p>{t('frontProduct-buyButton')}</p>
        </div>)
    }

    const renderVariable = function () {


        return productObject.isVariable ? <TextField
                                                     select
                                                     sx={{ border: 0, background: "none" }}
                                                     variant={"standard"}
                                                     onChange={(event)=>{
                                                         let variable = productObject.variables.find(item => item.id === event.target.value)
                                                         setDisplayedPrice(variable.price);
                                                         setVariableId(event.target.value)
                                                         setDisplayedDiscountPrice(variable.discount)
                                                     }}
                                                     defaultValue={productObject.variables[0].id}
                                                     label={t('front-product-variation')}
        >
            {
                productObject.variables.map((item, index)=>{
                    return <MenuItem key={index} value={item.id}>{item.title} ({productObject.isDiscountPresent(variableId) ? item.discount : item.price} {getCurrencyTag()})</MenuItem>
                })
            }
        </TextField> : null
    }

    return ready ? (
        <div className={s.main}>
            <div className={s.wrap}>
                <div className={s.in}>
                    <div className={s.product__wrap}>
                        <div className={s.review__code__wrap}>
                            <div className={s.title__wrap}>
                                <p className={s.title}>{productObject.title}</p>
                            </div>
                            <div className={s.reviews__code}>
                                <div className={s.reviews}>
                                    <div className={s.stars__wrap}>
                                        <img className={s.star} src={star} alt="Оценка" />
                                        <img className={s.star} src={star} alt="Оценка" />
                                        <img className={s.star} src={star} alt="Оценка" />
                                        <img className={s.star} src={star} alt="Оценка" />
                                        <img className={s.star} src={dopStar} alt="Оценка" />
                                    </div>
                                    <a href="#" className={s.reviews__text}>0 {t('reviews')}</a>
                                </div>
                                <div className={s.line}></div>
                                <div className={s.code}>
                                    <p className={s.cod}>{t('frontProduct-vendorCode')} {productObject.article}</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.prod__desc}>
                            <div className={s.prod__wrap}>
                                <div className={s.prod}>
                                    <div className={s.prod__img}>
                                        <img className={s.prod__dop__img} src={image} alt="Главное изображение" />
                                    </div>
                                </div>
                                {
                                    allPhotosMas.length > 0 ? 
                                        <div className={s.prod__slider}>
                                            {
                                                allPhotosMas.map((item, index) => {
                                                    return (
                                                        <div key={index} className={s.slide} onClick={() => {
                                                            setImage(item)
                                                        }}>
                                                            <img className={s.slide__dop} src={item} alt="Дополнительное изображение" />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    : null
                                }
                            </div>
                            <div className={s.description}>
                                <div className={s.desc__part}>
                                    {productObject.inStock ?
                                        <div className={s.inStock}>
                                            <img src={okey} alt="Значок" />
                                            <p>{t('frontProduct-isAvaible')}</p>
                                        </div>
                                        :
                                        <div className={s.notInStock}>
                                            <img src={okey} alt="Значок" />
                                            <p>{t('frontProduct-isNotAvaible')}</p>
                                        </div>
                                    }

                                    {!productObject.isDiscountPresent(variableId)
                                        ? <div className={s.price}><p>{displayedPrice}{getCurrencyTag()}</p></div>
                                        : <div className={s.price}>
                                            <span className={s.previous__price}>{displayedPrice}{getCurrencyTag()}</span>
                                            <p>{displayedDiscountPrice}{getCurrencyTag()}</p>
                                        </div>}
                                    <div className={s.actions}>
                                        {
                                            renderBuyButton()
                                        }

                                        {
                                            renderVariable()
                                        }
                                        <div className={s.heart__wrap}>
                                            {liked == true ?
                                                <img
                                                    className={s.heart__img}
                                                    src={heartImgSec}
                                                    alt="Зарисованое"
                                                    onClick={() => {
                                                        setLiked(false);
                                                    }}
                                                />
                                                : <img
                                                    className={s.heart__img}
                                                    src={heartImg}
                                                    alt="Не зарисованое"
                                                    onClick={() => {
                                                        setLiked(true);
                                                    }}
                                                />}
                                        </div>
                                    </div>
                                </div>
                                <div className={s.garanty}>
                                    <h3>{t('frontProduct-guarantee')}</h3>
                                    <p>{t('frontProduct-guaranteeInfo')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.wrap__in}>
                    <div className={s.dop__in}>
                        <div className={s.in__desc}>

                            <div className={s.menu__items}>
                                <p className={`${s.item} ${state.showDesc ? s.item__dop : null}`} onClick={() => {
                                    setState({ ...state, showDesc: true, showChar: false, showRew: false, showQuest: false, showPhoto: false })
                                }}>{t('frontProduct-menuDescription')}</p>
                                <div className={s.line__item}></div>
                                <p className={`${s.item} ${state.showChar ? s.item__dop : null}`} onClick={() => {
                                    setState({ ...state, showDesc: false, showChar: true, showRew: false, showQuest: false, showPhoto: false })
                                }}>{t('frontProduct-menuChar')}</p>
                                <div className={s.line__item}></div>
                                <p className={`${s.item} ${state.showRew ? s.item__dop : null}`} onClick={() => {
                                    setState({ ...state, showDesc: false, showChar: false, showRew: true, showQuest: false, showPhoto: false })
                                }}>{t('frontProduct-menuFeedbacks')}</p>
                                <div className={s.line__item}></div>
                                <p className={`${s.item} ${state.showQuest ? s.item__dop : null}`} onClick={() => {
                                    setState({ ...state, showDesc: false, showChar: false, showRew: false, showQuest: true, showPhoto: false })
                                }}>{t('frontProduct-menuQuestions')}</p>
                                <div className={s.line__item}></div>
                                <p className={`${s.item} ${state.showPhoto ? s.item__dop : null}`} onClick={() => {
                                    setState({ ...state, showDesc: false, showChar: false, showRew: false, showQuest: false, showPhoto: true })
                                }}>{t('frontProduct-menuImages')}</p>
                            </div>

                            <div className={s.item__desc}>
                                {state.showDesc ?
                                    <div className={s.desc__full}>
                                        <div className={s.text}>
                                            <h3>{t('frontProduct-description')}</h3>
                                            <p>{productObject.title}</p>
                                        </div>
                                        <div className={s.text__dop}>
                                            <p>{productObject.description}</p>
                                        </div>
                                    </div>
                                    :
                                    null}
                                {state.showChar ?
                                    <div className={s.desc__full}>
                                        <div className={s.text}>
                                            <h3>{t('frontProduct-char')}</h3>
                                            <p>{productObject.title}</p>
                                        </div>
                                        <div className={s.text__dop}>
                                            {
                                                productObject.properties.map((item, index) => {
                                                    return (
                                                        <div key={index} className={`${s.char} ${(index + 1) % 2 == 0 ? s.char__dop : null}`}>
                                                            <p className={s.char__title}>{item.title}</p>
                                                            <p>{item.value}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    :
                                    null}
                                
                                {state.showRew ?
                                    <div className={s.desc__full}>
                                        <div className={s.text}>
                                            <h3>{t('frontProduct-reviews')}</h3>
                                            <p>{productObject.title}</p>
                                        </div>
                                        <p>development in progress</p>
                                    </div>
                                    :
                                    null}
                                
                                {state.showQuest ?
                                    <div className={s.desc__full}>
                                        <div className={s.text}>
                                            <h3>{t('frontProduct-questions')}</h3>
                                            <p>{productObject.title}</p>
                                        </div>
                                        <p>development in progress</p>
                                    </div>
                                    :
                                    null}
                                {state.showPhoto ?
                                    <div className={s.desc__full}>
                                        <div className={s.text}>
                                            <h3>{t('frontProduct-images')}</h3>
                                            <p>{productObject.title}</p>
                                        </div>
                                        <div className={s.prod}>
                                            <div className={s.prod__img__dop}>
                                                <div className={s.prod__img__in}>
                                                    <img className={s.prod__dop__img__sec} src={productObject.mainPhoto} alt="Главное изображение" />
                                                </div>
                                                <div className={s.dop__photos__wrap}>
                                                    {
                                                        productObject.photos.map((item, index) => {
                                                            return (
                                                                <div key={index} className={s.photos__wrap}>
                                                                    <img src={item} alt="" />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    null}
                            </div>
                        </div>
                    </div>
                    {/*<div className={s.dop__in}>*/}
                    {/*    <div className={s.in__desc__dop}>*/}
                    {/*        <div className={s.img}>*/}
                    {/*            <img src={productObject.mainPhoto} alt={productObject.title} />*/}
                    {/*        </div>*/}
                    {/*        <div className={s.dop__desc}>*/}
                    {/*            <p>{productObject.title}</p>*/}
                    {/*            {productObject.inStock ?*/}
                    {/*                <div className={s.inStock__dop}>*/}
                    {/*                    <img src={okey} alt="Значок" />*/}
                    {/*                    <p>{t('frontProduct-isAvaible')}</p>*/}
                    {/*                </div>*/}
                    {/*                :*/}
                    {/*                <div className={s.notInStock__dop}>*/}
                    {/*                    <img src={okey} alt="Значок" />*/}
                    {/*                    <p>{t('frontProduct-isNotAvaible')}</p>*/}
                    {/*                </div>*/}
                    {/*            }*/}
                    {/*            <div className={s.price__dop}>*/}
                    {/*                <p>{productObject.price}{getCurrencyTag()}</p>*/}
                    {/*                <div className={s.buttons}>*/}
                    {/*                    <img src={heartImg} alt="" />*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            {*/}
                    {/*                renderBuyButton()*/}
                    {/*            }*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
            
            <div className={s.product__in}>
                <ProductList categoryForId={22} />
            </div>
            
            <div className={s.product__in}>
                <ProductList categoryForId={19} />
            </div>
            <div className={s.adword__slider}>
                <FrontSlide item={SliderContent} />
            </div>
        </div>
    ) : null

}
export default FrontProduct;