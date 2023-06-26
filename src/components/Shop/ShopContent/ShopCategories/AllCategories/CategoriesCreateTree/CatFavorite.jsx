import React from "react";
import {getRealLanguage} from "../../../../../functions/getLanguage";

const CatFavorite = ({favorite,allCats})=>{
    return(
        <div>
            {
                allCats.map((item)=>{
                   return favorite.map((elem)=>{
                       return +elem.catID === +item.id ?(
                        <div key={item.id}>{item.category.title[getRealLanguage()]}</div>
                       ):null
                    })
                })
            }
        </div>
    )
}

export default CatFavorite;