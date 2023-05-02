import React from "react";
import s from './Content.module.css'
import { Route, Routes } from "react-router-dom";
import FrontPage from "./FrontPage/FrontPage";
import FrontProduct from "./FrontProduct/FrontProduct";
import Cart from "./Pages/Cart/Cart";
import Contacts from "./Pages/Contacts/Contacts";
import Cabinet from "./Pages/Cabinet/Cabinet";
import Catalog from "./Pages/Catalog/Catalog";
import Order from "./Pages/Order/Order";
import TextPage from "./Pages/TextPage/TextPage";
const FrontContent = () => {

    return (
        <div className={s.wrapper}>
            <Routes>
                <Route path={''} element = {<FrontPage />}/>
                <Route path={'/product/:link'} element = {<FrontProduct />}/>
                <Route path={'/cart'} element = {<Cart />}/>
                <Route path={'/contact'} element = {<Contacts />}/>
                <Route path={'/cabinet'} element = {<Cabinet />}/>
                <Route path={'/catalog'} element = {<Catalog />}/>
                <Route path={'/order'} element = {<Order />}/>
                <Route path={'/page/*'} element = {<TextPage />}/>
            </Routes>
        </div>
    )
}
export default FrontContent;
