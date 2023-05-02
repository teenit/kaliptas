import React, { useState }  from "react";
import s from "./Products.module.css";
import ProductsRow from "./ProductsRow";
import ArrowImg from "../../../../../img/admin/Фигура 504 копия 2.png";
import { useTranslation } from "react-i18next";
const Products = () =>{
    const {t} = useTranslation()
    const [changePos, setChangePos] = useState({
        nameArr: false,
        napArr: false,
        shopArr: false
    })
    return(
        <div className={s.products__wrap}>
            <table className={s.products__table}>
                <thead className={s.products__thead}>
                    <tr className={s.products__tr}>
                        <td className={s.products__td}></td>
                        <td className={`${s.products__td} ${s.products__td__bold}`}>{t('picture')}</td>
                        <td className={`${s.products__td} ${s.products__td__bold}`}>
                            <span className={s.td__span} onClick={()=>{
                                setChangePos({...changePos, 
                                    nameArr: !changePos.nameArr,
                                    napArr: false,
                                    shopArr: false
                                })
                            }}>{t('name')}</span>
                            <img className={`${s.static__arrow} ${changePos.nameArr ? s.td__arrow__change : null}`} src={ArrowImg} alt="Стрелка" />
                        </td>
                        <td className={`${s.products__td} ${s.products__td__bold}`}>
                            <span className={s.td__span} onClick={()=>{
                                setChangePos({...changePos, 
                                    napArr: !changePos.napArr,
                                    nameArr: false,
                                    shopArr: false
                                })
                            }}>{t('destination')}</span>
                            <img className={`${s.static__arrow} ${changePos.napArr ? s.td__arrow__change : null}`} src={ArrowImg} alt="Стрелка" />
                        </td>
                        <td className={`${s.products__td} ${s.products__td__bold}`}>
                            <span className={s.td__span} onClick={()=>{
                                setChangePos({...changePos, 
                                    shopArr: !changePos.shopArr,
                                    napArr: false,
                                    nameArr: false
                                })
                            }}>{t('store')}</span>
                            <img className={`${s.static__arrow} ${changePos.shopArr ? s.td__arrow__change : null}`} src={ArrowImg} alt="Стрелка" />
                        </td>
                        <td className={s.td}></td>
                    </tr>
                </thead>
                <tbody>
                    <ProductsRow />
                </tbody>
            </table>
        </div>
    )
}
export default Products