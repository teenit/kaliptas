import React from "react";
import s from './style.module.css'
import { useTranslation } from "react-i18next";
const Communication = ()=>{
    const {t} = useTranslation()
    return(
        <div className={s.wrap}>
            {t('in-development')}
        </div>
    )
}

export default Communication;