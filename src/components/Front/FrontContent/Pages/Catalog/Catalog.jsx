import React from "react";
import s from "./Catalog.module.css";
import ProductList from "../../FrontPage/Product/ProductList";
import FrontSlide from "../../../Modules/FrontSlider/FrontSlide/FrontSlide";

const Catalog = ()=>{
    const categories = [
        {
            title: "Title",
            imageUrl: "https://www.textures4photoshop.com/tex/thumbs/fireworks-png-transparent-background-thumb36.png",
            categoryLink: "link"
        },{
            title: "Title",
            imageUrl: "https://www.textures4photoshop.com/tex/thumbs/fireworks-png-transparent-background-thumb36.png",
            categoryLink: "link"
        },{
            title: "Title",
            imageUrl: "https://www.textures4photoshop.com/tex/thumbs/fireworks-png-transparent-background-thumb36.png",
            categoryLink: "link"
        },{
            title: "Title",
            imageUrl: "https://www.textures4photoshop.com/tex/thumbs/fireworks-png-transparent-background-thumb36.png",
            categoryLink: "link"
        },{
            title: "Title",
            imageUrl: "https://www.textures4photoshop.com/tex/thumbs/fireworks-png-transparent-background-thumb36.png",
            categoryLink: "link"
        },{
            title: "Title",
            imageUrl: "https://www.textures4photoshop.com/tex/thumbs/fireworks-png-transparent-background-thumb36.png",
            categoryLink: "link"
        },{
            title: "Title",
            imageUrl: "https://www.textures4photoshop.com/tex/thumbs/fireworks-png-transparent-background-thumb36.png",
            categoryLink: "link"
        },{
            title: "Title",
            imageUrl: "https://www.textures4photoshop.com/tex/thumbs/fireworks-png-transparent-background-thumb36.png",
            categoryLink: "link"
        },
    ]

    const relatedProductList = [
        {
            imgUrl: "",
            imgAlt: "Мягкая игрушка",
            title: "Мягкая игрушка мопс-бревно Валера",
            id: 1,
            reviews: 17,
            price: 15,
            dopPrice: 10,
        },
        {
            imgUrl: "",
            imgAlt: "Мягкая игрушка",
            title: "Мягкая игрушка мопс-бревно Валера",
            id: 2,
            reviews: 17,
            price: 15,
            dopPrice: 10,
        },
        {
            imgUrl: "",
            imgAlt: "Мягкая игрушка",
            title: "Мягкая игрушка мопс-бревно Валера",
            id: 3,
            reviews: 17,
            price: 15,
            dopPrice: 10,
        },
        {
            imgUrl: "",
            imgAlt: "Мягкая игрушка",
            title: "Мягкая игрушка мопс-бревно Валера",
            id: 4,
            reviews: 17,
            price: 15,
            dopPrice: 10,
        },
        {
            imgUrl: "",
            imgAlt: "Мягкая игрушка",
            title: "Мягкая игрушка мопс-бревно Валера",
            id: 5,
            reviews: 17,
            price: 15,
            dopPrice: 10,
        },
    ]; // Must be loadRelated()

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
                {categories.map((item, index)=> {
                    return (
                        <a className={s.category__link} href={item.categoryLink}>
                            <div className={s.category} key={index}>
                                <img src={item.imageUrl} alt={item.title}/>
                                <h5>{item.title}</h5>
                            </div>
                        </a>
                    )
                })}
            </div>
            <h3 className={s.title}>Похожие товары</h3>
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