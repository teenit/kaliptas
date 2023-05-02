import React from "react";
import s from "./Statistic.module.css";
import logoImg from "./../../../../img/admin/logoShop.png";
import logoImgSec from "./../../../../img/admin/logoImgSec.png"
import { useTranslation } from "react-i18next";

const Statistic = () =>{
    const {t} = useTranslation()
    return(
        <div className={s.wrap}>
            <div className={s.in}>
                <div className={s.top__shops}>
                    <div className={s.shop__in}>
                        <div className={s.shop__item}>
                            <h3>{t('bestShopOfMonth')}</h3>
                            <p>1024 {t('item')}</p>
                        </div>
                        <div className={s.shop__item}>
                            <img className={s.shop__logo} src={logoImg} alt="Логотип магазина" />
                            <div className={s.mark}>
                                <div className={s.star}>
                                    <h2>4.2</h2>
                                </div>
                                <a href="#">97 {t('reviews')}</a>
                            </div>
                        </div>
                        <div className={s.shop__item}>
                            <h2>BSMLight</h2>
                            <h2>1402$</h2>
                        </div>
                        <div className={`${s.shop__item} ${s.shop__item__big}`}>
                            <img className={s.shop__logo__sec} src={logoImgSec} alt="Логотип магазина" />
                            <h4>SDCompany</h4>
                            <p>890 {t('item')}</p>
                            <h4>900$</h4>
                        </div>
                        <div className={`${s.shop__item} ${s.shop__item__big}`}>
                            <img className={s.shop__logo__sec} src={logoImgSec} alt="Логотип магазина" />
                            <h4>SDCompany</h4>
                            <p>890 {t('item')}</p>
                            <h4>900$</h4>
                        </div>
                    </div>
                </div>
                <div className={s.top__categories}>
                    <h3>{t('topCategories')}</h3>
                </div>
            </div>
            <div className={`${s.in} ${s.in__big}`}>
                <div className={s.shop__in}>
                    <h3>{t('chart')}</h3>
                </div>
            </div>
            <div className={`${s.in} ${s.in__big}`}>
                <div className={s.shop__in}>
                    <h3>{t('soldItems')}</h3>
                </div>  
            </div>
        </div>
    )
}
export default Statistic;