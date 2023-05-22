import {useEffect, useState} from "react";
import {api} from "../../../functions/api";
import s from "../MobileDropdown/MobileDropdown.module.css"
import MobileListCategory from "./MobileListCategory/MobileListCategory";

const MobileDropdown = ({close})=>{
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
            categoryTree.map((cat, index)=>{
                return <MobileListCategory category={cat} key={index} close={close}/>
            })
        }
       
    </div>) : null
}

export default MobileDropdown