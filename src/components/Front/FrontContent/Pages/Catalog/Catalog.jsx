import React, {useEffect, useState} from "react";
import s from "./Catalog.module.css";
import ProductList from "../../FrontPage/Product/ProductList";
import FrontSlide from "../../../Modules/FrontSlider/FrontSlide/FrontSlide";
import {Link} from "react-router-dom";
import {CategoryObject} from "../Category/CategoryObject";
import {api} from "../../../../functions/api";
import {getRealLanguage} from "../../../../functions/getLanguage";

const Catalog = ()=>{
    //{"id":"19","parent_id":"0","category":{"title":{"en":"Sports, recreation, tourism","ru":"Спорт, отдых, туризм","ge":"სპორტი, დასვენება, ტურიზმი"},"description":{"en":"","ru":"","ge":""},"image":"https://kaliptas.people-ua.org/manage/categories/uploads/1683424040sport.png"}}
    const [loadedCategories, setLoadedCategories] = useState([]);
    // const [language, setLanguage] = useState(localStorage.getItem('LNG').toLowerCase());

    useEffect(()=>{
        api((response)=>{
            setLoadedCategories(response.map((item)=>{
                return new CategoryObject(item, undefined, undefined, getRealLanguage());
            }))
        }, {}, "content/category/get-all-categories.php")
    }, [])

    const relatedProductList = [37,38]; // Must be loadRelated()

    const youWatchedList = relatedProductList;

    const slideData = {
        title: "Время осеннего",
        titleDop: "шопинга!",
        skidca: "50 %",
        backUrl: "https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg"
    };

    return(
        <div className={s.wrap}>
            <div className={s.category__container}>
                {loadedCategories.map((item, index)=> {
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
            </div>
            <h3 className={s.title}>{}Похожие товары</h3>
            <div className={s.product__in}>
                <ProductList cards={relatedProductList} />
            </div>
            <h3 className={s.title}>Вы смотрели</h3>
            <div className={s.product__in}>
                <ProductList cards={youWatchedList} />
            </div>

            <div className={s.slide__wrap}>
                <FrontSlide item={slideData}/>
            </div>

        </div>
    )
}
export default Catalog;