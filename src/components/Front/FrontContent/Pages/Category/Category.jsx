import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {CategoryObject} from "./CategoryObject";
import s from "./Category.module.css"
import ProductList from "../../FrontPage/Product/ProductList";
import ProductCard from "../../FrontPage/Product/ProductCard/ProductCard";
import {Slider} from "@mui/material";
import {api} from "../../../../functions/api";
import HomeIcon from '@mui/icons-material/Home';

function Category(props) {
    const id = useParams().id;
    const [isLoaded, setLoaded] = useState(false)
    const [products, setProducts] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState({
        products : products
    })
    const [category, setCategory] = useState(CategoryObject.emptyCategory);

    api((response)=>{
        if (response !== undefined && ! isLoaded) {
            setLoaded(true);
            console.log("From category creation",response)
            let loadedCategory = new CategoryObject(response[0]);
            let loadedProducts = loadedCategory.loadProducts()
            setCategory(loadedCategory)
            setProducts(loadedProducts);
            setDisplayedProducts({products: loadedProducts});
        }
    }, {
        catID: id
    }, "content/category/get-id-category.php")

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

    //Price filter
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
                <Link to="../catalog"><HomeIcon/></Link>
                >
                {
                    category.getParents().map((cat, index) => {
                        return(
                            <span>
                                <Link key={index} to={"../catalog/" + cat.id}>{cat.title}</Link>>
                            </span>
                        )
                    })
                }
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