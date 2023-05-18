import React, { useEffect } from "react";
import { useState } from "react";
import s from "./ProductList.module.css";
import ProductCard from "./ProductCard/ProductCard";

const ProductList = ({ cards }) => {
    const [state, setState] = useState({
        cards: cards
    });

    return (
        <div className={s.wrap__list}>
            {
                state.cards.map((id, index) => <div className={s.in} key={index}>
                    <ProductCard id={id} />
                </div>)
            }
        </div>
    );
};
export default ProductList;
