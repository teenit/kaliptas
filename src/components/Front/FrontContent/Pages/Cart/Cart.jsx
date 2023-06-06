import React, {useEffect, useState} from "react";
import CartModule from "../../../Modules/Cart/CartModule";
import s from "./Cart.module.css"
import {Button, CircularProgress, MenuItem, TextField} from "@mui/material";
import {clearCart, getCartItemsCount, getItemsList} from "../../../../functions/cartControll";
import {Link} from "react-router-dom";
import {getLanguageForRootLink} from "../../../../functions/getLanguage";
import {api, apiResponse} from "../../../../functions/api";
import { useTranslation } from "react-i18next";
import {getCurrencyTag} from "../../../../functions/utils";
const Cart = ()=>{
    const {t} = useTranslation()
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState({})

    useEffect(()=>{
        apiResponse({},"user/check-auth.php").then((data)=>{
            if(data.email !== null && data.token !== null){
                setAuth(true);
                apiResponse({},"user/get-user.php").then((data)=> {
                    setUser(data)
                    setEmail(data.email);
                    console.log("User:",  data)
                    setPhone(phoneMask(data.phone))
                    setName(data.userData.name)
                    setSurname(data.userData.surname)
                })
            }
        }).catch((err,dar)=>{
            throw new Error(err);
        })

    },[])

    const emptyForm = {};

    const paymentTypes = { //todo: do translate
        cash : {
            key: "cash",
            title: "cart-inCash"
        },
        cod : {
            key: "cod",
            title: "cart-C.O.D."
        },
        card:{
            key: "card",
            title: "cart-toCard"
        },
        bank :{
            key: "bank",
            title: "cart-toBankAccount"
        }
    };

    const deliveryTypes = {
        address: {
            key: "address",
            title: "Address", //todo: do translate
            paymentTypes: [paymentTypes.card, paymentTypes.bank, paymentTypes.cod, paymentTypes.cash]
        },
        self: {
            key: "self",
            title: "By yourself",
            paymentTypes: [paymentTypes.card, paymentTypes.bank, paymentTypes.cod, paymentTypes.cash]
        },
        // mail: {
        //     key: "mail",
        //     title: "By mail",
        //     paymentTypes: [paymentTypes.card, paymentTypes.bank, paymentTypes.cod]
        // }
    };

    const [paymentType, setPaymentType] = useState(paymentTypes.cash);

    const [deliveryData, setDeliveryData] = useState({
        address: {
            city: "",
            street: "",
            residential: ""
        },
        self: {},
        mail: {
            city: "",
            post: "",
            postalCode: ""
        }
    });


    const [deliveryType, setDeliveryType] = useState(deliveryTypes.self);
    const [resultRequested, setResultRequested] = useState(false);
    const [formSent, setFormSent] = useState(false);

    const formData = function () {
        setResultRequested(true)
        let localDeliveryData = {...deliveryData}[deliveryType.key]

        for (let field of Object.values(localDeliveryData)) {
            if (field == ""
                || !validateName()
                || !validatePhone()
                || !validateSurname()
                || !validateEmail()
            ) {
                return emptyForm;
            }
        }

        return  {
            user:{
                name:name,
                surname: surname,
                email:email,
                phone:phone
            },
            products:getItemsList(),
            methodPay: paymentType.key,
            deliveryForm: {...localDeliveryData},
            deliveryMethod: deliveryType.key,
            comment: comment
        }
    }

    const phoneMask = (value) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d{10})/, '+($1) $2')
            .replace(/(\d{3})(\d{3})/, '$1-$2')
            .replace(/(\d{3})(\d{4})/, '$1-$2')
            .slice(0, 18)
            // .replace(/(\d{10})(\d)/, '$1')
            ;
    };

    const [phone, setPhone] = useState("");
    const validatePhone = function () {
        return phone.replace(/\D/g, '').length === 10;
    }
    const [email, setEmail] = useState("");
    const validateEmail = function () {
        return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    }
    const [name, setName] = useState("");
    const validateName = function () {
        return name.length > 2;
    }
    const [surname, setSurname] = useState("");
    const validateSurname = function () {
        return surname.length > 2;
    }
    const [comment, setComment] = useState("");

    const [obj, setObj] = useState({});
    const [cartItemCount, setCartItemCount] = useState(getCartItemsCount());
    const [pending, setPending] = useState(false);
    const [response, setResponse] = useState({
        totalPrice: "",
        id: ""
    })

    const sendForm = function () {
        let data = formData();

        if (data !== emptyForm) {
            setPending(true);

            apiResponse( data, "orders/create-order.php").then((res)=>{
                setFormSent(true);
                setResponse(res)
                clearCart()
            }).catch((e)=> {
                alert(e)
                setFormSent(false);
                setPending(false);
            });

        }
    }

    const renderResponse = function () {
        return <div className={s.wrap}>
            <div className={s.empty}>
                {t('cart-purchaseOnPrice')} {response.totalPrice}{getCurrencyTag()} {t('cart-getSuccessfully')}. ID {t('cart-purchase')} {response.id}
            </div>
            <Link to={getLanguageForRootLink()}>{t('cart-toMain')}</Link>

        </div>
    }

    const renderForm = function () {
        return <div className={s.wrap__form}>
            <div className={s.form__title}><h2>{t('cart-yourItems')}</h2></div>
            <div className={s.form__item}>
                <div className={s.form__item__in}>
                    <CartModule change={()=>{
                        setCartItemCount(getCartItemsCount());
                    }}/>
                </div>
            </div>
            
            <div className={s.form__item__dop}>
                <div className={s.form__item__in}>
                    <div className={s.form__title__dop}><h3>{t('cart-contact')}:</h3></div>
                    <TextField label={t('cart-name')} disabled={pending} value={name} onChange={(event)=>{
                        setName(event.target.value)
                    }}
                            error={!validateName() && resultRequested}
                    ></TextField>
                    <TextField label={t('cart-surname')} disabled={pending}  value={surname} onChange={(event)=>{
                        setSurname(event.target.value)
                    }}
                            error={!validateSurname() && resultRequested}
                    ></TextField>

                    <TextField label={"Email"} disabled={pending} value={email} type="email" onChange={(event)=>{
                        setEmail(event.target.value)
                    }}
                            error={!validateEmail() && resultRequested}
                    ></TextField>

                    <TextField label={t('cart-phone')} disabled={pending}  value={phone} onChange={(event)=>{
                        setPhone(phoneMask(event.target.value))
                    }}
                            error={!validatePhone() && resultRequested}
                    ></TextField>
                </div>
            </div>

            <div className={s.form__delpay}>
                <div className={s.form__delpay__in}>
                    <div className={s.form__title__dop}><h3>{t('cart-delivery')}:</h3></div>
                    <TextField disabled={pending}
                            select
                            onChange={(event)=>{
                                setDeliveryType(deliveryTypes[event.target.value])
                            }}
                            defaultValue={deliveryTypes.address.key}
                            label={t('cart-deliveryType')}
                    >
                        <MenuItem value={deliveryTypes.address.key}>{t('cart-adress')}</MenuItem>
                        <MenuItem value={deliveryTypes.self.key}>{t('cart-byYourself')}</MenuItem>
                        {/*<MenuItem value={deliveryTypes.mail.key}>By mail</MenuItem>*/}
                    </TextField>
                    <div className={s.form__delpay__in__options}>
                        {
                            renderDelivery()
                        }
                    </div>
                </div>
            </div>


            <div className={s.form__delpay}>
                <div className={s.form__delpay__in}>
                    <div className={s.form__title__dop}><h3>{t('cart-payment')}:</h3></div>
                    <TextField disabled={pending}
                       select
                       onChange={(event)=>{
                           setPaymentType(paymentTypes[event.target.value])
                       }}
                       defaultValue={"card"}
                       label={t('cart-typePayment')}
                    >
                    {
                        deliveryType.paymentTypes.map((payment, index)=>{
                            return <MenuItem key={index} value={payment.key}>{t(payment.title)}</MenuItem>
                        })
                    }
                    </TextField>
                </div>
            </div>


            <div className={s.form__delpay}>
                <div className={s.form__delpay__in}>
                    <div className={s.form__title__dop}><h3>{t('cart-comment')}:</h3></div>
                    <TextField disabled={pending}  label={t('cart-comment')} value={comment} onChange={(event)=>{
                        setComment(event.target.value)
                    }}></TextField>
                </div>
            </div>

            <div className={s.form__btn__wrap}>
                {
                    pending ? <div><CircularProgress /></div>
                        : (<Button className={s.form__btn} variant="contained" onClick={()=>{
                            setObj(formData())
                            sendForm()
                        }}>{t('cart-buy')}</Button>)
                }
            </div>
        </div>
    }

    const renderDelivery = function (){
        switch(deliveryType.key) {
            case deliveryTypes.address.key:
                return <div className={s.render__options}>
                    <TextField disabled={pending}
                               label={t('cart-city')}
                               error={resultRequested ? (deliveryData.address.city !== null ?  deliveryData.address.city == "" : true) : false}
                               value={deliveryData.address.city}
                               onChange={(event)=>{
                                   let newAddress = {...deliveryData.address, city: event.target.value}
                                   setDeliveryData({...deliveryData, address: newAddress})
                               }}
                    ></TextField>
                    <TextField disabled={pending}
                               label={t('cart-street')}
                               value={deliveryData.address.street}
                               error={resultRequested ? (deliveryData.address.street !== undefined ?  deliveryData.address.street == "" : true) : false}
                               onChange={(event)=>{
                                   let newAddress = {...deliveryData.address, street: event.target.value}
                                   setDeliveryData({...deliveryData, address: newAddress})
                               }}
                    ></TextField>
                    <TextField disabled={pending}
                               label={t('cart-residential')}
                               value={deliveryData.address.residential}
                               error={resultRequested ? (deliveryData.address.residential !== undefined ?  deliveryData.address.residential == "" : true) : false}
                               onChange={(event)=>{
                                   let newAddress = {...deliveryData.address, residential: event.target.value}
                                   setDeliveryData({...deliveryData, address: newAddress})
                               }}
                    ></TextField>
                </div>
            // case deliveryTypes.mail.key:
            //     return <div>
            //         <TextField disabled={pending}
            //                    label="City"
            //                    value={deliveryData.mail.city}
            //                    error={resultRequested ? (deliveryData.mail.city !== undefined ?  deliveryData.mail.city == "" : true) : false}
            //                    onChange={(event)=>{
            //                        let newAddress = {...deliveryData.mail, city: event.target.value}
            //                        setDeliveryData({...deliveryData, mail: newAddress})
            //                    }}
            //         ></TextField>
            //         <TextField disabled={pending}
            //                    label="Post address"
            //                    value={deliveryData.mail.post}
            //                    error={resultRequested ? (deliveryData.mail.post !== undefined ?  deliveryData.mail.post == "" : true) : false}
            //                    onChange={(event)=>{
            //                        let newAddress = {...deliveryData.mail, post: event.target.value}
            //                        setDeliveryData({...deliveryData, mail: newAddress})
            //                    }}
            //         ></TextField>
            //         <TextField disabled={pending}
            //                    label="Postal code"
            //                    value={deliveryData.mail.postalCode}
            //                    error={resultRequested ? (deliveryData.mail.postalCode !== undefined ?  deliveryData.mail.postalCode == "" : true) : false}
            //                    onChange={(event)=>{
            //                        let newAddress = {...deliveryData.mail, postalCode: event.target.value}
            //                        setDeliveryData({...deliveryData, mail: newAddress})
            //                    }}
            //         ></TextField>
            //     </div>
            case deliveryTypes.self.key:
                return <div>{t('cart-willBeInOurShop')}</div>
        }
    };


    const renderUnauthorised = function () {
        return <div>
            {t('cart-unauthorized')}
            <Link to={getLanguageForRootLink() + "/profile"}>{t('cart-toProfilePage')}</Link>
        </div>
    }

    const render = function () {
        if (!auth) {
            return renderUnauthorised();
        }

        return cartItemCount > 0 ? (
            formSent
                ? renderResponse()
                : renderForm()

        ) : <div>
            <div className={s.empty}>
                {t('cart-noItemsInCart')}
            </div>
            <Link to={getLanguageForRootLink()}>{t('cart-toMain')}</Link>

        </div>
    }

    return <div className={s.wrap}>
        {
            render()
        }
    </div>
}
export default Cart;