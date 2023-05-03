import React from "react";
import { useState } from "react";
import s from "./Product.module.css"
import ProductCard from "./ProductCard/ProductCard";

const Product = () =>{
    const [state, setState] = useState({
        cards:[
            {
                imgUrl : "",
                imgAlt: "Мягкая игрушка",
                title: "Мягкая игрушка мопс-бревно Валера",
                id:1,
                reviews: 17,
                price: 15,
                dopPrice: 10
            },
            {
                imgUrl : "",
                imgAlt: "Мягкая игрушка",
                title: "Мягкая игрушка мопс-бревно Валера",
                id:2,
                reviews: 17,
                price: 15,
                dopPrice: 10
            },
            {
                imgUrl : "",
                imgAlt: "Мягкая игрушка",
                title: "Мягкая игрушка мопс-бревно Валера",
                id:3,
                reviews: 17,
                price: 15,
                dopPrice: 10
            },
            {
                imgUrl : "",
                imgAlt: "Мягкая игрушка",
                title: "Мягкая игрушка мопс-бревно Валера",
                id:4,
                reviews: 17,
                price: 15,
                dopPrice: 10
            },
            {
                imgUrl : "",
                imgAlt: "Мягкая игрушка",
                title: "Мягкая игрушка мопс-бревно Валера",
                id:5,
                reviews: 17,
                price: 15,
                dopPrice: 10
            }
        ]
    })
    return(
        <div>
            <ProductCard cards = {state.cards}/>
        </div>
    )
}
export default Product;