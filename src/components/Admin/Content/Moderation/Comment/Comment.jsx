import React  from "react";
import s from "./Comment.module.css";
import CommentRow from "./CommentRow";
import ArrowImg from "../../../../../img/admin/Фигура 504 копия 2.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Comment = () =>{
    const {t} = useTranslation()
    const [changePos, setChangePos] = useState({
        comArr: false,
        tovArr: false,
        dateArr: false
    })
    return(
        <div className={s.comment__wrap}>
            <table className={s.comment__table}>
                <thead className={s.comment__thead}>
                    <tr className={s.comment__tr}>
                        <td className={s.comment__td}></td>
                        <td className={`${s.comment__td} ${s.comment__td__bold}`}>{t('name')}</td>
                        <td className={`${s.comment__td} ${s.comment__td__bold}`}>
                            <span className={s.td__span} onClick={()=>{
                                setChangePos({...changePos, 
                                    comArr: !changePos.comArr,
                                    tovArr: false,
                                    dateArr: false
                                })
                            }}>{t('comment')}</span>
                           <img className={`${s.static__arrow} ${changePos.comArr ? s.td__arrow__change : null}`} src={ArrowImg} alt="Стрелка" />
                        </td>
                        <td className={`${s.comment__td} ${s.comment__td__bold}`}>
                            <span className={s.td__span} onClick={()=>{
                                setChangePos({...changePos, 
                                    comArr: false,
                                    tovArr: !changePos.tovArr,
                                    dateArr: false
                                })
                            }}>{t('products')}</span>
                           <img className={`${s.static__arrow} ${changePos.tovArr ? s.td__arrow__change : null}`} src={ArrowImg} alt="Стрелка" />
                        </td>
                        <td className={`${s.comment__td} ${s.comment__td__bold}`}>
                            <span className={s.td__span} onClick={()=>{
                                setChangePos({...changePos, 
                                    comArr: false,
                                    tovArr: false,
                                    dateArr: !changePos.dateArr
                                })
                            }}>{t('date')}</span>
                           <img className={`${s.static__arrow} ${changePos.dateArr ? s.td__arrow__change : null}`} src={ArrowImg} alt="Стрелка" />
                        </td>
                        <td className={s.td}></td>
                    </tr>
                </thead>
                <tbody className={s.comment__tbody}>
                    <CommentRow />
                </tbody>
            </table>
        </div>
    )
}
export default Comment