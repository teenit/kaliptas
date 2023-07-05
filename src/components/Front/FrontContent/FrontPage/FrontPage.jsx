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

    const firstSliderContent = [
        {
            title: "Время",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://img.freepik.com/free-photo/woman-holding-various-shopping-bags-copy-space_23-2148674122.jpg?w=1060&t=st=1687190897~exp=1687191497~hmac=76c855ef883ec849e67401f270d5329933388f16b41b0f4c546ba4cd2b0bd3b6"
        },
        {
            title: "Время",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://img.freepik.com/free-photo/person-holding-various-sizes-black-shopping-bags_23-2148665669.jpg?w=1060&t=st=1687190962~exp=1687191562~hmac=ad061a6e44eca431f0b735a887235002c4c5f01859317c017f7c82b5296bafd9"
        },
        {
            title: "Время",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-119090.jpg?w=1060&t=st=1687190999~exp=1687191599~hmac=4d19c70603a8e8471d54f8ee30e6f407345739d99476236905b880bc99844c59"
        },
        {
            title: "Время",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://img.freepik.com/free-photo/excited-girl-scream-joy-making-fist-pump-holding-shopping-bag-rejoicing-standing-dress-ove_1258-120529.jpg?w=1060&t=st=1687191263~exp=1687191863~hmac=11ed33d705df5a56b67dc83bd1828e9fd73cc1122f9e940ed619ee361ed67acf"
        },
        {
            title: "Время",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://img.freepik.com/free-photo/girl-holds-fashion-shopping-bag-beauty_1150-13673.jpg?w=996&t=st=1687191427~exp=1687192027~hmac=5a0ae6cc0d8e55dd4000bb3018363b0686815fce666eb937e4ed5adefdb215cb"
        },
        {
            title: "Время",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: "https://img.freepik.com/free-photo/glamour-girl-holding-shopping-bags-pucker-lips-looking-coy-standing-against-pink-background_1258-123331.jpg?w=1380&t=st=1687191478~exp=1687192078~hmac=ee44f10d92937c5b30fc39e825cd5d1b233e3e3fef7f77fa25e4c3260ce075dc"
        },
    ];
    const SecondSliderContent = {
        title: "Время",
        titleDop: "шопинга!",
        skidca: "50 %",
        backUrl: "https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-119090.jpg?w=1060&t=st=1687190999~exp=1687191599~hmac=4d19c70603a8e8471d54f8ee30e6f407345739d99476236905b880bc99844c59"
    }
    const SecondSliderContentDop = {
        title: "Время",
        titleDop: "шопинга!",
        skidca: "50 %",
        backUrl: "https://img.freepik.com/free-photo/person-holding-various-sizes-black-shopping-bags_23-2148665669.jpg?w=1060&t=st=1687190962~exp=1687191562~hmac=ad061a6e44eca431f0b735a887235002c4c5f01859317c017f7c82b5296bafd9"
    }
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
