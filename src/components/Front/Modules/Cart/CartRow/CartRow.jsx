import React, { useState } from "react";
import s from "./CartRow.module.css"
import cartMinus from "./../../../../../img/front/cartMinus.png"
import cartPlus from "./../../../../../img/front/cartPlus.png"
import deletebtn from "./../../../../../img/front/deletebtn.png"
import {decrementById, deleteById, incrementById} from "../../../../functions/cartControll";
import {unmountComponentAtNode} from "react-dom";
import { useTranslation } from "react-i18next";

const CartRow = (props) =>{
    const {t} = useTranslation()
    const [state, setState] = useState({
        amount: props.item.count
    })
    const product = props.item.product;
    return(
        <div className={s.row__wrap}>
            <div>
                <div className={s.row} >
                    <div className={s.image}>
                        <img src={product.mainPhoto} alt={product.title} />
                    </div>
                    <div className={s.title}>
                        <p>{product.title}</p>
                    </div>
                    <div className={s.amount}>
                        <div className={s.minus}>
                            <img src={cartMinus} alt={t('cartRow-minusAlt')} onClick={()=>{
                                setState({...state, amount: state.amount - 1})
                                decrementById(product.id)
                                props.change();
                            }}/>
                        </div>
                        <div className={s.amount__in}>
                            <p>{state.amount}</p>
                        </div>
                        <div className={s.plus}>
                            <img src={cartPlus} alt={t('cartRow-plusAlt')} onClick={()=>{
                                setState({...state, amount: state.amount + 1})
                                incrementById(product.id)
                                props.change();
                            }}/>
                        </div>
                    </div>
                    <div className={s.prices}>
                        {product.isDiscountPresent()?
                        <div className={s.plice__in}>
                        <p className={s.price__aver}>{state.amount*product.price}$</p>
                        <div className={s.line}></div>
                    </div>
                        :null}
                        <p className={s.price__skid}>{state.amount * product.getPriceWithDiscount()}$</p>
                    </div>
                   
                    <div className={s.delete}>
                        <img src={deletebtn} alt={t('cartRow-deleteAlt')} onClick={()=>{
                            deleteById(product.id)
                            props.change()
                        }}/>
                    </div>
                </div>
                {
                    product.id !== product.lenght ?
                        <div className={s.main__line}></div>
                        :
                        null
                }
            </div>
        </div>
    )
}
export default CartRow