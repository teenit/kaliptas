import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopHome from "./ShopHome/ShopHome";
import ShopCategories from "./ShopCategories/ShopCategories";
import ShopProducts from "./ShopProducts/ShopProducts";
import ShopSupport from "./ShopSupport/ShopSupport";
import ShopStatistics from "./ShopStatistics/ShopStatistics";
import { api } from "../../functions/api";
import { useState } from "react";
import { useEffect } from "react";

const ShopContent = ({link})=>{
    const [shop,setShop] = useState({load:false});
    useEffect(()=>{
        console.log("arg")
        api((arg)=>{
            console.log(arg)
            setShop({...shop,load:true,...arg})
        },{slug:link},"manage/shop/get-shop.php");
    },[])
   

    return shop.load ? (
        <div>
            <Routes>
                <Route path="/" element={<ShopHome shop={shop} link={link} />}/>
                <Route path="categories" element={<ShopCategories shop={shop} link={link} />}/>
                <Route path="statistics" element={<ShopStatistics shop={shop} link={link} />}/>
                <Route path="products" element={<ShopProducts shop={shop} link={link} />}/>
                <Route path="support" element={<ShopSupport shop={shop} link={link} />}/>
            </Routes>
        </div>
    ):null
}

export default ShopContent