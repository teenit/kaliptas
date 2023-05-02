import React from "react";
import { useState } from "react";
import { replaceStr } from "../../../../../functions/replaceStr";
import s from './ProductPrice.module.css'
const ProductPriceVar = ({addState,prices})=>{

    const [state,setState] = useState(prices)
    const onClickHendler = (index,keyObj,e)=>{
        const newItems = state.map((item,i)=>{
            if(i === index){
                return {...item,[keyObj]:e}
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
                                    <input className={s.var__title__inp} value={elem.variable} type="text" placeholder="Вариация" onChange={(e)=>{
                                        onClickHendler(index,'variable',replaceStr(e.target.value));
                                        addState(state)
                                    }}/>
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
                                
                            </div>
                        )
                    })
                }
                <div className={s.var__plus} onClick={()=>{
                    setState([...state,{
                        variable:'',
                        price:'',
                        discountPrice:''
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