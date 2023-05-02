import React from "react";
import s from "./RegisterStore.module.css"
import { useState } from "react";
import Modal from "../../../../Modals/Modal";

const RegisterStore = ({close,newStore,setNewStore,regStore}) =>{
  
    function SendForm(event){
        event.preventDefault();
        console.log(newStore);
    }

    return(
        <Modal>
        <div className={s.wrap} onClick={(e)=>e.target.className === s.wrap ? close() : null}>
            <form onSubmit={SendForm} className={s.form}>
                <div className={s.input__div}>
                    <label htmlFor="">Название магазина</label>
                    <div className={s.input__div__in}>
                        <input value={newStore.nameGE} className={s.reg__inp} required type="text" placeholder="На грузинском*" onChange={(event)=>{setNewStore({...newStore, nameGE: event.target.value})}}/>
                        <input value={newStore.nameEN} className={s.reg__inp} type="text" placeholder="На английском" onChange={(event)=>{setNewStore({...newStore, nameEN: event.target.value})}}/>
                        <input value={newStore.nameRU} className={s.reg__inp} type="text" placeholder="На русском" onChange={(event)=>{setNewStore({...newStore, nameRU: event.target.value})}}/>
                    </div>
                </div>
                <div className={s.input__div}>
                    <label htmlFor="">Описание магазина</label>
                    <div className={s.input__div__in}>
                        <textarea value={newStore.descriptionGE} className={s.reg__text} required name="" id="" cols="30" rows="4" placeholder="На грузинском*" onChange={(event)=>{setNewStore({...newStore, descriptionGE: event.target.value})}}></textarea>
                        <textarea value={newStore.descriptionEN} className={s.reg__text} name="" id="" cols="30" rows="4" placeholder="На английском" onChange={(event)=>{setNewStore({...newStore, descriptionEN: event.target.value})}}></textarea>
                        <textarea value={newStore.descriptionRU} className={s.reg__text} name="" id="" cols="30" rows="4" placeholder="На русском" onChange={(event)=>{setNewStore({...newStore, descriptionRU: event.target.value})}}></textarea>
                    </div>
                </div>
                <div className={s.input__div}>
                    <label htmlFor="">Тип продукции</label>
                    <div className={s.input__div__in}>
                        <input value={newStore.typeProductsGE} className={s.reg__inp} required type="text" placeholder="На грузинском*" onChange={(event)=>{setNewStore({...newStore, typeProductsGE: event.target.value})}}/>
                        <input value={newStore.typeProductsEN} className={s.reg__inp} type="text" placeholder="На английском" onChange={(event)=>{setNewStore({...newStore, typeProductsEN: event.target.value})}}/>
                        <input value={newStore.typeProductsRU} className={s.reg__inp} type="text" placeholder="На русском" onChange={(event)=>{setNewStore({...newStore, typeProductsRU: event.target.value})}}/>
                    </div>
                </div>
                <div className={s.input__div}>
                    <label htmlFor="">Введите уникальное имя магазина, можно использовать только латинские символы и тире</label>
                    <div className={s.input__div__in}>
                        <input value={newStore.slug} className={s.reg__inp} required type="text" placeholder="пример: my-store-big-food" onChange={(event)=>{setNewStore({...newStore, slug: event.target.value})}}/>
                    </div>
                </div>
                <div className={s.input__div}>
                    <button onClick={regStore} className={s.btn}>Регистрация</button>
                </div>
            </form>
        </div>
        </Modal>
    )
}
export default RegisterStore;