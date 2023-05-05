import React, { useState } from "react";
import s from "./ViewedProductList.module.css"
import ViewedProductCard from "./ViewedProductCard/ViewedProductCard";

const ViewedProductList = ({ cards }) => {
    const [state, setState] = useState({
        cards: cards,
    });

    return (
        <div className={s.wrap__list}>
            {state.cards.map((item) => <ViewedProductCard item={item} key={item.id} />)}
        </div>
    );
};
export default ViewedProductList;