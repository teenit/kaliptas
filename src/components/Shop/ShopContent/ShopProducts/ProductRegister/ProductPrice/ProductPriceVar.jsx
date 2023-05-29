import React from "react";
import { useState } from "react";
import { replaceStr } from "../../../../../functions/replaceStr";
import s from './ProductPrice.module.css'
const ProductPriceVar = ({addState,prices,lang})=>{
    let kil = 0;
    const [state,setState] = useState(prices)
    const onClickHendler = (index,keyObj,e)=>{
        const newItems = state.map((item,i)=>{
            if(i === index){
                if(keyObj == 'variable') {
                    return {...item,variable:{...item.variable,[lang]:e}}
                }else{
                    return {...item,[keyObj]:e}
                } 
            }else{
                return {...item}
            }
        });
        setState(newItems)
        
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
                            <div key={kil++} className={s.var__item}>
                                <div className={s.var__title}>
                                    {lang == 'ge' ? <input className={s.var__title__inp} value={elem.variable[lang]} type="text" placeholder="Вариация" onChange={(e)=>{
                                        onClickHendler(index,'variable',replaceStr(e.target.value));
        addState(state)
                                        
                                    }}/>:null}
                                    {lang == 'en' ? <input className={s.var__title__inp} value={elem.variable[lang]} type="text" placeholder="Вариация" onChange={(e)=>{
                                        onClickHendler(index,'variable',replaceStr(e.target.value));
        addState(state)
                                       
                                    }}/>:null}
                                    {lang == 'ru' ? <input className={s.var__title__inp} value={elem.variable[lang]} type="text" placeholder="Вариация" onChange={(e)=>{
                                        onClickHendler(index,'variable',replaceStr(e.target.value));
        addState(state)
                                        
                                    }}/>:null}
                                </div>
                                <div className={s.var__price}>
                                    <div>
                                        <input className={s.price__item} value={elem.price} type="number" placeholder="Цена" onChange={(e)=>{
                                            onClickHendler(index,'price',replaceStr(e.target.value))
        addState(state)
                                          
                                        }}/>
                                    </div>
                                    <div>
                                        <input className={s.price__item} value={elem.discountPrice} type="number" placeholder="Цена со скидкой" onChange={(e)=>{
                                            onClickHendler(index,'discountPrice',replaceStr(e.target.value))
        addState(state)
                                           
                                        }}/>
                                    </div>
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
                        variable:{
                            ge:"",
                            en:"",
                            ru:""
                        },
                        price:'',
                        discountPrice:'',
                        id:state[state.length - 1].id + 1
                    }])
                }}>
                    <span className={s.var__plus__one}></span>
                    <span className={s.var__plus__two}></span>
                </div>
                
            </div>
        </div>
    )
}
export default ProductPriceVar;