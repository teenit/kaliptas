import React from "react";
import s from './ItemDesc.module.css'
import FrontProductFloat from "./FrontProductFloat/FrontProductFloat";
import FrontDescriptionMenu from "./FrontDescriptionMenu/FrontDescriptionMenu";
const FrontProductDescription = () => {

    return (
        <div className={s.desc}>
            <FrontDescriptionMenu />
            <FrontProductFloat />
        </div>
    )
}
export default FrontProductDescription;