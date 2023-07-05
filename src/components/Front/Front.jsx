import React, { useEffect, useState } from "react";
import FrontHeader from "./FrontHeader/FrontHeader";
import FrontContent from "./FrontContent/FrontContent";
import FrontSubheader from "./FrontSubheader/FrontSubheader";
import s from "./Front.module.css"
import Footer from "../Footer/Footer";
import Maintenance from "../General/Maintenance/Maintenance";
import { store } from "../../Store";
import { Alert, Snackbar } from "@mui/material";
import { hideTooltip } from "../../Store/Slices/cartSlice";
import { useTranslation } from "react-i18next";

const Front = ()=>{

    const [tooltipState, setTooltipState] = useState(store.getState().cart);
    const {t} = useTranslation();

    store.subscribe(()=>{
        setTooltipState(store.getState().cart);
    })

    const handleClose = () =>{
        store.dispatch(hideTooltip())
    }

    return(
        <div>
        <Maintenance />
            <div className={s.wrapper}>
        <FrontHeader />
        <FrontSubheader />
        <FrontContent />
        <Snackbar
            open={tooltipState ? tooltipState.showAdded : false}
            autoHideDuration={2000}
            onClose={handleClose}
            message={tooltipState ? tooltipState.text : false}
            ><Alert severity="success">{t("add-cart-item")}</Alert></Snackbar>
        <Footer />
            </div>
        </div>
    )
}
export {Front}