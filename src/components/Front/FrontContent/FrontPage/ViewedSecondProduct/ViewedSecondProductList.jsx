import React, { useState } from "react";
import s from "./ViewedSecondProductList.module.css"
import ViewedSecondProductCard from "./ViewedSecondProductCard/ViewedSecondProductCard";

const ViewedSecondProductList = ({ cards }) => {
    const [state, setState] = useState({
        cards: cards,
    });

    return (
        <div className={s.wrap__list}>
            {state.cards.map((item) => <ViewedSecondProductCard item={item} key={item.id} />)}
        </div>
    );
};
export default ViewedSecondProductList;