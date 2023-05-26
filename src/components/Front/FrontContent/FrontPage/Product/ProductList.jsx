import React, { useEffect } from "react";
import { useState } from "react";
import s from "./ProductList.module.css";
import ProductCard from "./ProductCard/ProductCard";

const ProductList = ({ cards }) => {
    
    const [state, setState] = useState({
        cards: cards,
        amountInRow: window.innerWidth < 600 ? 2:1
    });

    return (
        <div className={s.wrap__list}>
            <div className={s.wrap__list__in} style={{
                gridTemplateColumns: `repeat(${state.cards.length / state.amountInRow}, 1fr)`
                
            }}>
                {
                    state.cards.map((id, index) => 
                        <div className={s.in} key={index}>
                            <ProductCard id={id} />
                        </div>
                    )
                }
            </div>
        </div>
    );
};
export default ProductList;
