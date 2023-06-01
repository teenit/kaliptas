import React, { useState } from "react";
import s from './Shops.module.css'; 
import RegisterStore from "./RegisterStore/RegisterStore";
import { useEffect } from "react";
import { api } from "../../../functions/api";
import ShopsRow from "./ShopsRow";
import ArrowImg from "../../../../img/admin/Фигура 504 копия 2.png"
import { useTranslation } from "react-i18next";

const Shops = () =>{
    const {t} = useTranslation()
    const [state, setState] = useState(false);
    const [newStore, setNewStore] = useState({
        title:{
            en:"",
            ru:"",
            ge:""
        },
        description:{
            en:"",
            ru:"",
            ge:""
        },
        typeProducts:{
            en:"",
            ru:"",
            ge:""
        },
        slug:""
    })
    const [shops, setShops] = useState([]);
    const [changePos, setChangePos] = useState({
        nameArr: false,
        contArr: false,
        raitArr: false,
        rekArr: false
    })

    useEffect(()=>{
        api((arg)=>{
            setShops(arg)
        },{},"manage/shops/get-shops.php")
    },[])

    const regStore = () =>{
        api((arg)=>{
            window.alert(t(arg.message))
            api((arg)=>{
                setShops(arg)
            },{},"manage/shops/get-shops.php")
        },{slug:newStore.slug,shop:{...newStore}},"manage/shops/create-shop.php")
    }

    return(
        <div className={s.wrap}>
            <div className={s.add__shop} onClick={()=>setState(!state)}>
                <span className={`${s.span} ${s.span1}`}></span>
                <span className={`${s.span} ${s.span2}`}></span>
            </div>

            {state ? <RegisterStore regStore = {regStore} newStore = {newStore} setNewStore = {setNewStore} btn={t('register')} close = {()=>setState(!state)}/> : null}
            
            <div className={s.main__wrap}>
                <table className={s.table}>
                    <thead className={s.thead}>
                        <tr className={s.tr}>
                            <td className={s.td}></td>
                            <td className={s.td}>
                                <span className={s.td__span}>{t('logo')}</span>
                            </td>
                            <td className={s.td}>
                                <span className={s.td__span} onClick={()=>{
                                    setChangePos({...changePos, 
                                        nameArr: !changePos.nameArr,
                                        contArr: false,  
                                        raitArr: false,
                                        rekArr: false})
                                }}>{t('name')}</span>
                                <img className={`${s.static__arrow} ${changePos.nameArr ? s.td__arrow__change : null}`} src={ArrowImg} alt="Стрелка" />
                            </td>
                            <td className={s.td}>
                                <span className={s.td__span} onClick={()=>{
                                    setChangePos({...changePos, 
                                        nameArr: false,
                                        contArr: !changePos.contArr,
                                        raitArr: false,
                                        rekArr: false})
                                }}>{t('contact')}</span>
                                <img className={`${s.static__arrow} ${changePos.contArr ? s.td__arrow__change : null}`} src={ArrowImg} alt="Стрелка" />
                            </td>
                            <td className={s.td}>
                                <span className={s.td__span} onClick={()=>{
                                    setChangePos({...changePos, 
                                        nameArr: false,
                                        contArr: false,
                                        raitArr: !changePos.raitArr,
                                        rekArr: false})
                                }}>{t('products')}</span>
                                <img className={`${s.static__arrow} ${changePos.raitArr ? s.td__arrow__change : null}`} src={ArrowImg} alt="Стрелка" />
                            </td>
                            <td className={s.td}>
                                <span className={s.td__span} onClick={()=>{
                                    setChangePos({...changePos, 
                                        nameArr: false,
                                        contArr: false,
                                        raitArr: false,
                                        rekArr: !changePos.rekArr})
                                }}>{t('advertising')}</span>
                                <img className={`${s.static__arrow} ${changePos.rekArr ? s.td__arrow__change : null}`} src={ArrowImg} alt="Стрелка" />
                            </td>
                            <td className={s.td}></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           shops.map(
                            (item,index)=><ShopsRow shop={item} key={item.slug} index={index + 1}/>
                           ) 
                        }
                    </tbody>
                </table>
            </div>  
        </div>
    )
}
export {Shops}