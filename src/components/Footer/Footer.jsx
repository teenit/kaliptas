import React from "react";
import s from "./Footer.module.css"
import footerLogo from "./../../img/admin/footerLogo.png"
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

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
                            <a href="mailto:info@kaliptas.com">info@kaliptas.com</a>
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
                            <NavLink to="/page/privacy-policy">Політика конфіденційності</NavLink>
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
                <div className={s.copyright}>
                    <p>@ 2023 KALIPTAS | Powered by </p>
                    <NavLink className={s.copyright__link} to={"https://studio.itclub.in.ua/"} target="_blank">IT Club Studio</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Footer