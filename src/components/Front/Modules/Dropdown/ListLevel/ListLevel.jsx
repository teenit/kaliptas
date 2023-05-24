import { getLanguageForRootLink, getRealLanguage } from "../../../../functions/getLanguage";
import { useEffect, useRef, useState } from "react";
import s from "./ListLevel.module.css";
import { Link } from "react-router-dom";

const ListLevel = function ({ catList, level }) {

    const [categoriesList, setCategoryList] = useState([]);
    const [childLevel, setChildLevel] = useState(null);
    const [active, setActive] = useState(false)
    let index = 0;

    useEffect(() => {
        setChildLevel(null)
        let localParentCatList = [];
        for (const cat of catList) {
            let childrenPresent = cat.children !== undefined;

            let catTab =
            <div className={s.option}>
            
                <div key={index} className={s.option__wrap__active} onMouseEnter={(event) => {
                    
                    setActive(true)
                    if (childrenPresent) {
                        let childLevel = <ListLevel catList={cat.children} level={level + 1} />
                        setChildLevel(childLevel);
                    } else {
                        setChildLevel(null)
                    }
                }}
                >
                    <Link to={getLanguageForRootLink() + "/catalog/" + cat.id}>{cat.title[getRealLanguage()]}</Link>

                </div>
                </div>
            index++;

            localParentCatList.push(catTab)
        }
        setCategoryList(localParentCatList)
    }, [catList, index, level]);



    return (<div className={s.wrap}>
        <div className={s.parent__wrap}>
            <div className={s.option__wrap} >{categoriesList}</div>
            {level==0&&childLevel!==null?<div className={s.line}></div>:<div className={s.line__invisible}></div>}

        </div>
        <div className={s.child__wrap}>
            {childLevel}
        </div>
    </div>
    );
}

export default ListLevel;