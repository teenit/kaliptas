import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {CategoryObject} from "./CategoryObject";
import s from "./Category.module.css"
import ProductList from "../../FrontPage/Product/ProductList";
import ProductCard from "../../FrontPage/Product/ProductCard/ProductCard";
import {Slider} from "@mui/material";
import {api} from "../../../../functions/api";
import HomeIcon from '@mui/icons-material/Home';
import {ProductObject} from "../../FrontProduct/ProductObject";

function Category(props) {
    const params = useParams();
    const [ready,setReady] = useState(false)
    const [id, setId] = useState(params.id);
    console.log("Id: ", id);
    const [products, setProducts] = useState([]);
    //{
    //             imgUrl: "",
    //             imgAlt: "Мягкая игрушка",
    //             title: "Мягкая игрушка мопс-бревно Валера",
    //             id: 1,
    //             reviews: 17,
    //             price: 1000,
    //             dopPrice: 10,
    //         }
    const [displayedProducts, setDisplayedProducts] = useState({
        products : products
    })
    const [category, setCategory] = useState(CategoryObject.emptyCategory(id));

    useEffect(()=>{
        setId(params.id);
        api((response)=>{
            let loadedCategory = new CategoryObject(response[0]);
            setCategory(loadedCategory)
            api((response)=>{
                let loadedProducts = response.map((product)=>{
                                return new ProductObject(product);
                })
                console.log("Loaded: ", loadedProducts)

                setProducts(loadedProducts);
                setDisplayedProducts({products: loadedProducts});
                setReady(true);
            }, {
                catID: id
            }, "content/products/get-products-by-category-id.php")
        },{
            catID: id
        },"content/category/get-id-category.php")
    },[id, params.id])

    const relatedProductList = [22,23]; // Must be loadRelated()
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

    return ready ? (
        <div className={s.wrap}>
            <div className={s.nav__container}>
                <Link to="../catalog"><HomeIcon/></Link>
                {
                    category.getParents().map((cat, index) => {
                        return(
                            <span  key={index}>
                                 <span className={s.span__sign}>></span><Link to={"../catalog/" + cat.id}>{cat.title}</Link>
                            </span>
                        )
                    })
                }
                <span className={s.span__sign}>></span>
                <span>{category.title}</span>
            </div>
            <div className={s.main__container}>
                <div className={s.filter__container}>
                    <div>
                        <b>Диапазон цен</b>
                        <div className={s.input__line}>
                            <input className={s.filter__input} type="text" value={value[0]} onChange={(event)=>{
                                let newValue = +event.target.value;
                                if (newValue < value[1]) {
                                    setValue([newValue, value[1]])
                                }
                            }}/>
                            <div className={s.connector}></div>
                            <input className={s.filter__input} type="text" value={value[1]} onChange={(event)=>{
                                let newValue = +event.target.value;
                                if (newValue > value[0]) {
                                    setValue([value[0], newValue])
                                }
                            }}/>
                            <div className={s.apply} onClick={(event)=> applyFilter()}>Ok</div>
                        </div>


                    </div>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        size="small"
                        // getAriaValueText={valuetext}
                        min={0}
                        max={maxPrice}
                    />
                </div>
                <div className={s.cards__container}>
                    {displayedProducts.products.map((item, index)=>{
                        return (
                            <ProductCard id={item.id} key={index} />
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
    ):null
}

export default Category;