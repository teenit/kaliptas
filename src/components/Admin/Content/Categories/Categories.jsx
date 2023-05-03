import React, { useEffect, useState } from "react";
import s from './Categories.module.css';
import { api } from "../../../functions/api";
import { createSlug } from "../../../functions/createSlug";
import CreateTreeHTML from "./CreateTree/CreateTreeHTML";
import CreateTreeList from "./CreateTree/CreateTreeList";
import imgArrow from "../../../../img/collapse-arrow-50.png";
import { use } from "i18next";

const createTreeData = (arr, idProp, parentProp) => {
    const tree = Object.fromEntries(arr.map(n => [ n[idProp], { ...n, children: [] } ]));
    return Object.values(tree).filter(n => !tree[n[parentProp]]?.children.push(n));
};
const Categories = ()=>{
    const [cats,setCats] = useState([]);
    const [lng, setLng] = useState(localStorage.getItem('LNG').toLocaleLowerCase())
    const [showList, setShowList] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [showCateg, setShowCateg] = useState(true)
    useEffect(()=>{
        api((arg)=>{
            setCats(createTreeData(arg,'id','parent_id'));
        },{},"manage/categories/get-categories.php")
    },[])
    const [state,setState] = useState({
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
        parent_id:0,

    })
    const sendForm = (e)=>{
        e.preventDefault()

        api((arg)=>{
            setState({...state,title:{
                en:"",
                ru:"",
                ge:""
            },
            description:{
                en:"",
                ru:"",
                ge:""
            },
            parent_id:0})
            api((arg)=>{
                 setCats(createTreeData(arg,'id','parent_id'));
             },{},"manage/categories/get-categories.php")

        },{...state},"manage/categories/create-category.php")
    }
    return(
        <div className={s.wrap}>
            <div className={s.add__wrap}>
                <div className={s.add__in}>
                    <div className={s.title}>
                        <h2>Добавить категорию</h2>
                    </div>
                    <div className={s.add__shop} onClick={()=>setShowForm(!showForm)}>
                        <span className={`${s.span} ${s.span1}`}></span>
                        <span className={`${s.span} ${s.span2}`}></span>
                    </div>
                </div>
                {showForm ? <div className={s.in}>
                <form className={s.form} onSubmit={sendForm}>
                    <div className={s.input__wrap}>
                        <p>Введите название категории</p>
                        <div className={s.input__in}>
                            <input className={s.inp} value={state.title.ge} required type="text" placeholder="Name of category GE" onChange={(e)=>{
                                setState({...state,title:{...state.title,ge:e.target.value}})
                            }}/>
                            <input className={s.inp} value={state.title.en} required type="text" placeholder="Name of category EN" onChange={(e)=>{
                                setState({...state,title:{...state.title,en:e.target.value}})
                            }}/>
                            <input className={s.inp} value={state.title.ru} required type="text" placeholder="Name of category RU" onChange={(e)=>{
                                setState({...state,title:{...state.title,ru:e.target.value}})
                            }}/>
                        </div>
                    </div>
                    <div className={s.input__wrap}>
                        <p>Введите описание категории</p>
                        <div className={s.input__in}>
                            <input className={s.inp} type="text" placeholder="Description of category GE" onChange={(e)=>{
                                setState({...state,description:{...state.description,ge:e.target.value}})
                            }}/>
                            <input className={s.inp} type="text" placeholder="Description of category EN" onChange={(e)=>{
                                setState({...state,description:{...state.description,en:e.target.value}})
                            }}/>
                            <input  className={s.inp} type="text" placeholder="Description of category RU" onChange={(e)=>{
                                setState({...state,description:{...state.description,ru:e.target.value}})
                            }}/>
                        </div>
                    </div>
                <div className={s.choice}>
                    <div className={s.choice__in}>
                        <div className={s.check}>
                            <label className={s.label__cat} htmlFor="cat0"> 
                                <input defaultChecked={true} id="cat0" type="radio" name="catRadio" onChange={(e)=>{
                                    setState({...state,"parent_id":0})
                                }} /> 
                                <span>Нет родительской категории</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={s.categories__wrap}>
                    <div className={s.categories__in} onClick={()=>setShowList(!showList)}>
                        <h3>Родительские категории</h3>
                        <img className={`${s.imgArrow} ${showList ? s.active : ''}`} src={imgArrow} alt="Стрелка" />
                    </div>
                    {showList ? <CreateTreeList data={cats} setState = {(arg)=>setState({...state,"parent_id":arg})}/>:null}
                </div>
                <button className={s.btn}>Cоздать категорию</button>
                </form>
            </div> : null}
            </div>
            <div className={s.categories}>
                <div className={s.categories_inner}>
                    <div className={s.categories__text} onClick={()=>{setShowCateg(!showCateg)}} >
                        <h2>Категории</h2>
                        <img className={`${s.categ__arrow} ${showCateg ? s.categ__arrow__change : null}`} src={imgArrow} alt="Стрелка"/>
                    </div>
                    {showCateg ? <div className={s.wrap__list__pad}><CreateTreeHTML data={cats}/></div>  : null}            
                </div> 
            </div>
        </div>
    )
}
export default Categories;