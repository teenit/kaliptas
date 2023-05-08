import React from "react";
import FrontHeader from "./FrontHeader/FrontHeader";
import FrontContent from "./FrontContent/FrontContent";
import FrontSubheader from "./FrontSubheader/FrontSubheader";
import s from "./Front.module.css"
import { Footer } from "../Footer/Footer";

const Front = ()=>{
    return(
        <div>
            <div className={s.wrapper}>
        <FrontHeader />
        <FrontSubheader />
        <FrontContent />
        <Footer />
            </div>
        </div>
    )
}
export {Front}