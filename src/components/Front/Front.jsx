import React from "react";
import FrontHeader from "./FrontHeader/FrontHeader";
import FrontContent from "./FrontContent/FrontContent";
import FrontSubheader from "./FrontSubheader/FrontSubheader";
import { Footer } from "../Footer/Footer";

const Front = ()=>{
    return(
    <div className="wrapper">
        <FrontHeader />
        <FrontSubheader />
        <FrontContent />
        <Footer />
    </div>

    )
}
export {Front}