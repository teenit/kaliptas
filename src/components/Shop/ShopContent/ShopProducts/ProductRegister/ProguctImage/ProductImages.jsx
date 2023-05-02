import React from "react";
import s from './../ProductRegister.module.css'
import { useState } from "react";

const ProductImages =({addState})=>{
    const [previewImgS, setPreviewImgS] = useState([]);
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
    return(
        <div className={s.input__div}>
        <label htmlFor="" className={s.input__label}>
            <p>Дополнительные изображения</p>
        </label>
        <input style={{display:"none"}} type="file" multiple name="images[]" id="mainImgS" onChange={(e)=>{
            handleFilesSelect(e,(arg)=>{setPreviewImgS(arg)});
            addState(e.target)
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
                previewImgS.map(item=><div key={item} className={s.imgs__wrap}><img className={s.input__image} src={item}/></div>)
            }

        </div>
    </div>
    )
}

export default ProductImages;