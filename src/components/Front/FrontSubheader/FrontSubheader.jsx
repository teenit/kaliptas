import React, {useEffect, useState} from "react";
import s from './Subheader.module.css'
import catalogImg from "./../../../img/front/catalog.png"
import {Link, NavLink} from "react-router-dom";
import profileImg from "./../../../img/front/profile.png";
import likedImg from "./../../../img/front/heart.png";
import cartImg from "./../../../img/front/corz.png"
import CartModule from "../Modules/Cart/CartModule";
import {getLanguageForRootLink, getRealLanguage} from "../../functions/getLanguage";
import { useTranslation } from "react-i18next";
import Dropdown from "../Modules/Dropdown/Dropdown";
import CartModal from "../../Modals/CartModal/CartModal";
import {Badge} from "@mui/material";
import {getCartItemsCount} from "../../functions/cartControll";
import { apiResponse } from "../../functions/api";
import { getCurrencyTag } from "../../functions/utils";

const FrontSubheader = ()=>{
    const {t}  = useTranslation();
    const [showCart, setShowCart] = useState(false)
    const catalogLink = getLanguageForRootLink() + "/catalog";
    const profileLink = getLanguageForRootLink() + "/profile";
    const [open, setOpen] = useState(false);
    const [closeTimeout, setCloseTimeout] = useState(0);
    const [countInCart, setCountInCart] = useState(getCartItemsCount());
    
    const [lookFor, setLookFor] = useState()
    const [showLookFor, setShowLookFor] = useState([])
    const [showDropProd, setShowDropProd] = useState(false)
    
    useEffect(()=>{
        setInterval(()=>{
            setCountInCart(getCartItemsCount())
        }, 1000)
    },[])

    const showDropdown = function () {
        return  <div className={s.dropdown__wrap}>
                    <div className={s.dropdown__wrap__content}>
                        <div
                className={s.dropdown}
                onMouseEnter={()=>{
                    clearTimeout(closeTimeout);
                }}
                onMouseLeave={()=>{setOpen(false)}}
                onClick={()=>setOpen(false)}
            >
                <Dropdown/>
                        </div>
                    </div>
                </div>
    }
    return(
        <div className={s.wrap}>
            <div className={s.inner}>
                
                <Link
                    className={s.catalog__title}
                    to={catalogLink}
                    onMouseEnter={()=>{
                        setOpen(true);
                    }}
                    onMouseLeave={()=>{
                        setCloseTimeout(setTimeout(()=>{
                            setOpen(false);
                        }, 1000))
                    }}
                    onClick={()=>{
                        setOpen(false)
                    }}
                >
                    <div className={s.button}>
                        <img src={catalogImg} alt="Каталог" />
                        <span>{t('frontSubheader-catalog')}</span>

                    </div>
                </Link>

                <div className={s.input__wrap}>
                    
                    <input type="text" value={lookFor} placeholder={t('frontSubheader-search')} className={s.input} onChange={(event)=>{
                        setLookFor(event.target.value.trim())     
                        apiResponse({
                            search: event.target.value
                        },"search-product.php").then((product)=>{
                            setShowLookFor(product)
                            console.log(product);
                        })
                    }} onClick={()=>{
                        setShowDropProd(!showDropProd)
                    }}/> 

                    {
                        showDropProd > 0 ? 
                            <div className={s.input__look__for} onClick={()=>{
                                setShowDropProd(!showDropProd)
                            }}>
                                <div className={s.input__look__for__in}>
                                    {
                                        showLookFor.map((product, index)=>{
                                            return(
                                                <div key={index} className={s.product__input}>
                                                    <div className={s.product__input__in}>
                                                        <NavLink className={s.link} to={getLanguageForRootLink() +  "/product/" + product.productID + "-" + product.link} onClick={()=>{
                                                            setShowDropProd(!showDropProd)
                                                        }}><img src={product.product.image} alt=""></img></NavLink>
                                                        <NavLink className={s.link} to={getLanguageForRootLink() +  "/product/" + product.productID + "-" + product.link} onClick={()=>{
                                                        setShowDropProd(!showDropProd)
                                                        }}><p>{product.product.title.ru}</p></NavLink>
                                                    </div>
                                                    <p>{product.product.price.price}{getCurrencyTag()}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        : null
                    }
                </div>
                    
                <div className={s.options}>
                    <div className={s.icon}>
                        <NavLink to={profileLink}><img className={s.icon__image} src={profileImg} alt="profile" /></NavLink>
                    </div>
                    <div className={s.icon}>
                        <img className={s.icon__image} src={likedImg} alt="Лайкнутые" />
                    </div>
                    <Badge badgeContent={countInCart > 0 ? countInCart : null} color="primary">
                        <div className={s.icon}>
                            <img className={s.icon__image} src={cartImg} alt="Корзина" onClick={()=>{
                                setShowCart(true)
                            }}/>
                        </div>
                    </Badge>
                </div>
                {open
                    ?
                    showDropdown()
                    : null
                }
            </div>
            {
                showCart ? 
                    <CartModal close={()=>{setShowCart(false)}}/>
                : null
            }
        </div>
    )
}
export default FrontSubheader;