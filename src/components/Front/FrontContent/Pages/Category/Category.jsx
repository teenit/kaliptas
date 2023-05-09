import React, {useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {CategoryObject} from "./CategoryObject";
import s from "./Category.module.css"
import ProductList from "../../FrontPage/Product/ProductList";
import ProductCard from "../../FrontPage/Product/ProductCard/ProductCard";
import {Slider} from "@mui/material";

function Category(props) {
    const params = useParams();
    const categoryName = params.categoryName;
    const category = new CategoryObject(categoryName);

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

    const products = category.loadProducts();

    const [displayedProducts, setDisplayedProducts] = useState({
        products : products
    })

    const maxPrice = 10000;

    const [value, setValue] = React.useState([0, maxPrice]);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    const applyFilter = function () {
        const filteredProducts = products.filter((item)=> item.price >= value[0] && item.price <= value[1])

        setDisplayedProducts({ products: filteredProducts});
    }

    return (
        <div className={s.wrap}>
            <div className={s.nav__container}>

            </div>
            <div className={s.main__container}>
                <div className={s.filter__container}>
                    <div>Price:
                        <input type="text" value={value[0]} onChange={(event)=>{
                            let newValue = +event.target.value;
                            if (newValue < value[1]) {
                                setValue([newValue, value[1]])
                            }
                        }}/>
                        <input type="text" value={value[1]} onChange={(event)=>{
                            let newValue = +event.target.value;
                            if (newValue > value[0]) {
                                setValue([value[0], newValue])
                            }
                        }}/>
                        <button onClick={(event)=> applyFilter()}>Ok</button>
                    </div>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        // getAriaValueText={valuetext}
                        min={0}
                        max={maxPrice}
                    />
                </div>
                <div className={s.cards__container}>
                    {displayedProducts.products.map((item, index)=>{
                        return (
                            <ProductCard item={item} key={index} />
                        );
                    })}
                </div>
            </div>
            <h3 className={s.title}>Похожие товары</h3>
            <div className={s.product__in}>
                <ProductList cards={relatedProductList} />
            </div>
            <h3 className={s.title}>Вы смотрели</h3>
            <div className={s.product__in}>
                <ProductList cards={youWatchedList} />
            </div>
        </div>
    );
}

export default Category;