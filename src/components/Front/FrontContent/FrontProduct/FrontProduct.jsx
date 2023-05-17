import React, {useEffect, useState} from "react";
import s from './FrontProduct.module.css'
import { useParams } from "react-router-dom";
import star from "./../../../../img/front/Многоугольник 1 копия 3.png"
import dopStar from "./../../../../img/front/Многоугольник 1 копия 4.png"
import okey from "./../../../../img/front/icons8-эмодзи-жест-ок-48.png"
import cart from "./../../../../img/front/icons8-корзина-64.png"
import heart from "./../../../../img/front/icons8-heart-6422.png"
import ves from "./../../../../img/front/весы.png"
import ProductList from "../FrontPage/Product/ProductList";
import FrontSlide from "../../Modules/FrontSlider/FrontSlide/FrontSlide";
import {api} from "../../../functions/api";
import {ProductObject} from "./ProductObject";
import {getRealLanguage} from "../../../functions/getLanguage";

const FrontProduct = ()=>{
    const getProductById= {
        title: "Подушка Miniso Супер кот",
        reviews: 6,
        price: 599,
        dopImgAmount : 10,
        article: 10100112,
        inStock: true,
        imgMain: "https://images.prom.ua/3224110974_w640_h640_3224110974.jpg",
        dopImages: [
            {
                dopImg: "https://images.prom.ua/3224110976_w640_h640_3224110976.jpg",
                id: 1
            },
            {
                dopImg: "https://images.prom.ua/3457413731_w640_h640_3457413731.jpg",
                id: 2
            },
            {
                dopImg: "https://images.prom.ua/3457413730_w640_h640_3457413730.jpg",
                id: 3
            },
            {
                dopImg: "https://images.prom.ua/3457447040_w640_h640_3457447040.jpg",
                id: 4
            },
            {
                dopImg: "https://images.prom.ua/3224110976_w640_h640_3224110976.jpg",
                id: 5
            },
            {
                dopImg: "https://images.prom.ua/3457413731_w640_h640_3457413731.jpg",
                id: 6
            },
            {
                dopImg: "https://images.prom.ua/3457413730_w640_h640_3457413730.jpg",
                id: 7
            },
            {
                dopImg: "https://images.prom.ua/3457447040_w640_h640_3457447040.jpg",
                id: 8
            },
            {
                dopImg: "https://images.prom.ua/3457413730_w640_h640_3457413730.jpg",
                id: 7
            },
            {
                dopImg: "https://images.prom.ua/3457447040_w640_h640_3457447040.jpg",
                id: 8
            },
        ],
        cities: [
            {
                name: "Тбилиси"
            },
            {
                name: "Тбилиси"
            },
            {
                name: "Тбилиси"
            },
            {
                name: "Тбилиси"
            },
            {
                name: "Тбилиси"
            },
        ],
        itemChar: [
            {
                type: "Мяшкая игрушка",
                typeName: "Тип"
            },
            {
                type: "20-30 см",
                typeName: "Размер"
            },
            {
                type: "Плюш 100%",
                typeName: "Материал верха"
            },
            {
                type: "Синтепух",
                typeName: "Наполнитель"
            },
            {
                type: "Мягкая игрушка",
                typeName: "Тематика"
            }, 
            {
                type: "Унисекс",
                typeName: "Пол"
            },
            {
                type: "3+",
                typeName: "Возраст"
            },
            {
                type: "Рыжий с белым",
                typeName: "Цвет"
            },
            {
                type: "Китай",
                typeName: "Страна производитель"
            },
            {
                type: "Япония",
                typeName: "Страна регистрации бренда"
            },
            {
                type: "600 г",
                typeName: "Вес"
            },
            {
                type: "14 дней",
                typeName: "Гарантия"
            }

        ],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic neque omnis veniam fugit. Iste dolores magni voluptatem saepe culpa deserunt itaque quae? Neque consequuntur veniam culpa facilis officia quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum unde, nulla explicabo adipisci corporis, impedit ipsum deleniti maiores id animi sequi incidunt! Repellendus quidem corrupti ab suscipit nostrum labore ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perferendis sed consequatur reiciendis, possimus totam sint ab labore corporis."
    };
    const [ready,setReady] = useState(false)
    const [productObject, setProduct] = useState({});
    const params = useParams();
    const [productId, setId] =  useState(params.id);
    console.log(params)
    useEffect(()=>{
        setId(params.id)
        api((response)=>{
            console.log("Response:", response)
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
    const legacyProductObject = getProductById;
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
                                    <a href="#" className={s.reviews__text}>0 отзывов</a>
                                </div>
                                <div className={s.line}></div>
                                <div className={s.code}>
                                    <p className={s.cod}>Код: {productObject.article}</p>
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
                                            <p>В наличии</p>
                                        </div>
                                    :
                                        <div className={s.notInStock}>
                                            <img src={okey} alt="Значок" />
                                            <p>Нет в наличии</p>
                                        </div>
                                    }
                                    <div className={s.price}>
                                        <p>{productObject.price} $</p>
                                    </div>
                                    <div className={s.actions}>
                                        <div className={s.button}>
                                            <img src={cart} alt="" />
                                            <a href="#">Купить</a>
                                        </div>
                                        
                                        <div className={s.heart__wrap}>
                                            <img src={heart} alt="Лайкнуть" />
                                        </div>
                                    </div>
                                </div>
                                <div className={s.garanty}>
                                    <h3>Гарантия:</h3>
                                    <p>Возвращение товара в течении 14 дней после покупки</p>
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
                                }}>Описание</p>
                                <div className={s.line__item}></div>
                                <p className={`${s.item} ${state.showChar ? s.item__dop : null}`} onClick={()=>{
                                    setState({...state, showDesc: false, showChar: true, showRew: false, showQuest: false, showPhoto: false})
                                }}>Характеристики</p>
                                <div className={s.line__item}></div>
                                <p className={`${s.item} ${state.showRew ? s.item__dop : null}`} onClick={()=>{
                                    setState({...state, showDesc: false, showChar: false, showRew: true, showQuest: false, showPhoto: false})
                                }}>Отзывы</p>
                                <div className={s.line__item}></div>
                                <p className={`${s.item} ${state.showQuest ? s.item__dop : null}`} onClick={()=>{
                                    setState({...state, showDesc: false, showChar: false, showRew: false, showQuest: true, showPhoto: false})
                                }}>Вопросы</p>
                                <div className={s.line__item}></div>
                                <p className={`${s.item} ${state.showPhoto ? s.item__dop : null}`} onClick={()=>{
                                    setState({...state, showDesc: false, showChar: false, showRew: false, showQuest: false, showPhoto: true})
                                }}>Фото</p>
                            </div>
                            <div className={s.item__desc}>
                                {state.showDesc ? 
                                    <div className={s.desc__full}>
                                        <div className={s.text}>
                                            <h3>Описание</h3>
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
                                            <h3>Характеристики</h3>
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
                                {state.showPhoto ? 
                                    <div className={s.desc__full}>
                                        <div className={s.text}>
                                            <h3>Фото</h3>
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
                                        <p>В наличии</p>
                                    </div>
                                :
                                    <div className={s.notInStock__dop}>
                                        <img src={okey} alt="Значок" />
                                        <p>Нет в наличии</p>
                                    </div>
                                }
                                <div className={s.price__dop}>
                                    <p>{productObject.price}$</p>
                                    <div className={s.buttons}>
                                        <img src={heart} alt="" />
                                    </div>
                                </div>
                                <button className={s.btn}>Купить</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <h3 className={s.title__item}>Похожие товары</h3>
                <div className={s.product__in}>
                    <ProductList cards={relatedProductList} />
                </div>
                <h3 className={s.title__item}>Вы смотрели</h3>
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