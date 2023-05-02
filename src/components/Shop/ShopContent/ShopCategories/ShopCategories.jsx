import React from "react";
import s from './ShopCategories.module.css';
import AllCategories from "./AllCategories/AllCategories";

const ShopCategories = ({shop})=>{

    return(
        <div>
            <AllCategories shop={shop}/>
        </div>
    )
}

export default ShopCategories