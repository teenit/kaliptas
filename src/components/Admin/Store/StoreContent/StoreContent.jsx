import React from "react";
import ShopContent from "../../../Shop/ShopContent/ShopContent";
import s from './store.module.css';
import { useParams } from "react-router-dom";
const StoreContent = () =>{
    const link = useParams()
    
    return(
        
        <div>
            <ShopContent link = {link.link} />
        </div>
    )
}
export default StoreContent