import React from "react";
import s from "./Store.module.css";
import Header from "../Header/Header";
import StoreContent from "./StoreContent/StoreContent";
import StoreNavigation from "./StoreContent/StoreNavigation";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../../functions/api";

const Store = () =>{
    return(
        <div className={s.wrap}>
            <StoreNavigation />
            <StoreContent />
        </div>
    )
}
export default Store