import React from "react";
import s from './../ProductRegister.module.css'
import { useState } from "react";
import {useTranslation} from "react-i18next";
const ProductImage = ({addState,uploadImage,image})=>{

    const [previewImg, setPreviewImg] = useState('');
    const [showImg, setShowImg] = useState(true);
    const {t} = useTranslation()

    function handleFileSelect(evt,setImg) {
        var file = evt.target.files; // FileList object
        var f = file[0];
        if (!f.type.match('image.*')) {
           return alert("Image only please....");
        }
        var reader = new FileReader();
        reader.onload = (function(theFile) {
            return function(e) {
                return setImg(e.target.result)
            };
        })(f);
        reader.readAsDataURL(f);
    }

    return (
            <div className={`${s.input__div} ${s.input__div__dop}`}>
                <label className={s.input__label}>
                    <p>{t("admin-product-image-main")}</p>
                </label>
                <input style={{display:"none"}} type="file" name="mainImg" id="mainImg" onChange={(e)=>{
                    //return console.log(e)
                    handleFileSelect(e,(arg)=>{setPreviewImg(arg)})
                    setShowImg(true)
                    addState(e.target)
                    uploadImage(e.target,0)
                }} />
                <div className={s.inp__img__wrap}>
                    <label htmlFor="mainImg" className={s.img__main__wrap} onClick={()=>{}}></label>
                    <div className={showImg ? s.image__wrap__dop : s.image__wrap}>
                        {   previewImg || image ?
                            <img className={s.input__image} src={previewImg ? previewImg : image } alt="" /> : null
                        }
                    </div> 
                </div>
             </div>
    )
}
export default ProductImage;