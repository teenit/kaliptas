import React, { Component } from "react";
import s from './modal.module.css';
import { createPortal } from "react-dom";
const modal = document.querySelector('#modal');

export class Modal extends Component {
    render()
    {
     return createPortal(       
         <div className={s.modal__wrap}>
                {this.props.children}      
         </div>,
         modal
     )
    } 
  }
  export default Modal;