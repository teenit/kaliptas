import React from "react";
import { useState } from "react";
import s from "./ProductSecondList.module.css";
import ProductSecondCard from "./ProductSecondCard/ProductSecondCard";

const ProductSecondList = ({ cards }) => {
    const [state, setState] = useState({
        cards: cards,
    });

    return (
        <div className={s.wrap__list}>
            {state.cards.map((item) => <ProductSecondCard item={item} key={item.id} />)}
        </div>
    );
};
export default ProductSecondList;