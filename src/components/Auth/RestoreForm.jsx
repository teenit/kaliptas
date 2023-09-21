import React, { useState } from "react";
import s from "./style.module.css";
import { Button, TextField } from "@mui/material";
import { t } from "i18next";
import { apiResponse } from "../functions/api";
import { Send } from "@mui/icons-material";

const RestoreForm = ()=>{
    const [state,setState] = useState({
        email:{
            text:'',
            disabled:false,
            show:true
        },
        pass:{
            text:'',
            disabled: false,
            show:false
        },
        passTo:{
            text:'',
            disabled: false,
            show:false
        },
        code:{
            text:'',
            disabled: false,
            show:false
        }
    })

    const sxStyles = {
        backgroundColor: '#fff',
        border: 'solid 2px #c368e6',
        borderRadius: '10px',
        fontFamily: 'Montserrat',
    }

    const InputPropsStyles = {
        sx: {
            '& fieldset':{
                border: 'none!important',
                borderRadius: '10px',
                transition: 'all .3s',
            },
            '&:hover fieldset': {
                border: 'none!important',
                boxShadow: '0 0 10px 2px #00000022',
                borderRadius: '10px',
            },
            '&:focus-within fieldset, &:focus-visible fieldset': {
                border: 'none!important',
                boxShadow: '0 0 10px 2px #00000022',
                borderRadius: '10px',
            },
            input: {
                ':-webkit-autofill': {
                    WebkitBoxShadow: '0 0 0 1000px white inset',
                    borderRadius: '10px',
                },
                
            }
        },
    }
    const inputPropsStyles = {
        sx: {
            padding: '12px',    
            color: '#000!important',
            fontFamily: 'Montserrat',
        },
    }
 
    const [status,setStatus] = useState({
        text:'email',
        btn:'login-form-access'
    })
    const getCode = ()=>{
        apiResponse({email:state.email.text},'user/restore-get-code.php').then((e)=>{
            setStatus({
                text:'code',
                btn:'login-form-code'
            })
            setState({...state,
                code:{...state.code,show:true},
                email:{...state.email,disabled:true},
            }) 
         
        }).catch((e)=>window.alert("Mistake"))
    }

    const insertCode = ()=>{
        apiResponse({
            email:state.email.text,
            code:state.code.text,
            
        },'user/restore-insert-code.php').then((e)=>{
            if(!e) return alert('Mistake')
            setStatus({
                text:'pass',
                btn:'Restore pass'
            })
            setState({...state,
                code:{...state.code,show:true,disabled:true},
                email:{...state.email,disabled:true},
                pass:{...state.pass,show:true},
                passTo:{...state.passTo,show:true},
            }) 
        }).catch((e)=>window.alert("Mistake"))
    }
    const restoreAccess = ()=>{
        if(state.pass.text !== state.passTo.text) return;
        apiResponse({
            email:state.email.text,
            code:state.code.text,
            pass:state.pass.text,
            passTo:state.passTo.text
        },'user/restore-access.php').then((e)=>{

            window.alert(t('Recovery password changed'));
            window.location.reload()

        }).catch((e)=>window.alert("Mistake"))
    }

    function sendForm(event){
        event.preventDefault();
        switch (status.text){
            case 'email':
                getCode()
                break;
            case 'code':
                insertCode();
                break;
            case 'pass':
                restoreAccess()
                break;
            }
            
    }
    return(
        <div className={s.page}>
            <div className={s.form__wrap__restore}>
                <h2 className={s.title__restore}>{t('restore-form-restore')}</h2>
                <div className={s.form__inner__restore}>
                    <form onSubmit={sendForm} className={s.form}>
                        <div className={s.inp__div}>
                            <label htmlFor="">E-mail</label>
                            <TextField
                                className={s.textfield__restore}
                                disabled={state.email.disabled} 
                                onChange={(e)=>setState({...state,email:{...state.email,text:e.target.value}})} 
                                value={state.email.text} 
                                type="text" 
                                required 
                                sx={{...sxStyles}}
                                inputProps={{...inputPropsStyles}}
                                InputProps={{...InputPropsStyles}}>
                            </TextField>
                        </div>
                        {
                            state.code.show ? 
                            <div className={s.inp__div}>
                                <label htmlFor="">Secret code</label>
                                <TextField 
                                    className={s.textfield__restore} 
                                    disabled={state.code.disabled} 
                                    onChange={(e)=>setState({...state,code:{...state.code,text:e.target.value}})} 
                                    value={state.code.text} 
                                    type="text" 
                                    required 
                                    sx={{...sxStyles}}
                                    inputProps={{...inputPropsStyles}}
                                    InputProps={{...InputPropsStyles}}>
                            </TextField>
                            </div>:null
                        }
                        
                        {
                        state.pass.show ? 
                        <>
                        <div className={s.inp__div}>
                            <label htmlFor="">New Password</label>
                            <TextField 
                                className={s.textfield__restore} 
                                onChange={(e)=>setState({...state,pass:{...state.pass,text:e.target.value}})} 
                                value={state.pass.text} 
                                type="password" 
                                required 
                                sx={{...sxStyles}}
                                inputProps={{...inputPropsStyles}}
                                InputProps={{...InputPropsStyles}}>        
                            </TextField>
                        </div>
                        <div className={s.inp__div}>
                            <label htmlFor="">Repeat New Password</label>
                            <TextField 
                                className={s.textfield__restore}
                                onChange={(e)=>setState({...state,passTo:{...state.passTo,text:e.target.value}})} 
                                value={state.passTo.text} 
                                type="password" required 
                                sx={{...sxStyles}}
                                inputProps={{...inputPropsStyles}}
                                InputProps={{...InputPropsStyles}}>
                            </TextField>
                            {   state.pass.text !== state.passTo.text ?
                                <span className={s.fail}>{t('Password mismatch')}</span>:null
                            }
                        </div>
                        </>:null
                        }
                     
                        <div className={s.inp__div}>
                            <Button className="btn" onClick={sendForm} variant="contained" endIcon={<Send />}>{t(status.btn)}</Button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default RestoreForm