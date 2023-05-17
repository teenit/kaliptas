import React, {useEffect, useState} from "react";
import s from "./Catalog.module.css";
import ProductList from "../../FrontPage/Product/ProductList";
import FrontSlide from "../../../Modules/FrontSlider/FrontSlide/FrontSlide";
import {Link} from "react-router-dom";
import {CategoryObject} from "../Category/CategoryObject";
import {api} from "../../../../functions/api";

const Catalog = ()=>{
    //{"id":"19","parent_id":"0","category":{"title":{"en":"Sports, recreation, tourism","ru":"Спорт, отдых, туризм","ge":"სპორტი, დასვენება, ტურიზმი"},"description":{"en":"","ru":"","ge":""},"image":"https://kaliptas.people-ua.org/manage/categories/uploads/1683424040sport.png"}}
    const [loadedCategories, setLoadedCategories] = useState([]);
    const [language, setLanguage] = useState("ru");

    let showPerClick = 11;
    const [dopLoadedCategories, setDopLoadedCategories] = useState([])
    const [amountOfCategories, setAmountOfCategories] = useState(0);
    const [lastDisplayedCategoryIndex, setLastDisplayedCategoryIndex] = useState(0);

    const showCategories = (allCategories) =>{
        let newAmount = amountOfCategories + showPerClick;
        setAmountOfCategories(newAmount);
        console.log(newAmount)
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
                return new CategoryObject(item, undefined, undefined, language);
            })

            setLoadedCategories(localLoadedCategories);

            showCategories(localLoadedCategories)
            console.log("Effect")
        }, {}, "content/category/get-all-categories.php")
    }, [language])

    const relatedProductList = []; // Must be loadRelated()
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
                        }}>Показать еще</button>
                </div>
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