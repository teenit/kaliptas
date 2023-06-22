import React from "react";
import s from './../ProductRegister.module.css'
import { useState } from "react";
import {useTranslation} from "react-i18next";

const ProductImages =({addState,images,setState})=>{
    const [previewImgS, setPreviewImgS] = useState([]);
    const {t} = useTranslation()

    function handleFilesSelect(evt,setImg) {
            var files = evt.target.files;
            let a = [];
            for (var i = 0, f; f = files[i]; i++) {
            if (!f.type.match('image.*')) {
               return alert("Image only please....");
            }
            var reader = new FileReader();
            reader.onload = (function(theFile) {
                return function(e) {
                    a.push(e.target.result)
                    return setImg(a)
                };

            })(f);
            reader.readAsDataURL(f);
        }
    }
    const removeItem = (index)=>{
        const newItems = images.filter((item,i)=>{
            if(i === index){
                
            }else{
                return {...item}
            }
        });
        console.log(newItems)
        setState(newItems)
    }
    return(
        <div className={s.input__div}>
        <label htmlFor="" className={s.input__label}>
            <p>{t("admin-product-images-dop")}</p>
        </label>
        <input style={{display:"none"}} type="file" multiple name="images[]" id="mainImgS" onChange={(e)=>{
            handleFilesSelect(e,(arg)=>{setPreviewImgS(arg)});
            addState(e.target)
            console.log(images)
        }} />
        <div className={s.inp__imgs__wrap}>
            <div className={s.imgs__wrap}>
                <label htmlFor="mainImgS" className={s.imgs__main__wrap}>
                    <div className={s.imgs__plus}>
                        <span className={s.imgs__plus__one}></span>
                        <span className={s.imgs__plus__two}></span>
                    </div>
                </label>
            </div>
           
            {
                images.map((item,index)=>{
                    return(
                    <div key={item} className={s.imgs__wrap}>
                    <img className={s.input__image} src={item}/>
                   
                    <div className={s.remove__elem} onClick={()=>{removeItem(index)}}>
                                    <span className={s.remove__elem__one}></span>
                                    <span className={s.remove__elem__two}></span>
                                </div>
                    </div>)})
            }
        </div>
    </div>
    )
}

export default ProductImages;