import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import s from "./FrontSlide.module.css"


const FrontSlide = ({ item }) => {

    return (
        <div className={s.slide} style={{
            background: "url(" + item.backUrl + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
            
        }}>
            <div className={s.slide__in}>
                <div className={s.slide__text}>
                    <p className={s.title}>{item.title}<br></br>{item.titleDop}</p>
                    <div className={s.sub__title}>
                        <div className={s.sub__title__inner}>
                            <p className={s.title__dop}>до</p>
                            <div className={s.line}></div>
                        </div>
                        <div className={s.sub__title__inner__dop}>
                            <p className={s.title__price}>{item.skidca}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontSlide;