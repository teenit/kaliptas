import s from './Content.module.css'
import {Navigate, Route, Routes} from "react-router-dom";
import FrontPage from "./FrontPage/FrontPage";
import FrontProduct from "./FrontProduct/FrontProduct";
import Cart from "./Pages/Cart/Cart";
import Contacts from "./Pages/Contacts/Contacts";
import Catalog from "./Pages/Catalog/Catalog";
import Order from "./Pages/Order/Order";
import TextPage from "./Pages/TextPage/TextPage";
import Category from "./Pages/Category/Category";
import Default404 from "../../General/404/Default404";
import Profile from "./Pages/Profile/Profile";
const FrontContent = () => {

    return (
        <div className={s.wrapper}>
            <Routes>
                <Route path={'/ge'}  element={<Navigate to='/' />}/>
                <Route path={''} element = {<FrontPage />}/>
                <Route path={'/product/:id'} element = {<FrontProduct />}/>
                <Route path={'/cart'} element = {<Cart />}/>
                <Route path={'/contact'} element = {<Contacts />}/>
                <Route path={'/profile'} element = {<Profile />}/>
                <Route path={'/catalog'} element = {<Catalog />}/>
                <Route path={'/catalog/:id'} element={<Category />}/>
                <Route path={'/order'} element = {<Order />}/>
                <Route path={'/page/*'} element = {<TextPage />}/>
                <Route path={'/*'} element = {<Default404 />}/>
            </Routes>
        </div>
    )
}
export default FrontContent;
