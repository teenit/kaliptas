import React from "react";
import s from "./FrontPage.module.css";
import ProductList from "./Product/ProductList";
import AdwordSlider from "../../Modules/AdwordSlider/AdwordSlider";
import AdwordSliderSecond from "../../Modules/AdwordSliderSecond/AdwordSliderSecond";
import arrowImg from "./../../../../img/collapse-arrow-50.png"
import { useState } from "react";

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

    const [showDesc, setShowDesc] = useState(false)

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
                    <div className={s.categories__wrap}>
                        {
                            categories.map((item)=>{
                                return(
                                    <div className={s.category}>{item.name}</div>
                                )
                            })
                        }
                    </div>
                </div>

                <h3 className={s.title}>Вы смотрели</h3>
                <div className={s.product__in}>
                    <ProductList cards={relatedViewedProducts}/>
                </div>

                <div className={s.adword__slider}>
                    <AdwordSliderSecond data={SecondSliderContent}/>
                   
                </div>

                <h3 className={s.title}>Похожие товары</h3>
                <div className={s.product__in}>
                    <ProductList cards={relatedSecondProductList}/>
                </div>

                <h3 className={s.title}>Вы смотрели</h3>
                <div className={s.product__in}>
                    <ProductList cards={relatedSecondViewedProducts}/>
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium quibusdam, aliquam accusamus aut incidunt laudantium fugiat impedit nam dolore ratione nulla recusandae mollitia dolor quos nisi doloremque beatae! Culpa!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis magni quas vitae exercitationem maxime. A, eum placeat quaerat ex fugiat veritatis, voluptatum quia, quos magni quibusdam totam ut commodi recusandae.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laudantium. Temporibus perspiciatis harum minus vero dicta, facilis, ullam fugit voluptatum hic illo veritatis obcaecati optio blanditiis magnam cumque, sed delectus?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aut quidem saepe explicabo facilis! Veniam quis ex quod, molestiae similique iste id assumenda. Assumenda vel quisquam quas dolores modi ex.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sapiente quasi nisi! Nemo, id facilis odit neque accusantium ab doloribus voluptas, dolores laborum a enim dolorum assumenda in. Nam, ipsa!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odit eligendi exercitationem magni incidunt, in placeat similique a quam facilis expedita eaque atque voluptates quibusdam iusto, quo nostrum doloribus quia!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi placeat eveniet reprehenderit in eos, architecto ex nisi quis molestiae nesciunt quisquam quaerat vel eius nemo deleniti quas sunt quibusdam?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam sit libero excepturi expedita eaque, molestiae fugiat quod modi in nesciunt assumenda maiores dolore consectetur dolor laudantium ipsum officia! Voluptatum, aspernatur.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolore dolores tempora ipsa quas delectus ex, porro non, obcaecati et, animi qui! Fugit sequi at temporibus cupiditate tenetur iste eveniet?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus quas in! Quaerat illo rem accusantium. Voluptate, necessitatibus minus! Porro similique accusamus atque voluptatibus facilis eveniet, quia debitis velit consequuntur?
                            </p>
                        </div>
                    </div>
                </div>

                <div className={s.adword__slider}>
                    <AdwordSliderSecond data={ThirdSliderContent}/>
                </div>
            </div>
        </div>
    );
};

export default FrontPage;
