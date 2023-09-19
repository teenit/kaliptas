import React from "react";
import s from "./PrivacyPolicy.module.css"
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy(){
    const {t} = useTranslation()
    return(
        <div className={s.wrap}>
            <h1 className={s.title}>{t('privacy-policy-pricavy')}</h1>
        </div>
    )
}
