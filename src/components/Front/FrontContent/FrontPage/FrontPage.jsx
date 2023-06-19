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
    const [categories, setCategories] = useState([])
    const {t} = useTranslation()

    useEffect(()=>{
        let loadedCategoryPromise = apiResponse({}, "content/category/get-all-categories.php");
        Promise.all([loadedCategoryPromise]).then((responses)=>{  
            let localLoadedCategories = responses[0].map((item)=>{
                return new CategoryObject(item, undefined, undefined,  getRealLanguage());
            }).filter(cat=>cat.parenId==="0")
            setCategories(localLoadedCategories.map((cat)=>{
                return {
                    name: cat.title,
                    id: cat.id
                }
            }))   
        })
    }, [])
    console.log(categories[0]);

    const firstSliderContent = [
        {
            title: "Время",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://wallpapers.com/images/hd/e-commerce-1920-x-1080-wallpaper-vpwocptk7aur4fms.jpg"
        },
        {
            title: "Время",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://images.hdqwalls.com/download/cyber-guy-retrowave-5k-28-1920x1080.jpg"
        },
        {
            title: "Время",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://hatch.group/wp-content/uploads/2023/03/hatch_colimpactonfoodanddrinkbrands_march23_socialasset_blogpost_notext_landscape_1920x1080.jpg"
        },
        {
            title: "Время",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://wallpapers.com/images/hd/e-commerce-1920-x-1080-wallpaper-vpwocptk7aur4fms.jpg"
        },
        {
            title: "Время",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://images.hdqwalls.com/download/cyber-guy-retrowave-5k-28-1920x1080.jpg"
        },
        {
            title: "Время",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://hatch.group/wp-content/uploads/2023/03/hatch_colimpactonfoodanddrinkbrands_march23_socialasset_blogpost_notext_landscape_1920x1080.jpg"
        },
    ];
    const SecondSliderContent = {
        title: "Время",
        titleDop: "шопинга!",
        skidca: "50 %",
        backUrl: "https://hatch.group/wp-content/uploads/2023/03/hatch_colimpactonfoodanddrinkbrands_march23_socialasset_blogpost_notext_landscape_1920x1080.jpg"
    }
    const SecondSliderContentDop = {
        title: "Время",
        titleDop: "шопинга!",
        skidca: "50 %",
        backUrl: "https://images.hdqwalls.com/download/cyber-guy-retrowave-5k-28-1920x1080.jpg"
    }
    const ThirdSliderContent = SecondSliderContent;
    const [showDesc, setShowDesc] = useState(false)

    return (
        <div className={s.wrap}>
            <div className={s.slider__wrap}>
                <FrontSlider data={firstSliderContent} />
            </div>
            <div className={s.in}>
                <div className={s.product__in}>
                    
                    <ProductList categoryForId = {(categories[0]||{}).id}/>
                    
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
                <div className={s.product__in}>
                    <ProductList categoryForId = {(categories[1]||{}).id}/>
                </div>
                <div className={s.adword__slider}>
                    <FrontSlide item={SecondSliderContent}/>
                </div>
                <div className={s.product__in}>
                    <ProductList categoryForId = {(categories[2]||{}).id}/>
                </div>
                <div className={s.product__in}>
                    <ProductList categoryForId = {(categories[3]||{}).id}/>
                </div>
                <div className={s.kaliptas__desc}>
                    <div className={s.in__desc}>
                        <div className={s.title__wrap__desc} onClick={()=>{
                            setShowDesc(!showDesc) 
                        }}>
                            <h3 className={s.title__desc}>Kaliptas - {t('front-page-we-have-all')}</h3>
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
                    <FrontSlide item={SecondSliderContentDop}/>
                </div>
            </div>
        </div>
    );
};

export default FrontPage;
