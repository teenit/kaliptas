import React, { useState } from "react";
import s from "./CartRow.module.css"
import cartMinus from "./../../../../../img/front/cartMinus.png"
import cartPlus from "./../../../../../img/front/cartPlus.png"
import deletebtn from "./../../../../../img/front/deletebtn.png"
import {decrementById, deleteById, incrementById} from "../../../../functions/cartControll";
import {unmountComponentAtNode} from "react-dom";
import { useTranslation } from "react-i18next";
import {getCurrencyTag} from "../../../../functions/utils";
import {Link} from "react-router-dom";

const CartRow = (props) =>{
    const {t} = useTranslation()
    const [state, setState] = useState({
        amount: props.item.count,
        varId: props.item.variableId
    })
    const product = props.item.product;
    return(
        <div className={s.row__wrap}>
            <div>
                <div className={s.row} >
                    <div className={s.top__row}>
                        <div className={s.image}>
                            <img src={product.mainPhoto} alt={product.title} />
                        </div>
                        <Link to={product.getProductPageLink()}>
                            <div className={s.title}>
                                <p>{product.title}</p>
                            </div>
                        </Link>
                        <div className={s.amount}>
                            <div className={s.minus}>
                                <img src={cartMinus} alt={t('cartRow-minusAlt')} onClick={()=>{
                                    setState({...state, amount: state.amount - 1})
                                    decrementById(product.id, state.varId)
                                    props.change();
                                }}/>
                            </div>
                            <div className={s.amount__in}>
                                <p>{state.amount}</p>
                            </div>
                            <div className={s.plus}>
                                <img src={cartPlus} alt={t('cartRow-plusAlt')} onClick={()=>{
                                    setState({...state, amount: state.amount + 1})
                                    incrementById(product.id, state.varId)
                                    props.change();
                                }}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.top__row}>
                    {
                            product.isVariable ? 
                                <div className={s.dop__desc}>
                                    <p>
                                        {
                                            product.isVariable
                                                ? product.variables.find(item=> item.id === state.varId).title
                                                : ""
                                        }
                                    </p>
                                </div>
                            : ""
                        }
                    </div>
                    <div className={s.top__row}>
                        <div className={s.prices}>
                            {product.isDiscountPresent(state.varId)
                                ?
                                    <div className={s.plice__in}>
                                        <p className={s.price__aver}>
                                            {state.amount * product.getPrice(state.varId)}{getCurrencyTag()}
                                        </p>
                                    </div>
                                :null}
                            <p className={s.price__skid}>{state.amount * (product.isDiscountPresent(state.varId) ? product.getPriceWithDiscount(state.varId) : product.getPrice(state.varId))}{getCurrencyTag()}</p>
                        </div>
                    
                        <div className={s.delete}>
                            <svg onClick={()=>{
                                deleteById(product.id, state.varId)
                                props.change()
                            }} x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 6.0683594 22 L 17.931641 22 L 19.634766 7 L 4.3652344 7 z"></path>
                            </svg>
                        </div>
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