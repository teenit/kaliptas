import React from "react";
import s from "./Footer.module.css"
import footerLogo from "./../../img/admin/footerLogo.png"
import { useTranslation } from "react-i18next";

const Footer = () =>{
    const {t} = useTranslation()
    return(
        <div className={s.wrap}>
            <div className={s.in}>
                <div className={s.logo}>
                    <img src={footerLogo} alt="Логотип" />
                </div>
                <div className={s.info}>
                    <div className={s.card}>
                        <h3>{t('contact')}</h3>
                        <div className={s.card__item}>
                            <a href="tel:+995 (093) 208 0706">+995 (093) 208 0706</a>
                            <a href="tel:+995 (093) 208 0706">+995 (093) 208 0706</a>
                            <a href="mailto:info@gmail.com">info@gmail.com</a>
                        </div>
                    </div>
                    <div className={s.card}>
                        <h3>{t('companyInformation')}</h3>
                        <div className={s.card__item}>
                            <a href="#">{t('aboutUs')}</a>
                            <a href="#">{t('websiteTermsOfUse')}</a>
                            <a href="#">{t('vacancy')}</a>
                        </div>
                    </div>
                    <div className={s.card}>
                        <h3>{t('assistance')}</h3>
                        <div className={s.card__item}>
                            <a href="#">{t('deliveryAndPayment')}</a>
                            <a href="#">{t('guarantee')}</a>
                            <a href="#">{t('returnOfTheProduct')}</a>
                        </div>
                    </div>
                    <div className={s.card}>
                        <h3>{t('forPartners')}</h3>
                        <div className={s.card__item}>
                            <a href="#">{t('sellThroughUs')}</a>
                            <a href="#">{t('cooperation')}</a>
                        </div>
                    </div>
                </div>
                <p>@ 2023 KALIPTAS | Powered by IT Club Studio</p>
            </div>
        </div>
    )
}
export default Footer