import React, {useState} from "react";
import CartModule from "../../../Modules/Cart/CartModule";
import s from "./Cart.module.css"
import {MenuItem, TextField} from "@mui/material";

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
    }

    const deliveryTypes = {
        address: {
            key: "add",
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
    }

    //-in cash
    // -C.O.D (nalozhennyy platyouzh)
    // -transfer to credit
    // -in cash to courier
    // -to bank account



    const [paymentType, setPaymentType] = useState(paymentTypes.cash)

    const renderDelivery = function (){
        switch(deliveryType.key) {
            case deliveryTypes.address.key:
                return <div>{deliveryTypes.address.title}</div>
            case deliveryTypes.self.key:
                return <div>{deliveryTypes.self.title}</div>
            case deliveryTypes.mail.key:
                return <div>{deliveryTypes.mail.title}</div>
        }
    }

    const renderPayment = function () {
        return <div></div>
    }

    const [deliveryType, setDeliveryType] = useState(deliveryTypes.address);


    return(
        <div className={s.wrap}>
            <div>Ваши товар</div>
            <CartModule setTotalPrice={()=>{}}/>
            <div>Delivery:</div>
            <TextField
            select
            onChange={(event)=>{
                console.log(event.target.value)
                setDeliveryType(deliveryTypes[event.target.value])
            }}
            defaultValue={"address"}
            label="Delivery Type"
            >
                <MenuItem value={"address"}>Address</MenuItem>
                <MenuItem value={"self"}>By yourself</MenuItem>
                <MenuItem value={"mail"}>By mail</MenuItem>
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
                defaultValue={"cash"}
                label="Payment Type"
            >
                {
                    deliveryType.paymentTypes.map((payment)=>{
                        return <MenuItem value={payment.key}>{payment.title}</MenuItem>
                    })
                }
            </TextField>
            {
                renderPayment()
            }


        </div>
    )
}
export default Cart;