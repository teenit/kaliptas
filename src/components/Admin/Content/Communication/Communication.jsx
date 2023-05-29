import React from "react";
import s from './style.module.css'
import { t } from "i18next";
const Communication = ()=>{

    return(
        <div className={s.wrap}>
            {t('In development')}
        </div>
    )
}

export default Communication;