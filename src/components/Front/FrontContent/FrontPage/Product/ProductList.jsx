import React, { useEffect } from "react";
import { useState } from "react";
import s from "./ProductList.module.css";
import ProductCard from "./ProductCard/ProductCard";

const ProductList = ({ cards }) => {
    const [state, setState] = useState({
        cards: cards,
        //dopAmountOnPage: 0
    });

    /*let screenWidth = window.innerWidth 
    
    const checkWidth = () =>{
        console.log(window.innerWidth);
        if(screenWidth < 600){
            setState({...state, dopAmountOnPage: 2})
            console.log(state.dopAmountOnPage)
        }else{
            setState({...state, dopAmountOnPage: 6})
            console.log(state.dopAmountOnPage)
        }
    }

    useEffect(()=>{
        checkWidth()
    }, [])*/
    
    return (
        <div className={s.wrap__list} /*style={{
            gridTemplateColumns: `repeat(${state.dopAmountOnPage}, 1fr)`
        }}*/>
            {state.cards.map((id, index) => <ProductCard id={id} key={index} />)}
        </div>
    );
};
export default ProductList;
