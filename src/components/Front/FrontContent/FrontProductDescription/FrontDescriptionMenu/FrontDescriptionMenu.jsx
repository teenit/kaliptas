import React from "react";
import s from '../ItemDesc.module.css'
import FrontDescriptionInfo from "../FrontDescriptionInfo/FrontDescriptionInfo";
import FrontDescriptionCharacteristics from "../FrontDescriptionCharacteristics/FrontDescriptionCharacteristics";
import FrontDescriptionQuestions from "../FrontDescriptionQuestions/FrontDescriptionQuestions";
import FrontDescriptionFeedbacks from "../FrontDescriptionFeedbacks/FrontDescriptionFeedbacks";
import FrontDescriptionPhotos from "../FrontDescriptionPhotos/FrontDescriptionPhotos";
import { useState } from "react";
const FrontDescriptionMenu = ()=>{
    const [desc, setDesc] = useState(true)
    const [char, setChar] = useState(false)
    const [questions, setQuestions] = useState(false)
    const [feedbacks, setFeedbacks] = useState(false)
    const [photos, setPhotos] = useState(false)
    return(
        <div className={s.desc__info}>

        <nav className={s.desc__menu}>
            <p tabIndex={0} onClick={() => {
                setDesc(true)
                setChar(false)
                setQuestions(false)
                setFeedbacks(false)
                setPhotos(false)
            }}><b>Описание</b></p>
            <div className={s.menu__line}></div>
            <p tabIndex={0} onClick={() => {
                setDesc(false)
                setChar(true)
                setQuestions(false)
                setFeedbacks(false)
                setPhotos(false)
            }}><b>Характеристики</b></p>
            <div className={s.menu__line}></div>
            <p tabIndex={0} onClick={() => {
                setDesc(false)
                setChar(false)
                setQuestions(true)
                setFeedbacks(false)
                setPhotos(false)
            }}><b>Вопросы</b></p>
            <div className={s.menu__line}></div>
            <p tabIndex={0} onClick={() => {
                setDesc(false)
                setChar(false)
                setQuestions(false)
                setFeedbacks(true)
                setPhotos(false)
            }}><b>Отзывы</b></p>
            <div className={s.menu__line}></div>
            <p tabIndex={0} onClick={() => {
                setDesc(false)
                setChar(false)
                setQuestions(false)
                setFeedbacks(false)
                setPhotos(true)
            }}><b>Фото</b></p>
        </nav>


        {desc ? <FrontDescriptionInfo/> : null}
        {char ? <FrontDescriptionCharacteristics />: null}
        {questions ? <FrontDescriptionQuestions />:null}
        {feedbacks ? <FrontDescriptionFeedbacks />:null}
        {photos ? <FrontDescriptionPhotos />:null}

    </div>
    )
}
export default FrontDescriptionMenu