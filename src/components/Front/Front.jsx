import React from "react";
import FrontHeader from "./FrontHeader/FrontHeader";
import FrontContent from "./FrontContent/FrontContent";
import FrontSubheader from "./FrontSubheader/FrontSubheader";

const Front = ()=>{
    return(
    <div className="wrapper">
        <FrontHeader />
        <FrontSubheader />
        <FrontContent />
    </div>

    )
}
export {Front}