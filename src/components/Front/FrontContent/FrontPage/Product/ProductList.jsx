import React, { useEffect } from "react";
import { useState } from "react";
import s from "./ProductList.module.css";
import ProductCard from "./ProductCard/ProductCard";
import { apiResponse } from "../../../../functions/api";
import { ProductObject } from "../../FrontProduct/ProductObject";
import { getRealLanguage } from "../../../../functions/getLanguage";
import { CategoryObject } from "../../Pages/Category/CategoryObject";

const ProductList = ({categoryForId}) => {
    const [productList, setProductList] = useState([])
    const [categoriesName, setCategoriesName] = useState([])

    useEffect(()=>{
        let productsForFirstList = apiResponse({
            catID: categoryForId
        }, "content/products/get-products-by-category-id.php");
        let loadCategoryById = apiResponse({
            catID: categoryForId
        }, "content/category/get-id-category.php")
        
        Promise.all([loadCategoryById, productsForFirstList]).then((responses)=>{
            let localLoadedCategoriesName = responses[0].map((item)=>{
                return new CategoryObject(item, undefined, undefined,  getRealLanguage());
            })
            setCategoriesName(localLoadedCategoriesName.map((category)=>{
                return category.title
            })) 
            
            let localLoadedProduct = responses[1].map((item)=>{
                return new ProductObject(item, undefined, undefined, getRealLanguage())
            })
            setProductList(localLoadedProduct.map((product)=>{
                return product.id    
            }))
        })

    }, [])

    return (
        <div className={s.wrap}>
            <h3>{categoriesName}</h3>
            <div className={s.wrap__list}>
                <div className={s.wrap__list__in} style={{
                    gridTemplateColumns: `repeat(${productList.length}, 1fr)`
                }}
                /*style={{
                    //gridTemplateColumns: `repeat(${state.cards.length / state.amountInRow}, 1fr)`
                }}*/>
                    {
                        productList.map((id, index) => 
                            <div className={s.in} key={index}>
                               <ProductCard id={id} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
export default ProductList;
