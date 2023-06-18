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
 
    const [status,setStatus] = useState({
        text:'email',
        btn:'Restore access'
    })
    const getCode = ()=>{
        apiResponse({email:state.email.text},'user/restore-get-code.php').then((e)=>{
            setStatus({
                text:'code',
                btn:'Send code'
            })
            setState({...state,
                code:{...state.code,show:true},
                email:{...state.email,disabled:true},
            }) 
         
        }).catch((e)=>window.alert("Ошибка"))
    }

    const insertCode = ()=>{
      //  return console.log(state.email)
        apiResponse({
            email:state.email.text,
            code:state.code.text,
            
        },'user/restore-insert-code.php').then((e)=>{
            if(!e) return alert('Ошибка')
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
        }).catch((e)=>window.alert("Ошибка"))
    }
    const restoreAccess = ()=>{
        if(state.pass.text !== state.passTo.text) return;
        apiResponse({
            email:state.email.text,
            code:state.code.text,
            pass:state.pass.text,
            passTo:state.passTo.text
        },'user/restore-access.php').then((e)=>{

          // return console.log(e)
            window.alert(t('Recovery password changed'));
            window.location.reload()

        }).catch((e)=>window.alert("Ошибка"))
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
                <h2 className={s.title__restore}>Восстановление</h2>
                <div className={s.form__inner__restore}>
                    <form onSubmit={sendForm} className={s.form}>
                        <div className={s.inp__div}>
                            <TextField disabled={state.email.disabled} onChange={(e)=>setState({...state,email:{...state.email,text:e.target.value}})} value={state.email.text} type="text" required label="E-mail"/>
                        </div>
                        {
                            state.code.show ? 
                            <div className={s.inp__div}>
                                <TextField disabled={state.code.disabled} onChange={(e)=>setState({...state,code:{...state.code,text:e.target.value}})} value={state.code.text} type="text" required label="Secret code"/>
                            </div>:null
                        }
                        
                        {
                        state.pass.show ? 
                        <>
                        <div className={s.inp__div}>
                            <TextField onChange={(e)=>setState({...state,pass:{...state.pass,text:e.target.value}})} value={state.pass.text} type="password" required label="New Password"/>
                        </div>
                        <div className={s.inp__div}>
                            <TextField onChange={(e)=>setState({...state,passTo:{...state.passTo,text:e.target.value}})} value={state.passTo.text} type="password" required label="Repeat New Password"/>
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