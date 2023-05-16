import React, { useEffect, useState } from "react";
import Modal from "../../../../Modals/Modal";
import s from "./ProductRegister.module.css"
import arrow from "../../../../../img/tickPhone.png"
import { api, apiMultipart, apiMultipartUpload } from "../../../../functions/api";
import ProductGetCats from "./ProductGetCats";
import ProductPriceVar from "./ProductPrice/ProductPriceVar";
import ProductPriceDefault from "./ProductPrice/ProductPriceDefault";
import ProductImage from "./ProguctImage/ProductImage";
import ProductImages from "./ProguctImage/ProductImages";
import loadImg from './../../../../../img/admin/loading.gif';
import ProductCharacteristic from "./ProductCharacteristic/ProductCharacteristic";
import { replaceStrTextarea } from "../../../../functions/replaceStr";
const ProductRegister = ({close,shop,stateProduct,saveProduct,btn}) =>{
    const [lookCat,setLookCat] = useState(stateProduct.categories)
    const [control, setControl] = useState({
        selectPrice: false,
        selectCategories: false,
        showDefPrice: false,
        showVarietPrice: false,
        changeArrowCategory: false,
        changeArrowType: false,
        langGeName: true,
        langEnName: false,
        langeRuName: false,
        langGeDisc: true,
        langEnDisc: false,
        langeRuDisc: false,
        langGeChar: true,
        langEnChar: false,
        langeRuChar: false,
        lang: 'ge'
    })
    const lng = localStorage.getItem('LNG').toLowerCase()

   console.log(stateProduct)
     const [state, setState] = useState({...stateProduct})
    const [loadedImg, setLoadedImg] = useState({
        image:false,
        images:false
    })
    function uploadImage(file,index){
        setLoadedImg({...loadedImg,image:true})
        apiMultipartUpload((arg)=>{
            setState({...state,image:arg})
        setLoadedImg({...loadedImg,image:false})

        },[],file,"manage/shop/upload-img.php",0,shop.id,0);
   
    }
    function uploadImages(files){
        setLoadedImg({...loadedImg,images:true})
            apiMultipartUpload((arg)=>{
                setState({...state,images:[...state.images,...arg]})
                setLoadedImg({...loadedImg,image:false})
            },[],files,"manage/shop/upload-img.php",0,shop.id,1);
    }
   
    const onClickHendler = (index,e)=>{
        const newItems = lookCat.map((item,i)=>{
            if(i === index){
                return {...item,checked:e}
            }else{
                return {...item}
            }
        });
        setLookCat(newItems)
    }
    const onClickHendlerPso = (defCats, favCats)=>{
        const newItems = defCats.map((item)=>{
            if(stateProduct.categories.some(elem => elem.id == item.id)){
                return {...item,checked:true,good:true}
            }else if(favCats.some(elem => elem.catID == item.id)){
                return {...item,good:true,checked:false}
            }else{
                return {...item,good:false,checked:false}
            }
        });
        setLookCat(newItems)
    }
    
    useEffect(()=>{
        console.log(stateProduct)
        api((arg)=>{
            api((arg1)=>{
                console.log(arg,arg1)
                onClickHendlerPso(arg,arg1);
            },{shopID:shop.id},"manage/categories/get-favorite.php");
        },{},"manage/categories/get-categories.php");

       
    },[])
    const sendForm = (event) =>{
        console.log(state)
        
    }

    return(
        <Modal>
            <div className={s.wrap} onClick={(e)=>e.target.className === s.wrap ? close() : null}>
                
                <div className={s.form}>
                <form action="" onSubmit={sendForm}> 
                    <div className={s.form__in}>
                        <div className={s.input__div}>
                            <h2>Добавить товар</h2>
                        </div>
                        <div className={s.input__div}>
                            <label className={s.input__label} htmlFor="">
                                <p>Название</p> 
                                <div className={s.langs}>
                                    <span className={`${s.input__lang} ${control.langGeName ? s.input__lang__spec : null}`} onClick={()=>{setControl({...control, lang: 'ge', langGeName: true, langEnName: false, langeRuName: false})}}>Ge</span>
                                    <span className={`${s.input__lang} ${control.langEnName ? s.input__lang__spec : null}`} onClick={()=>{setControl({...control, lang: 'en', langGeName: false, langEnName: true, langeRuName: false})}}>En</span>
                                    <span className={`${s.input__lang} ${control.langeRuName ? s.input__lang__spec : null}`} onClick={()=>{setControl({...control, lang: 'ru', langGeName: false, langEnName: false, langeRuName: true})}}>Ru</span>
                                </div>
                            </label>
                            <input value={state.title[control.lang]} required className={s.input} type="text" onChange={(event)=>{
                               setState({...state, title: {...state.title, [control.lang]: event.target.value}})
                            }}/>
                        </div>
                        <div className={s.input__div}>
                            <label className={s.input__label} htmlFor="">
                                <p>Категория</p>
                            </label>
                            <div className={s.cat__select}>
                                <div className={s.cat__selected}>
                                    {
                                        lookCat.map((item,ind)=>{
                                            return item.checked ?
                                                <div className={s.cat__elem} key={item.id}>
                                                <span className={s.cat__title__look}>{item.category.title[lng]}</span> 
                                                <div className={s.delete__cat} onClick={()=>{
                                                    onClickHendler(ind,false)
                                                  
                                                }}>
                                                    <span className={s.del__one}></span>
                                                    <span className={s.del__two}></span>
                                                </div></div>:''
                                        })
                                    }
                                </div>
                                
                                <div className={s.select__in} onClick={()=>{
                                        setControl({...control, 
                                        selectCategories: !control.selectCategories, 
                                        changeArrowCategory: !control.changeArrowCategory})}}>
                                    <span>Выбрать категорию <span><img className={`${s.cat__arrow} ${control.changeArrowCategory ? s.active : ''}`} src={arrow} alt="" /></span></span>
                                    
                                </div>
                                {control.changeArrowCategory ? <div className={s.sel__cat}>
                                    <ProductGetCats addCat={(ind,chek)=>{
                                        onClickHendler(ind,chek)
                                    }} addState = {()=>{
                                        let newMas = lookCat.filter(item => item.checked);
                                        setState({...state,categories:newMas})
                                    }} cats={lookCat}/>
                                </div>:null}
                                
                            </div>
                        </div>
                        <div className={s.input__div}>
                            <label className={s.input__label} htmlFor="">
                                <p>Тип</p>
                            </label>
                            <div className={s.select}>
                                <div className={s.select__in} onClick={()=>{setControl({...control, selectPrice: !control.selectPrice, changeArrowType: !control.changeArrowType})}}>
                                    <input type="text" required disabled className={s.input__select} value={state.type.variable ? "Вариативный" : "Не вариативный"}/>
                                    <img src={arrow} className={`${s.arrow} ${control.changeArrowType ? s.arrow__deg : null}`} alt="Стрелка"/>
                                </div>
                                {control.selectPrice ? <div className={s.select__input__wrap}>
                                    <p className={s.select__p} onClick={()=>{
                                        setState({...state, type: {...state.type, variable: true, defaulte: false}})
                                        setControl({...control, selectPrice: !control.selectPrice})
                                    }}>Вариативный</p>
                                    <p className={s.select__p} onClick={()=>{
                                       setState({...state, type: {...state.type, variable: false, defaulte: true}})  
                                       setControl({...control, selectPrice: !control.selectPrice})  
                                    }}>Не вариативный</p>
                                </div> : null}
                            </div>
                        </div>
                        <div className={s.input__div}>
                            <label className={s.input__label} htmlFor="">
                                <p>Цена</p>
                            </label>
                            <div className={s.input__price__wrap}>
                                {
                                    state.type.variable ? <ProductPriceVar lang = {control.lang} prices={state.prices} addState = {(arg)=>{
                                        setState({...state,prices:arg});
                                    }} /> : <ProductPriceDefault lang = {control.lang} price={state.price} addState = {(arg)=>{
                                        setState({...state,price:arg});
                                    }} />
                                }
                            </div>
                        </div>
                        <div className={s.input__div}>
                            <label className={s.input__label} htmlFor="">
                                <p>Количество на складе</p>
                            </label>
                            <input type="number" value={state.inStock.amount} onChange={(e)=>{
                                setState({...state,inStock:{...state.inStock,amount:e.target.value}})
                            }}

                               />
                        </div>
                        <div className={s.input__div}>
                            <label htmlFor="" className={s.input__label}>
                                <p>Описание</p>
                        
                            </label>
                            <textarea required value={state.description[control.lang]} className={s.textarea} name="" id="" cols="30" rows="10" onChange={(event)=>{
                                setState({...state, description: {...state.description, [control.lang]: event.target.value}})
                            }}></textarea>
                        </div>
                        <div className={s.input__div}>
                            <label htmlFor="" className={s.input__label}>
                                <p>Характеристики</p>
                               
                            </label>
                             <ProductCharacteristic char={state.characteristic} lang={control.lang} addState = {(arg)=>{setState({...state,characteristic:arg})}}/>
                        </div>
                        <ProductImage image={state.image} loadedImg = {loadedImg} setLoadedImg = {(arg)=>setLoadedImg({...loadedImg,image:arg})} uploadImage = {(file,index)=>{uploadImage(file,index)
                        }} 
                        addState={(arg)=>{}}/>
                        <ProductImages images={state.images} setState = {(arg)=>setState({...state,images:arg})} addState={(arg)=>{
                            uploadImages(arg);
                            console.log(arg.files)
                            }} />
                    </div>
                    
                </form>
                <div className={s.btn__wrap}>
                        <button disabled = {loadedImg.image || loadedImg.images ? true : false} className={`${s.form__btn} ${s.form__btn__send}`} 
                        onClick={()=>{
                            let newMas = lookCat.filter(item => item.checked);
                            setState({...state,categories:newMas});
                            saveProduct({...state,
                                description:{...state.description,
                                ge:replaceStrTextarea(state.description.ge),
                                ru:replaceStrTextarea(state.description.ru),
                                en:replaceStrTextarea(state.description.en)},
                                title:{...state.title,
                                    ge:replaceStrTextarea(state.title.ge),
                                    ru:replaceStrTextarea(state.title.ru),
                                    en:replaceStrTextarea(state.title.en)}
                            }
                                ,newMas,btn.btn1.status,"manage/shop/add-product.php");
                        }}>{btn.btn1.title[lng]}</button>
                        <button disabled = {loadedImg.image || loadedImg.images ? true : false} onClick={()=>{
                            let newMas = lookCat.filter(item => item.checked);
                            setState({...state,categories:newMas});
                            saveProduct({...state,description:{...state.description,
                                ge:replaceStrTextarea(state.description.ge),
                                ru:replaceStrTextarea(state.description.ru),
                                en:replaceStrTextarea(state.description.en)},
                                title:{...state.title,
                                    ge:replaceStrTextarea(state.title.ge),
                                    ru:replaceStrTextarea(state.title.ru),
                                    en:replaceStrTextarea(state.title.en)}
                            },newMas,btn.btn2.status,"manage/shop/add-product.php");
                        }} className={`${s.form__btn} ${s.form__btn__save}`}>{btn.btn2.title[lng]}</button>
                </div>
                {
                    loadedImg.image || loadedImg.images ? <img src={loadImg} alt="" /> : null
                }
            </div>
            </div>
        </Modal>
    )
}
export default ProductRegister;