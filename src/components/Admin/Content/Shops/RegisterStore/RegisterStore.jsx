import React from "react";
import s from "./RegisterStore.module.css"
import { useState } from "react";
import Modal from "../../../../Modals/Modal";

const RegisterStore = ({close,newStore,setNewStore,regStore, btn}) =>{
  
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
                        <input value={newStore.title.ge} className={s.reg__inp} required type="text" placeholder="На грузинском*" onChange={(event)=>{setNewStore({...newStore, title:{...newStore.title,ge:event.target.value}})}}/>
                        <input value={newStore.title.en} className={s.reg__inp} type="text" placeholder="На английском" onChange={(event)=>{setNewStore({...newStore, title:{...newStore.title,en:event.target.value}})}}/>
                        <input value={newStore.title.ru} className={s.reg__inp} type="text" placeholder="На русском" onChange={(event)=>{setNewStore({...newStore, title:{...newStore.title,ru:event.target.value}})}}/>
                    </div>
                </div>
                <div className={s.input__div}>
                    <label htmlFor="">Описание магазина</label>
                    <div className={s.input__div__in}>
                        <textarea value={newStore.description.ge} className={s.reg__text} required name="" id="" cols="30" rows="4" placeholder="На грузинском*" onChange={(event)=>{setNewStore({...newStore, description:{...newStore.description,ge:event.target.value}})}}></textarea>
                        <textarea value={newStore.description.en} className={s.reg__text} name="" id="" cols="30" rows="4" placeholder="На английском" onChange={(event)=>{setNewStore({...newStore, description:{...newStore.description,en:event.target.value}})}}></textarea>
                        <textarea value={newStore.description.ru} className={s.reg__text} name="" id="" cols="30" rows="4" placeholder="На русском" onChange={(event)=>{setNewStore({...newStore, description:{...newStore.description,ru:event.target.value}})}}></textarea>
                    </div>
                </div>
                <div className={s.input__div}>
                    <label htmlFor="">Тип продукции</label>
                    <div className={s.input__div__in}>
                        <input value={newStore.typeProducts.ge} className={s.reg__inp} required type="text" placeholder="На грузинском*" onChange={(event)=>{setNewStore({...newStore, typeProducts: {...newStore.typeProducts,ge:event.target.value}})}}/>
                        <input value={newStore.typeProducts.en} className={s.reg__inp} type="text" placeholder="На английском" onChange={(event)=>{setNewStore({...newStore, typeProducts: {...newStore.typeProducts,en:event.target.value}})}}/>
                        <input value={newStore.typeProducts.ru} className={s.reg__inp} type="text" placeholder="На русском" onChange={(event)=>{setNewStore({...newStore, typeProducts: {...newStore.typeProducts,ru:event.target.value}})}}/>
                    </div>
                </div>
                <div className={s.input__div}>
                    <label htmlFor="">Введите уникальное имя магазина, можно использовать только латинские символы и тире</label>
                    <div className={s.input__div__in}>
                        <input value={newStore.slug} className={s.reg__inp} required type="text" placeholder="пример: my-store-big-food" onChange={(event)=>{setNewStore({...newStore, slug: event.target.value})}}/>
                    </div>
                </div>
                <div className={s.input__div}>
                    <button onClick={regStore} className={s.btn}>{btn}</button>
                </div>
            </form>
        </div>
        </Modal>
    )
}
export default RegisterStore;