import React from "react";
import FrontHeader from "./FrontHeader/FrontHeader";
import FrontContent from "./FrontContent/FrontContent";
import FrontSubheader from "./FrontSubheader/FrontSubheader";
import s from "./Front.module.css"

const Front = ()=>{
    return(
        <div>
            <div className={s.wrapper}>
                <FrontHeader />
                <FrontSubheader />
                <FrontContent />
            </div>
        </div>
    )
}
export {Front}