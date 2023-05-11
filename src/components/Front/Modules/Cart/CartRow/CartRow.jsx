import React, { useState } from "react";
import s from "./CartRow.module.css"
import cartMinus from "./../../../../../img/front/cartMinus.png"
import cartPlus from "./../../../../../img/front/cartPlus.png"
import deletebtn from "./../../../../../img/front/deletebtn.png"

const CartRow = ({item}) =>{
    const [state, setState] = useState({
        amount: 0
    })
    return(
        <div className={s.row__wrap}>
            {
                item.map((item,index)=>{
                    return(
                        <div key={index}>
                            <div className={s.row} >
                                <div className={s.image}>
                                    <img src={item.mainPhoto} alt={item.title} />
                                </div>
                                <div className={s.title}>
                                    <p>{item.title}</p>
                                </div>
                                <div className={s.amount}>
                                    <div className={s.minus}>
                                        <img src={cartMinus} alt="Минус" onClick={()=>{
                                            
                                        }}/>
                                    </div>
                                    <div className={s.amount__in}>
                                        <p>{item.amount}</p>
                                    </div>
                                    <div className={s.plus}>
                                        <img src={cartPlus} alt="Плюс" onClick={()=>{
                                            
                                        }}/>
                                    </div>
                                </div>
                                <div className={s.prices}>
                                    <div className={s.plice__in}>
                                        <p className={s.price__aver}>{item.averPrice}$</p>
                                        <div className={s.line}></div>
                                    </div>
                                    <p className={s.price__skid}>{item.skidPrice}$</p>
                                </div>
                                <div className={s.delete}>
                                    <img src={deletebtn} alt="Удалить" />
                                </div>
                            </div>
                            {
                                item.id !== item.lenght ? 
                                    <div className={s.main__line}></div> 
                                : 
                                    null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CartRow