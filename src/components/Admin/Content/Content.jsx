import React from "react";
import s from "./Content.module.css";
import Statistic from "./Statistic/Statistic";
import { Route, Routes } from "react-router-dom";
import Users from "./Users/Users";
import { Shops } from "./Shops/Shops";
import Moderation from "./Moderation/Moderation";
import Store from "../Store/Store";
import Categories from "./Categories/Categories";
import Orders from "./Orders/Orders";

const Content = () =>{
    return(
        <div className={s.wrap}>
            <Routes>
                <Route path={'users'} element = {<Users />}/>
                <Route path={'/'} element = {<Statistic />}/>
                <Route path={'shops'} element = {<Shops />}/>
                <Route path={'moderation'} element = {<Moderation />}/>
                <Route path={'categories'} element = {<Categories />}/>
                <Route path={'orders'} element = {<Orders />}/>
                <Route path={'shops/shop/:link/*'} element = {<Store />}></Route>
            </Routes>
        </div>
    )
}
export default Content;