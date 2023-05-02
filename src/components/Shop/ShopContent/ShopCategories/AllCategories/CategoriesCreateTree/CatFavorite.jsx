import React from "react";

const CatFavorite = ({favorite,allCats})=>{
    return(
        <div>
            {
                allCats.map((item)=>{
                   return favorite.map((elem)=>{
                       return +elem.catID === +item.id ?(
                        <div key={item.id}>{item.category.title.en}</div>
                       ):null
                    })
                })
            }
        </div>
    )
}

export default CatFavorite;