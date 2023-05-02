import React, { useEffect, useState } from "react";
import s from './Categories.module.css';
import { api } from "../../../functions/api";
import { createSlug } from "../../../functions/createSlug";
import CreateTreeHTML from "./CreateTree/CreateTreeHTML";
import CreateTreeList from "./CreateTree/CreateTreeList";
import imgArrow from './../../../../img/collapse-arrow-50.png'
import { use } from "i18next";

const createTreeData = (arr, idProp, parentProp) => {
    const tree = Object.fromEntries(arr.map(n => [ n[idProp], { ...n, children: [] } ]));
    return Object.values(tree).filter(n => !tree[n[parentProp]]?.children.push(n));
  };


const Categories = ()=>{

  
    const [cats,setCats] = useState([]);
    const [lng, setLng] = useState(localStorage.getItem('LNG').toLocaleLowerCase())
    const [showList, setShowList] = useState(false)
    useEffect(()=>{
        api((arg)=>{
           // console.log(a)  
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
            <CreateTreeHTML data={cats} /> 
            <form className={s.form} onSubmit={sendForm}>
                <div>
                    <input value={state.title.ge} required type="text" placeholder="Name of category GE" onChange={(e)=>{
                        setState({...state,title:{...state.title,ge:e.target.value}})
                    }}/>
                    <input value={state.title.en} required type="text" placeholder="Name of category EN" onChange={(e)=>{
                        setState({...state,title:{...state.title,en:e.target.value}})
                    }}/>
                    <input value={state.title.ru} required type="text" placeholder="Name of category RU" onChange={(e)=>{
                        setState({...state,title:{...state.title,ru:e.target.value}})
                    }}/>
                </div>
                <div>
                    <input type="text" placeholder="Description of category GE" onChange={(e)=>{
                        setState({...state,description:{...state.description,ge:e.target.value}})
                    }}/>
                    <input type="text" placeholder="Description of category EN" onChange={(e)=>{
                        setState({...state,description:{...state.description,en:e.target.value}})
                    }}/>
                    <input type="text" placeholder="Description of category RU" onChange={(e)=>{
                        setState({...state,description:{...state.description,ru:e.target.value}})
                    }}/>
                </div>
               <div className={s.choice}>
                    <div>
                        <label className={s.label__cat} htmlFor="cat0"> <input defaultChecked={true} id="cat0" type="radio" name="catRadio" onChange={(e)=>{
                              setState({...state,"parent_id":0})
                        }} /> <span>Нет родительской категории</span></label> <img className={`${s.imgArrow} ${showList?s.active:''}`} src={imgArrow} alt="" onClick={()=>setShowList(!showList)}/>
                    </div>
                    {showList ? <CreateTreeList data={cats} setState = {(arg)=>setState({...state,"parent_id":arg})}/>:null}
               </div>
               <button >Create category</button>
            </form>
                    
                
        </div>
    )
}
export default Categories;