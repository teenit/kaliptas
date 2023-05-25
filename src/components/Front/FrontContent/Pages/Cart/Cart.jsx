import React, {useState} from "react";
import CartModule from "../../../Modules/Cart/CartModule";
import s from "./Cart.module.css"
import {MenuItem, TextField} from "@mui/material";
import {getCartItemsCount, getItemsList} from "../../../../functions/cartControll";
import {Link} from "react-router-dom";
import {getLanguageForRootLink} from "../../../../functions/getLanguage";
import {api} from "../../../../functions/api";
const Cart = ()=>{

    const paymentTypes = { //todo: do translate
        cash : {
            key: "cash",
            title: "In cash"
        },
        cod : {
            key: "cod",
            title: "C.O.D."
        },
        card:{
            key: "card",
            title: "To card"
        },
        bank :{
            key: "bank",
            title: "To bank account"
        }
    };

    const deliveryTypes = {
        address: {
            key: "address",
            title: "Address", //todo: do translate
            paymentTypes: [paymentTypes.card, paymentTypes.bank]
        },
        self: {
            key: "self",
            title: "By yourself",
            paymentTypes: [paymentTypes.card, paymentTypes.bank, paymentTypes.cash]
        },
        mail: {
            key: "mail",
            title: "By mail",
            paymentTypes: [paymentTypes.card, paymentTypes.bank, paymentTypes.cod]
        }
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

    const renderDelivery = function (){
        switch(deliveryType.key) {
            case deliveryTypes.address.key:
                return <div>
                    <TextField
                        label="City"
                        error={resultRequested ? (deliveryData.address.city !== null ?  deliveryData.address.city == "" : true) : false}
                        value={deliveryData.address.city}
                        onChange={(event)=>{
                            let newAddress = {...deliveryData.address, city: event.target.value}
                            setDeliveryData({...deliveryData, address: newAddress})
                        }}
                    ></TextField>
                    <TextField
                        label="Street"
                        value={deliveryData.address.street}
                        error={resultRequested ? (deliveryData.address.street !== undefined ?  deliveryData.address.street == "" : true) : false}
                        onChange={(event)=>{
                            let newAddress = {...deliveryData.address, street: event.target.value}
                            setDeliveryData({...deliveryData, address: newAddress})
                        }}
                    ></TextField>
                    <TextField
                        label="Residential"
                        value={deliveryData.address.residential}
                        error={resultRequested ? (deliveryData.address.residential !== undefined ?  deliveryData.address.residential == "" : true) : false}
                        onChange={(event)=>{
                            let newAddress = {...deliveryData.address, residential: event.target.value}
                            setDeliveryData({...deliveryData, address: newAddress})
                        }}
                    ></TextField>
                </div>
            case deliveryTypes.mail.key:
                return <div>
                    <TextField
                        label="City"
                        value={deliveryData.mail.city}
                        error={resultRequested ? (deliveryData.mail.city !== undefined ?  deliveryData.mail.city == "" : true) : false}
                        onChange={(event)=>{
                            let newAddress = {...deliveryData.mail, city: event.target.value}
                            setDeliveryData({...deliveryData, mail: newAddress})
                        }}
                    ></TextField>
                    <TextField
                        label="Post address"
                        value={deliveryData.mail.post}
                        error={resultRequested ? (deliveryData.mail.post !== undefined ?  deliveryData.mail.post == "" : true) : false}
                        onChange={(event)=>{
                            let newAddress = {...deliveryData.mail, post: event.target.value}
                            setDeliveryData({...deliveryData, mail: newAddress})
                        }}
                    ></TextField>
                    <TextField
                        label="Postal code"
                        value={deliveryData.mail.postalCode}
                        error={resultRequested ? (deliveryData.mail.postalCode !== undefined ?  deliveryData.mail.postalCode == "" : true) : false}
                        onChange={(event)=>{
                            let newAddress = {...deliveryData.mail, postalCode: event.target.value}
                            setDeliveryData({...deliveryData, mail: newAddress})
                        }}
                    ></TextField>
                </div>
            case deliveryTypes.self.key:
                return <div>Will be in our shop</div>
        }
    };

    const [deliveryType, setDeliveryType] = useState(deliveryTypes.address);
    const [resultRequested, setResultRequested] = useState(false);

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
                return {};
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
            .replace(/(\d{2})(\d)/, '+($1) $2')
            .replace(/(\d{3})(\d{3})/, '$1-$2')
            .replace(/(\d{3})(\d{4})/, '$1-$2')
            .slice(0, 18)
            // .replace(/(\d{10})(\d)/, '$1')
            ;
    };

    const [phone, setPhone] = useState("");
    const validatePhone = function () {
        return phone.length === 18;
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

    const sendForm = function () {
        let data = formData();


        if (data!== {}) {
            api((response)=>{
                console.log("Response:", response)
            }, data, "orders/create-order.php")
        }
    }

    return cartItemCount > 0 ? (

        <div className={s.wrap}>
            <div>Ваши товар</div>
            <CartModule change={()=>{
                setCartItemCount(getCartItemsCount());
            }}/>
            <TextField label={"Name"} value={name} onChange={(event)=>{
                setName(event.target.value)
            }}
            error={!validateName() && resultRequested}
            ></TextField>
            <TextField label={"Surname"} value={surname} onChange={(event)=>{
                setSurname(event.target.value)
            }}
            error={!validateSurname() && resultRequested}
            ></TextField>

            <TextField label={"Email"} value={email} type="email" onChange={(event)=>{
                setEmail(event.target.value)
            }}
            error={!validateEmail() && resultRequested}
            ></TextField>

            <TextField label={"Phone"} value={phone} onChange={(event)=>{
                setPhone(phoneMask(event.target.value))
            }}
            error={!validatePhone() && resultRequested}
            ></TextField>

            <div>Delivery:</div>
            <TextField
            select
            onChange={(event)=>{
                setDeliveryType(deliveryTypes[event.target.value])
            }}
            defaultValue={deliveryTypes.address.key}
            label="Delivery Type"
            >
                <MenuItem value={deliveryTypes.address.key}>Address</MenuItem>
                <MenuItem value={deliveryTypes.self.key}>By yourself</MenuItem>
                <MenuItem value={deliveryTypes.mail.key}>By mail</MenuItem>
            </TextField>
            {
                renderDelivery()
            }

            <div>Payment:</div>
            <TextField
                select
                onChange={(event)=>{
                    setPaymentType(paymentTypes[event.target.value])
                }}
                defaultValue={"card"}
                label="Payment Type"
            >
                {
                    deliveryType.paymentTypes.map((payment, index)=>{
                        return <MenuItem key={index} value={payment.key}>{payment.title}</MenuItem>
                    })
                }
            </TextField>
            <TextField label="Comment" value={comment} onChange={(event)=>{
                setComment(event.target.value)
            }}></TextField>

            <button onClick={()=>{
                setObj(formData())
                sendForm()
            }}>Get obj</button>
            <div>{JSON.stringify(obj, null, 2)}</div>
        </div>

    ) : <div className={s.wrap}>
        <div className={s.empty}>
            No items in cart
        </div>
        <Link to={getLanguageForRootLink()}>To main</Link>

    </div>
}
export default Cart;