import React  from "react";
import s from "./Categories.module.css";
import CategoriesRow from "./CategoriesRow";
import { useTranslation } from "react-i18next";

const Categories = () =>{
    const {t} = useTranslation()
    return(
        <div className={s.categories__wrap}>
            <div className={s.categories__in}>
                <h3 className={s.categories__title}>{t('suggestedCategories')}</h3>
                <table className={s.categories__table}>
                    <thead className={s.categories__thead}>
                        <tr className={s.categories__tr}>
                            <td className={s.categories__td}>{t('category')}</td>
                            <td className={s.categories__td}>{t('parentCategory')}</td>
                            <td className={s.categories__td}>{t('store')}</td>
                            <td className={s.categories__td}></td>
                        </tr>
                    </thead>
                    <tbody className={s.categories__tbody}>
                        <CategoriesRow />
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Categories