import React, {useEffect} from "react";
import s from "./FrontPage.module.css";
import ProductList from "./Product/ProductList";
import FrontSlider from "../../Modules/FrontSlider/FrontSlider";
import { useState } from "react";
import arrowImg from "./../../../../img/collapse-arrow-50.png"
import FrontSlide from "../../Modules/FrontSlider/FrontSlide/FrontSlide";
import { useTranslation } from "react-i18next";
import {apiResponse} from "../../../functions/api";
import {getLanguageForRootLink, getRealLanguage} from "../../../functions/getLanguage";
import {CategoryObject} from "../Pages/Category/CategoryObject";
import { Link } from "react-router-dom";
import { ProductObject } from "../FrontProduct/ProductObject";

const FrontPage = () => {
    const [productList, setProductList] = useState([])

    //const relatedProductList = productList //[50,50,50,50,50,50,50,50]; // Must be loadRelated()
    //const relatedViewedProducts = relatedProductList
    //const relatedSecondProductList = relatedProductList
    //const relatedSecondViewedProducts = relatedProductList


    const [categories, setCategories] = useState([])
    const {t} = useTranslation()

    useEffect(()=>{
        let loadedCategoryPromise = apiResponse({}, "content/category/get-all-categories.php");

        let productsForFirstList = apiResponse({
            catID: 19
        }, "content/products/get-products-by-category-id.php");
        let productsForSecondList = apiResponse({
            catID: 33
        }, "content/products/get-products-by-category-id.php");
        let productsForThirdList = apiResponse({
            catID: 22
        }, "content/products/get-products-by-category-id.php");
        let productsForFourthList = apiResponse({
            catID: 23
        }, "content/products/get-products-by-category-id.php");

        Promise.all([loadedCategoryPromise, productsForFirstList, productsForSecondList, productsForThirdList, productsForFourthList]).then((responses)=>{
            
            let localLoadedCategories = responses[0].map((item)=>{
                return new CategoryObject(item, undefined, undefined,  getRealLanguage());
            }).filter(cat=>cat.parenId==="0")

            setCategories(localLoadedCategories.map((cat)=>{
                return {
                    name: cat.title,
                    id: cat.id
                }
            }))

            let tempList = productList;
            
            for(let response of responses.slice(1)) {
                let localLoadedProduct = response.map((item)=>{
                    return new ProductObject(item, undefined, undefined, getRealLanguage())
                })
                console.log(localLoadedProduct)
                tempList.push(localLoadedProduct.map((product)=>{
                    return product.id
                }))
                console.log(productList)
            }

            setProductList(tempList)

            console.log(responses)


        })

    }, [])

    const firstSliderContent = [
        {
            title: "Время осеннего",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg"
        },
        {
            title: "Время осеннего",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg"
        },
        {
            title: "Время осеннего",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg"
        },
        {
            title: "Время осеннего",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg"
        },
        {
            title: "Время осеннего",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg"
        },
        {
            title: "Время осеннего",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg"
        },
    ];

    const SecondSliderContent = {
        title: "Время осеннего",
        titleDop: "шопинга!",
        skidca: "50 %",
        backUrl: "https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg"
    }

    const ThirdSliderContent = SecondSliderContent;

    const [showDesc, setShowDesc] = useState(false)

    return (
        <div className={s.wrap}>

            <div className={s.slider__wrap}>
                <FrontSlider data={firstSliderContent} />
            </div>

            <div className={s.in}>

                <h3 className={s.title}>{t("frontPage-similarProducts")}</h3>
                <div className={s.product__in}>
                    {productList.length > 0 ? 
                        productList[0].length > 0 ? <ProductList cards={productList[0]} />  : null
                    : null}
                </div>
    
                <div className={s.categories__wrap}>
                    {
                        categories.map((item, index)=>{
                            return(
                                <div className={s.categories__wrap__in} key={index}>
                                    <div className={s.category}><Link className={s.category__link} to={getLanguageForRootLink() + "/catalog/" + item.id}>{item.name}</Link></div>
                                </div>
                            )
                        })
                    }
                    
                </div>            

                <h3 className={s.title}>{t('frontPage-youVisited')}</h3>
                <div className={s.product__in}>
                    {productList.length > 1 ? 
                        productList[1].length > 0 ? <ProductList cards={productList[1]} />  : null
                    : null}
                </div>

                <div className={s.adword__slider}>
                    <FrontSlide item={SecondSliderContent}/>
                </div>

                <h3 className={s.title}>{t("frontPage-similarProducts")}</h3>
                <div className={s.product__in}>
                    {productList.length > 2 ? 
                        productList[2].length > 0 ? <ProductList cards={productList[2]} />  : null
                    : null}
                </div>

                <h3 className={s.title}>{t('frontPage-youVisited')}</h3>
                <div className={s.product__in}>
                    {productList.length > 3 ? 
                        productList[3].length > 0 ? <ProductList cards={productList[3]} />  : null
                    : null}
                </div>

                <div className={s.kaliptas__desc}>
                    <div className={s.in__desc}>
                        <div className={s.title__wrap__desc} onClick={()=>{
                            setShowDesc(!showDesc) 
                        }}>
                            <h3 className={s.title__desc}>Kaliptas</h3>
                            <img className={`${s.arrow__desc} ${showDesc ? s.arrow__dop__desc : null}`} src={arrowImg} alt="Стрелка" />
                        </div>
                        <div className={s.text__wrap__desc}>
                            <p className={`${s.text__desc} ${showDesc ? s.text__full__desc : s.text__aver__desc}`}>
                                {t('frontPage-description')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className={s.adword__slider}>
                    <FrontSlide item={ThirdSliderContent}/>
                </div>
            </div>
        </div>
    );
};

export default FrontPage;
