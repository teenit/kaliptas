import React from "react";
import s from "./AdwordSliderFirst.module.css"

const AdwordSliderFirst = ({data}) =>{
    return(
        <div className={s.slide} style={{
            background: "url(" + data.backUrl + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"  
        }}>
            <div className={s.slide__in__wrap}>
                <div className={s.slide__in}>
                    <div className={s.slide__text}>
                        <p className={s.title}>{data.title}<br></br>{data.titleDop}</p>
                        <div className={s.sub__title}>
                            <div className={s.sub__title__inner}>
                                <p className={s.title__dop}>до</p>
                                <div className={s.line}></div>
                            </div>
                            <div className={s.sub__title__inner__dop}>
                                <p className={s.title__price}>{data.skidca}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.slide__btn}>
                    <a href="#" className={s.btn}>Подробнее</a>
                </div>
            </div>
        </div>
    )
}
export default AdwordSliderFirst;