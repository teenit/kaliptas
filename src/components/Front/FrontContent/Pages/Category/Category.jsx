import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {CategoryObject} from "./CategoryObject";
import s from "./Category.module.css"
import ProductList from "../../FrontPage/Product/ProductList";
import ProductCard from "../../FrontPage/Product/ProductCard/ProductCard";
import {Slider} from "@mui/material";
import {api, apiResponse} from "../../../../functions/api";
import HomeIcon from '@mui/icons-material/Home';
import {getLanguageForLink, getLanguageForRootLink, getRealLanguage} from "../../../../functions/getLanguage";
import {useTranslation} from 'react-i18next'

function Category(props) {
    const {t}  = useTranslation()
    const params = useParams();
    const [ready,setReady] = useState(false)
    const [displayedProducts, setDisplayedProducts] = useState([])
    const [category, setCategory] = useState({});

    useEffect(()=>{
        api((categoryResponse)=> {
                // let loadedCategory = new CategoryObject(response[0]);
                // setCategory(loadedCategory)
                if (categoryResponse === undefined) {
                    throw new Error("Category response is null");
                }
                let categoryId = CategoryObject.getIdFromResponse(categoryResponse);
                let productsPromise = apiResponse({
                    catID: params.id
                }, "content/products/get-products-by-category-id.php");
                let parentCatsPromise = apiResponse({
                    catID: params.id
                }, "content/category/get-tree-categories-by-id.php");

                Promise.all([productsPromise, parentCatsPromise]).then((promiseResponses) => {
                    if (promiseResponses[0] === undefined) {
                        throw new Error("Product response is null");
                    }
                    if (promiseResponses[1] === undefined) {
                        throw new Error("Parents response is null");
                    }
                    let endCategory = new CategoryObject(
                        categoryResponse[0],
                        promiseResponses[0],
                        promiseResponses[1],
                        getRealLanguage())
                    setCategory(endCategory);
                    setDisplayedProducts(endCategory.products);
                    setReady(true);

                })
            }
            ,{
                catID: params.id
            },"content/category/get-id-category.php");
    },[params.id]);

    const relatedProductList = [50]; // Must be loadRelated()
    const youWatchedList = relatedProductList;

    //Price filter
    const maxPrice = 10000;
    const [value, setValue] = React.useState([0, maxPrice]);
    const handleChange = (event, newValue) => {
        setValue(newValue)
    };
    const applyFilter = function () {
        const filteredProducts = category.products.filter((item)=> item.price >= value[0] && item.price <= value[1])
        setDisplayedProducts(filteredProducts);
    }
    const [showFilter, setShowFilter] = useState(false)
    return ready ? (
        <div className={s.wrap}>
            <div className={s.nav__container}>
                <Link to="../catalog"><HomeIcon/></Link>
                <div className={s.nav__container__in}>
                    {
                        category.parentCategories.length !== 0 ?
                        category.parentCategories.slice(0, category.parentCategories.length - 1).map((cat, index) => {
                            return(
                                <span  key={index}>
                                    <span className={s.span__sign}>{">"}</span><Link className={s.span__link} to={getLanguageForRootLink() + "/catalog/" + cat.id}>{cat.title}</Link>
                                </span>
                            )
                        }) : null
                    }
                    <div className={s.last__part__nav}>
                        <span className={s.span__sign}>{">"}</span>
                        <span>{category.title}</span>
                    </div>
                </div>
            </div>
            <div className={s.mobile__filter} onClick={()=>{
                setShowFilter(!showFilter)
            }}>
                <p>Фильтры</p>
            </div>
            {
                showFilter ? 
                    <div className={s.filter__container__dop}>
                        <div className={s.filter__container__in}>
                            <p>{t('category-priceRange')}</p>
                            <div className={s.input__line}>
                                <div className={s.input__line__in}>
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
                                </div>
                                <div className={s.apply} onClick={(event)=> applyFilter()}>Ок</div>
                            </div>

                            <Slider style={{
                                width: "95%",
                                padding: "5px 0px",
                                margin: "auto"
                            }}
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
                    </div>
                : null
            }

            <div className={s.main__container}>

                <div className={s.filter__container}>
                    <div className={s.filter__container__in}>
                        <p>{t('category-priceRange')}</p>
                        <div className={s.input__line}>
                            <div className={s.input__line__in}>
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
                            </div>
                            <div className={s.apply} onClick={(event)=> applyFilter()}>Ок</div>
                        </div>
                        
                        <Slider style={{
                            width: "95%",
                            padding: "5px 0px",
                            margin: "auto"
                        }}
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
                </div>

                <div className={s.cards__container}>
                    {displayedProducts.length > 0
                        ? displayedProducts.map((item, index)=>{
                            return (
                                <div className={s.product__wr} key={index} >
                                    <ProductCard id={item.id}/>
                                </div>
                            );
                            })
                        : null
                    }
                </div>

            </div>
            <div className={s.product__in}>
                <ProductList categoryForId = {19}/>
            </div>
            <div className={s.product__in}>
                <ProductList categoryForId = {22}/>
            </div>
        </div>
    ):null
}

export default Category;