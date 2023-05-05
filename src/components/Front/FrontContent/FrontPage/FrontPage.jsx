import React from "react";
import s from "./FrontPage.module.css";
import ProductList from "./Product/ProductList";
import FrontSlider from "../../Modules/FrontSlider/FrontSlider";

const FrontPage = () => {
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
            backUrl: ""
        },
        {
            title: "Время осеннего",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: ""
        },
        {
            title: "Время осеннего",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: ""
        },
        {
            title: "Время осеннего",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: ""
        },
        {
            title: "Время осеннего",
            titleDop: "шопинга!",
            skidca: "50 %",
            backUrl: ""
        },
    ];

    return (
        <div className={s.wrap}>
            <div className={s.slider__wrap}>

                <FrontSlider data={firstSliderContent} />
            </div>
            <div className={s.in}>
                <h3 className={s.title}>Похожие товары</h3>
                <div className={s.product__in}>
                    <ProductList cards={relatedProductList} />
                </div>
                <h3 className={s.title}>Вы смотрели</h3>
            </div>
        </div>
    );
};

export default FrontPage;
