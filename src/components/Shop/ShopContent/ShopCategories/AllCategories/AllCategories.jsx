import React, { useEffect, useState } from "react";
import CatCreateTreeHTML from "./CategoriesCreateTree/CatCreateTreeHTML";
import { api } from "../../../../functions/api";
import CatFavorite from "./CategoriesCreateTree/CatFavorite";


const createTreeData = (arr, idProp, parentProp) => {
    const tree = Object.fromEntries(arr.map(n => [ n[idProp], { ...n, children: [] } ]));
    return Object.values(tree).filter(n => !tree[n[parentProp]]?.children.push(n));
  };


const AllCategories = ({shop})=>{
    const [cats,setCats] = useState([]);
    const [defaultCats,setDefaultCats] = useState([]);
    const [favorite,setFavorite] = useState([]);

    useEffect(()=>{
        api((arg)=>{
            setDefaultCats(arg);
            setCats(createTreeData(arg,'id','parent_id'));
            api((arg1)=>{
                console.log(arg1)
                setFavorite(arg1);
            },{shopID:shop.id},"manage/categories/get-favorite.php");
        },{},"manage/categories/get-categories.php");

       
    },[])
    function addCategory(data){
        console.log(shop.id)
        api((arg)=>{
            alert(arg)
            window.location.reload();
        },{shopID:shop.id,catID:data.catID},"manage/categories/add-favorite.php")
    }
    return(
        <div>
            <div>
                <h3>Все категории</h3>
                <CatCreateTreeHTML data={cats} addCategory = {(arg)=>{addCategory(arg)}}/>
            </div>
            <div>
                <h3>Категории в избранном</h3>
                {
                    favorite.length > 0 ? <CatFavorite favorite={favorite} allCats={defaultCats} />: null
                }
            </div>
        </div>
    )
}

export default AllCategories;