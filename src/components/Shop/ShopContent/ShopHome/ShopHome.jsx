import React from "react";
import { useEffect } from "react";
import { api } from "../../../functions/api";

const ShopHome = ({link})=>{
    useEffect(()=>{
        api((arg)=>{
            console.log(arg)
        },{slug:link},"manage/shop/get-shop.php")
    },[])
    return(
        <div>In development</div>
    )
}
export default ShopHome;