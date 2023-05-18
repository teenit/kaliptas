import React, {useEffect, useState} from "react";
import s from './FrontProduct.module.css'
import { useParams } from "react-router-dom";
import star from "./../../../../img/front/Многоугольник 1 копия 3.png"
import dopStar from "./../../../../img/front/Многоугольник 1 копия 4.png"
import okey from "./../../../../img/front/icons8-эмодзи-жест-ок-48.png"
import cart from "./../../../../img/front/icons8-корзина-64.png"
import heart from "./../../../../img/front/icons8-heart-6422.png"
import ProductList from "../FrontPage/Product/ProductList";
import FrontSlide from "../../Modules/FrontSlider/FrontSlide/FrontSlide";
import {api} from "../../../functions/api";
import {ProductObject} from "./ProductObject";
import {getRealLanguage} from "../../../functions/getLanguage";
import { useTranslation } from "react-i18next";

const FrontProduct = ()=>{
    const {t}  = useTranslation()
    const [ready,setReady] = useState(false)
    const [productObject, setProduct] = useState({});
    const params = useParams();
    const [productId, setId] =  useState(ProductObject.getIdFromLink(params.id));
    useEffect(()=>{
        setId(params.id)
        api((response)=>{
            let loadedProduct = new ProductObject(response, getRealLanguage());
            setProduct(loadedProduct)
            setImage(loadedProduct.mainPhoto)
            setReady(true);
        }, {
            productID: productId
        }, "content/products/get-product-by-id.php")
    }, [params.id, productId])

    const [image, setImage] = useState(
        productObject.mainPhoto
    )
    const relatedProductList = [22,23]
    const relatedProductListSecond = [22,23]
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
    return ready ?(
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
                                    <a href="#" className={s.reviews__text}>0 {t('frontProduct-titleFeedbacks')}</a>
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
                                <div className={s.prod__slider}>
                                    {
                                        productObject.photos.map((item,index)=>{
                                            return(
                                                <div key={index} className={s.slide} onClick={()=>{
                                                    setImage(item)
                                                }}> 
                                                    <img className={s.slide__dop} src={item} alt="Дополнительное изображение" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
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
                                    <div className={s.price}>
                                        <p>{productObject.price} $</p>
                                    </div>
                                    <div className={s.actions}>
                                        <div className={s.button}>
                                            <img src={cart} alt="" />
                                            <a href="#">{t('frontProduct-buyButton')}</a>
                                        </div>
                                        
                                        <div className={s.heart__wrap}>
                                            <img src={heart} alt="Лайкнуть" />
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
                                <p className={`${s.item} ${state.showDesc ? s.item__dop : null}`} onClick={()=>{
                                    setState({...state, showDesc: true, showChar: false, showRew: false, showQuest: false, showPhoto: false})
                                }}>{t('frontProduct-menuDescription')}</p>
                                <div className={s.line__item}></div>
                                <p className={`${s.item} ${state.showChar ? s.item__dop : null}`} onClick={()=>{
                                    setState({...state, showDesc: false, showChar: true, showRew: false, showQuest: false, showPhoto: false})
                                }}>{t('frontProduct-menuChar')}</p>
                                <div className={s.line__item}></div>
                                <p className={`${s.item} ${state.showRew ? s.item__dop : null}`} onClick={()=>{
                                    setState({...state, showDesc: false, showChar: false, showRew: true, showQuest: false, showPhoto: false})
                                }}>{t('frontProduct-menuFeedbacks')}</p>
                                <div className={s.line__item}></div>
                                <p className={`${s.item} ${state.showQuest ? s.item__dop : null}`} onClick={()=>{
                                    setState({...state, showDesc: false, showChar: false, showRew: false, showQuest: true, showPhoto: false})
                                }}>{t('frontProduct-menuQuestions')}</p>
                                <div className={s.line__item}></div>
                                <p className={`${s.item} ${state.showPhoto ? s.item__dop : null}`} onClick={()=>{
                                    setState({...state, showDesc: false, showChar: false, showRew: false, showQuest: false, showPhoto: true})
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
                                                productObject.properties.map((item, index)=>{
                                                    return(
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
                                                    productObject.photos.map((item, index)=>{
                                                        return(
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
                    <div className={s.dop__in}>
                        <div className={s.in__desc}>
                            <div className={s.img}>
                                <img src={productObject.mainPhoto} alt={productObject.title} />
                            </div>
                            <div className={s.dop__desc}>
                                <p>{productObject.title}</p>
                                {productObject.inStock ? 
                                    <div className={s.inStock__dop}>
                                        <img src={okey} alt="Значок" />
                                        <p>{t('frontProduct-isAvaible')}</p>
                                    </div>
                                :
                                    <div className={s.notInStock__dop}>
                                        <img src={okey} alt="Значок" />
                                        <p>{t('frontProduct-isNotAvaible')}</p>
                                    </div>
                                }
                                <div className={s.price__dop}>
                                    <p>{productObject.price}$</p>
                                    <div className={s.buttons}>
                                        <img src={heart} alt="" />
                                    </div>
                                </div>
                                <button className={s.btn}>{t('frontProduct-buyButton')}</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <h3 className={s.title__item}>{t('frontPage-youVisited')}</h3>
                <div className={s.product__in}>
                    <ProductList cards={relatedProductList} />
                </div>
                <h3 className={s.title__item}>{t('frontPage-similarProducts')}</h3>
                <div className={s.product__in}>
                    <ProductList cards={relatedProductListSecond} />
                </div>
                <div className={s.adword__slider}>
                    <FrontSlide item={SliderContent}/>
                </div>
        </div>
    ) : null
   
}
export default FrontProduct;