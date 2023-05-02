import React from "react";
import Modal from "../Modals/Modal";
import s from "./Loading.module.css"

const LoadingLine = ({percent}) =>{
    return(
        <Modal>
            <div style={{width: `${percent}%`}} className={s.line}></div>
        </Modal>
    )
}
export default LoadingLine