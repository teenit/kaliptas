import React, { useState } from "react";
import { replaceStr } from "../../../../../functions/replaceStr";
import s from './../ProductPrice/ProductPrice.module.css'
const ProductCharacteristic = ({char,lang,addState}) =>{

    const [state,setState] = useState(char)
    const onClickHendler = (index,keyObj,e)=>{
        const newItems = state.map((item,i)=>{
            if(i === index){
                return {...item,[keyObj]:{...item[keyObj],[lang]:e}}
            }else{
                return {...item}
            }
        });
        setState(newItems);
    }
    const removeItem = (index)=>{
        if(state.length === 1) return alert("Нельзя удалить последний элемент")
        const newItems = state.filter((item,i)=>{
            if(i === index){
                
            }else{
                return {...item}
            }
        });
        setState(newItems)
    }

    return(
        <div>
            <div>
                {
                    
                    state.map((elem,index)=>{
                        return(
                            <div key={index} className={s.var__item}>
                                <div className={s.var__title}>
                                    {lang == 'ge' ? <input className={s.var__title__inp} value={elem.title[lang]} type="text" placeholder="CharGE" onChange={(e)=>{
                                        onClickHendler(index,'title',replaceStr(e.target.value));
                                        addState(state)
                                    }}/>:null}
                                    {lang == 'en' ? <input className={s.var__title__inp} value={elem.title[lang]} type="text" placeholder="CharEN" onChange={(e)=>{
                                        onClickHendler(index,'title',replaceStr(e.target.value));
                                        addState(state)
                                    }}/>:null}
                                    {lang == 'ru' ? <input className={s.var__title__inp} value={elem.title[lang]} type="text" placeholder="Charru" onChange={(e)=>{
                                        onClickHendler(index,'title',replaceStr(e.target.value));
                                        addState(state)
                                    }}/>:null}
                                </div>
                                <div className={s.var__price}>
                                    {lang == 'ge' ? <input className={s.var__title__inp} value={elem.value[lang]} type="text" placeholder="CharGEZnak" onChange={(e)=>{
                                        onClickHendler(index,'value',replaceStr(e.target.value));
                                        addState(state)
                                    }}/>:null}
                                    {lang == 'en' ? <input className={s.var__title__inp} value={elem.value[lang]} type="text" placeholder="CharENZnak" onChange={(e)=>{
                                        onClickHendler(index,'value',replaceStr(e.target.value));
                                        addState(state)
                                    }}/>:null}
                                    {lang == 'ru' ? <input className={s.var__title__inp} value={elem.value[lang]} type="text" placeholder="CharruZnak" onChange={(e)=>{
                                        onClickHendler(index,'value',replaceStr(e.target.value));
                                        addState(state)
                                    }}/>:null}
                                </div>
                                <div className={s.remove__elem} onClick={()=>{removeItem(index);
        addState(state)
    }}>
                                    <span className={s.remove__elem__one}></span>
                                    <span className={s.remove__elem__two}></span>
                                </div>
                            </div>
                        )
                    })
                }
                <div className={s.var__plus} onClick={()=>{
                    setState([...state,{
                        title:{
                            en: "",
                            ge: "",
                            ru: ""
                        },
                        value:{
                            en: "",
                            ge: "",
                            ru: ""
                        }
                    }])
                }}>
                    <span className={s.var__plus__one}></span>
                    <span className={s.var__plus__two}></span>
                </div>
                
            </div>
        </div>
    )
}

export default ProductCharacteristic;