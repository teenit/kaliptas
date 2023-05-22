import {getLanguageForRootLink, getRealLanguage} from "../../../../functions/getLanguage";
import {useEffect, useRef, useState} from "react";
import s from "./ListLevel.module.css";
import {Link} from "react-router-dom";

const ListLevel = function ({catList, level}) {

    const [categoriesList, setCategoryList] = useState([]);
    const [childLevel, setChildLevel] = useState(null);
    let index = 0;
    
    useEffect(()=>{
        setChildLevel(null)
        let localParentCatList = [];
        for (const cat of catList) {
            let childrenPresent = cat.children !== undefined;

            let catTab =
                <div key={index} onMouseEnter={(event)=>{
                    if (childrenPresent) {
                        let childLevel = <ListLevel catList={cat.children} level={level + 1}/>
                        setChildLevel(childLevel);
                    } else {
                        setChildLevel(<ListLevel catList={[]} level={level + 1}/>)
                    }
                }}
                >
                    <Link to={getLanguageForRootLink()+"/catalog/" + cat.id}>{cat.title[getRealLanguage()]}</Link>
                </div>
            index++;

            localParentCatList.push(catTab)
        }
        setCategoryList(localParentCatList)
    }, [catList, index, level]);

    

    return (<div className={s.wrap}>
            <div>
                {categoriesList}
            </div>
            <div>
                {childLevel}
            </div>
        </div>
    );
}

export default ListLevel;