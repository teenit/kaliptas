import React from "react";
import s from './style.module.css';
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Modals/Modal";
import { Button } from "@mui/material";
import { t } from "i18next";
import { setMode } from "../../../Store/Slices/maintenanceSlice";

const Maintenance = ()=>{
    const {mode} = useSelector(state => state.mode)
    const dispatch = useDispatch();

    return mode ?(
        <Modal>
            <div className={s.modal}>
                <div className={s.title}>
                    <h1>საიტი დამუშავების პროცესშია, შეკვეთები არ მუშავდება <br /> 
                        The site is under development, orders are not processed <br /> 
                        Сайт находится на стадии разработки, заказы не обрабатываются</h1>
                        <Button
                            onClick={()=>{
                                dispatch(setMode({mode:false}))
                            }}
                            variant="contained">{t('good')}</Button>
                </div>
                
            </div>
        </Modal>
    ):null
}

export default Maintenance;