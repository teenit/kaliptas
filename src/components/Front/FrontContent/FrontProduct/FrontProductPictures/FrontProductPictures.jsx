import React from "react";
import s from './ItemPics.module.css'
import { useState } from "react";

const FrontProductPictures = () => {



    return (

        <div className={s.pictures}>
            <div className={s.photo__wrap}>

                <div className={s.photo}></div>
            </div>
            <div className={s.pictos}>
                <div className={s.picto__wrap} tabIndex={0} >
                    <div className={s.picto}></div>
                </div>
                <div className={s.picto__wrap} tabIndex={0}>
                    <div className={s.picto}></div>
                </div>
                <div className={s.picto__wrap} tabIndex={0}>
                    <div className={s.picto}></div>
                </div>
                <div className={s.picto__wrap} tabIndex={0}>
                    <div className={s.picto}></div>
                </div>
                <div className={s.picto__wrap} tabIndex={0}>
                    <div className={s.picto}></div>
                </div>

            </div>
        </div>
    )

}

export default FrontProductPictures;