import React, {useEffect, useState} from "react";
import s from "./Catalog.module.css";
import ProductList from "../../FrontPage/Product/ProductList";
import FrontSlide from "../../../Modules/FrontSlider/FrontSlide/FrontSlide";
import {Link} from "react-router-dom";
import {CategoryObject} from "../Category/CategoryObject";
import {api, apiResponse} from "../../../../functions/api";
import {getRealLanguage} from "../../../../functions/getLanguage";
import { useTranslation } from "react-i18next";
import { ProductObject } from "../../FrontProduct/ProductObject";

const Catalog = ()=>{
    const {t}  = useTranslation()
    const [loadedCategories, setLoadedCategories] = useState([]);

    let showPerClick = 11;
    const [dopLoadedCategories, setDopLoadedCategories] = useState([])
    const [amountOfCategories, setAmountOfCategories] = useState(0);
    const [lastDisplayedCategoryIndex, setLastDisplayedCategoryIndex] = useState(0);
    const [parentCats, setParentCats] = useState([]) ;

    const showCategories = (allCategories) =>{
        let newAmount = amountOfCategories + showPerClick;
        setAmountOfCategories(newAmount);
        let ms = [];

        let i = lastDisplayedCategoryIndex
        while(i < newAmount && i < allCategories.length){
            ms.push(allCategories[i])
            i++
        }
        setLastDisplayedCategoryIndex(i)

        setDopLoadedCategories([...dopLoadedCategories, ...ms])
    }

    useEffect(()=>{
        api((response)=>{
            let localLoadedCategories = response.map((item)=>{
                return new CategoryObject(item, undefined, undefined,  getRealLanguage());
            })
            setLoadedCategories(localLoadedCategories);
            showCategories(localLoadedCategories)
            setParentCats(localLoadedCategories.filter(cat=>cat.parenId==="0").map((cat)=>{
                console.log(cat)
                return cat.id
            }))
        }, {}, "content/category/get-all-categories.php")


    }, [])

    const slideData = {
        title: "Время осеннего",
        titleDop: "шопинга!",
        skidca: "50 %",
        backUrl: "https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg"
    };

    return(
        <div className={s.wrap}>
            <div className={s.category__container}>
                {dopLoadedCategories.map((item, index)=> {
                    return (
                        <Link className={s.category__link}
                            to={{
                                pathname: item.id
                            }
                        } key={index}>
                            <div className={s.category} key={index}>
                                <img src={item.imageUrl} alt={item.title}/>
                                <h5>{item.title}</h5>
                            </div>
                        </Link>
                    )
                })}                
                <div className={s.show__more}>
                    <button className={s.btn} onClick={()=>{
                        showCategories(loadedCategories)
                        }}>{t('catalog-button')}</button>
                </div>
            </div>
            <div className={s.product__in}>
                <ProductList categoryForId = {parentCats[0]}/>
            </div>
            <div className={s.product__in}>
                <ProductList categoryForId = {parentCats[1]}/>
            </div>

            <div className={s.slide__wrap}>
                <FrontSlide item={slideData}/>
            </div>

        </div>
    )
}
export default Catalog;