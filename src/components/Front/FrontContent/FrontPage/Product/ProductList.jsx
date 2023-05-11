import React from "react";
import { useState } from "react";
import s from "./ProductList.module.css";
import ProductCard from "./ProductCard/ProductCard";

const ProductList = ({ cards }) => {
    const [state, setState] = useState({
        cards: cards,
    });

    return (
        <div className={s.wrap__list}>
            {state.cards.map((id, index) => <ProductCard id={id} key={index} />)}
        </div>
    );
};
export default ProductList;
