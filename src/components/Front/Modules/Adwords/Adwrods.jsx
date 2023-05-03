import React from "react";
import s from "./Adwords.module.css"
import AdwordSlider from "./AdwordSlider/AdwordSlider";
import { useState } from "react";


const Adwords = () =>{
    const [data, setData] = useState({
        data: [
            {
                title: "Время осеннего",
                titleDop : "шопинга!",
                skidca: "50 %",
                backUrl: ""
            },
            {
                title: "Время осеннего",
                titleDop : "шопинга!",
                skidca: "50 %",
                backUrl: ""
            },
            {
                title: "Время осеннего",
                titleDop : "шопинга!",
                skidca: "50 %",
                backUrl: ""
            },
            {
                title: "Время осеннего",
                titleDop : "шопинга!",
                skidca: "50 %",
                backUrl: ""
            },
            {
                title: "Время осеннего",
                titleDop : "шопинга!",
                skidca: "50 %",
                backUrl: ""
            },
            {
                title: "Время осеннего",
                titleDop : "шопинга!",
                skidca: "50 %",
                backUrl: ""
            },
        ]
    })
    return(
        <div className={s.wrap}>
            <AdwordSlider data = {data.data}/>
        </div>
    )
}
export default Adwords