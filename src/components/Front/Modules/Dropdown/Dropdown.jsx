import {useEffect, useState} from "react";
import {api} from "../../../functions/api";
import ListLevel from "./ListLevel/ListLevel";
import s from "./Dropdown.module.css"

const Dropdown = ()=>{

    const [categoryTree, setCategoryTree] = useState([])

    const [ready, setReady] = useState(false);

    useEffect(()=>{
        api((response)=>{
            setCategoryTree(response)
            setReady(true)
        }, {}, "content/category/get-all-tree-categories.php")
    },[])



    return ready ? (<div className={s.wrap}>
        {
            <ListLevel catList={categoryTree} level={0}/>
        }
    </div>) : null
}

export default Dropdown;