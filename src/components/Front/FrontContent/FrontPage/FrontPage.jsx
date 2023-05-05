import React from "react";
import s from "./FrontPage.module.css";
import ProductList from "./Product/ProductList";
import AdwordSlider from "../../Modules/AdwordSlider/AdwordSlider";
import AdwordSliderFirst from "../../Modules/AdwordSliderFirst/AdwordSliderFirst"
import ViewedProductList from "./ViewedProduct/ViewedProductList";
import KaliptasDescription from "./KaliptasDescription/KaliptasDescription";
import CategoriesList from "./CategoriesList/CategoriesList";
import ProductSecondList from "./ProductSecond/ProductSecondList";
import ViewedSecondProductList from "./ViewedSecondProduct/ViewedSecondProductList";
import AdwordSliderSecond from "../../Modules/AdwordSliderSecond/AdwordSliderSecond";

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

    const relatedSecondProductList = [
        {
            imgUrl: "",
            imgAlt: "Мягкая игрушка",
            title: "Мягкая игрушка мопс-бревно Валера",
            id: 11,
            reviews: 17,
            price: 15,
            dopPrice: 10,
        },
        {
            imgUrl: "",
            imgAlt: "Мягкая игрушка",
            title: "Мягкая игрушка мопс-бревно Валера",
            id: 12,
            reviews: 17,
            price: 15,
            dopPrice: 10,
        },
        {
            imgUrl: "",
            imgAlt: "Мягкая игрушка",
            title: "Мягкая игрушка мопс-бревно Валера",
            id: 13,
            reviews: 17,
            price: 15,
            dopPrice: 10,
        },
        {
            imgUrl: "",
            imgAlt: "Мягкая игрушка",
            title: "Мягкая игрушка мопс-бревно Валера",
            id: 14,
            reviews: 17,
            price: 15,
            dopPrice: 10,
        },
        {
            imgUrl: "",
            imgAlt: "Мягкая игрушка",
            title: "Мягкая игрушка мопс-бревно Валера",
            id: 15,
            reviews: 17,
            price: 15,
            dopPrice: 10,
        },
    ];

    const relatedViewedProducts = [
        {
            imgUrl: "",
            imgAlt: "Фотоапарат Panasonic Lumix",
            title: "Фотоапарат Panasonic Lumix DMC-G80 Kit 12",
            id: 6,
            reviews: 197,
            price: 1999,
            dopPrice: 1499,
        },
        {
            imgUrl: "",
            imgAlt: "Фотоапарат Panasonic Lumix",
            title: "Фотоапарат Panasonic Lumix DMC-G80 Kit 12",
            id: 7,
            reviews: 197,
            price: 1999,
            dopPrice: 1499,
        },
        {
            imgUrl: "",
            imgAlt: "Фотоапарат Panasonic Lumix",
            title: "Фотоапарат Panasonic Lumix DMC-G80 Kit 12",
            id: 8,
            reviews: 197,
            price: 1999,
            dopPrice: 1499,
        },
        {
            imgUrl: "",
            imgAlt: "Фотоапарат Panasonic Lumix",
            title: "Фотоапарат Panasonic Lumix DMC-G80 Kit 12",
            id: 9,
            reviews: 197,
            price: 1999,
            dopPrice: 1499,
        },
        {
            imgUrl: "",
            imgAlt: "Фотоапарат Panasonic Lumix",
            title: "Фотоапарат Panasonic Lumix DMC-G80 Kit 12",
            id: 10,
            reviews: 197,
            price: 1999,
            dopPrice: 1499,
        }
    ]

    const relatedSecondViewedProducts = [
        {
            imgUrl: "",
            imgAlt: "Фотоапарат Panasonic Lumix",
            title: "Фотоапарат Panasonic Lumix DMC-G80 Kit 12",
            id: 16,
            reviews: 197,
            price: 1999,
            dopPrice: 1499,
        },
        {
            imgUrl: "",
            imgAlt: "Фотоапарат Panasonic Lumix",
            title: "Фотоапарат Panasonic Lumix DMC-G80 Kit 12",
            id: 17,
            reviews: 197,
            price: 1999,
            dopPrice: 1499,
        },
        {
            imgUrl: "",
            imgAlt: "Фотоапарат Panasonic Lumix",
            title: "Фотоапарат Panasonic Lumix DMC-G80 Kit 12",
            id: 18,
            reviews: 197,
            price: 1999,
            dopPrice: 1499,
        },
        {
            imgUrl: "",
            imgAlt: "Фотоапарат Panasonic Lumix",
            title: "Фотоапарат Panasonic Lumix DMC-G80 Kit 12",
            id: 19,
            reviews: 197,
            price: 1999,
            dopPrice: 1499,
        },
        {
            imgUrl: "",
            imgAlt: "Фотоапарат Panasonic Lumix",
            title: "Фотоапарат Panasonic Lumix DMC-G80 Kit 12",
            id: 20,
            reviews: 197,
            price: 1999,
            dopPrice: 1499,
        }
    ]
    
    const categories = [
        {
            name: "Cпорт",
            id: 1
        },
        {
            name: "Книги",
            id: 2
        },
        {
            name: "Сантехника",
            id: 3
        },
        {
            name: "Зоотовары",
            id: 4
        },
        {
            name: "Для дома",
            id: 5
        },
        {
            name: "Для офиса",
            id: 6
        },
    ]

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

    const ThirdSliderContent = {
        title: "Время осеннего",
        titleDop: "шопинга!",
        skidca: "50 %",
        backUrl: "https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg"
    }

    return (
        <div className={s.wrap}>
            <div className={s.slider__wrap}>
                <AdwordSlider data={firstSliderContent} />
            </div>
            <div className={s.in}>
                <h3 className={s.title}>Похожие товары</h3>
                <div className={s.product__in}>
                    <ProductList cards={relatedProductList} />
                </div>
                <div className={s.categories}>
                    <CategoriesList categories={categories} />
                </div>
                <h3 className={s.title}>Вы смотрели</h3>
                <div className={s.product__in}>
                    <ViewedProductList cards={relatedViewedProducts} />
                </div>
                <div className={s.adword__slider}>
                    <AdwordSliderFirst data={SecondSliderContent}/>
                </div>
                <h3 className={s.title}>Похожие товары</h3>
                <div className={s.product__in}>
                    <ProductSecondList cards={relatedSecondProductList} />
                </div>
                <h3 className={s.title}>Вы смотрели</h3>
                <div className={s.product__in}>
                    <ViewedSecondProductList cards={relatedSecondViewedProducts}/>
                </div>
                <div className={s.kaliptas__desc}>
                    <KaliptasDescription />
                </div>
                <div className={s.adword__slider}>
                    <AdwordSliderSecond data={ThirdSliderContent}/>
                </div>
            </div>
        </div>
    );
};

export default FrontPage;
