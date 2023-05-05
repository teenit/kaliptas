import React, { useState } from "react";
import s from "./KaliptasDescription.module.css"
import arrowImg from "./../../../../../img/collapse-arrow-50.png"

const KaliptasDescription = () =>{
    const [state, setState] = useState(false)
    return(
        <div className={s.in}>
            <div className={s.title__wrap} onClick={()=>{
               setState(!state) 
            }}>
                <h3 className={s.title}>Kaliptas</h3>
                <img className={`${s.arrow} ${state ? s.arrow__dop : null}`} src={arrowImg} alt="Стрелка" />
            </div>
            <div className={s.text__wrap}>
                <p className={`${s.text} ${state ? s.text__full : s.text__aver}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium quibusdam, aliquam accusamus aut incidunt laudantium fugiat impedit nam dolore ratione nulla recusandae mollitia dolor quos nisi doloremque beatae! Culpa!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis magni quas vitae exercitationem maxime. A, eum placeat quaerat ex fugiat veritatis, voluptatum quia, quos magni quibusdam totam ut commodi recusandae.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laudantium. Temporibus perspiciatis harum minus vero dicta, facilis, ullam fugit voluptatum hic illo veritatis obcaecati optio blanditiis magnam cumque, sed delectus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aut quidem saepe explicabo facilis! Veniam quis ex quod, molestiae similique iste id assumenda. Assumenda vel quisquam quas dolores modi ex.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sapiente quasi nisi! Nemo, id facilis odit neque accusantium ab doloribus voluptas, dolores laborum a enim dolorum assumenda in. Nam, ipsa!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odit eligendi exercitationem magni incidunt, in placeat similique a quam facilis expedita eaque atque voluptates quibusdam iusto, quo nostrum doloribus quia!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi placeat eveniet reprehenderit in eos, architecto ex nisi quis molestiae nesciunt quisquam quaerat vel eius nemo deleniti quas sunt quibusdam?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam sit libero excepturi expedita eaque, molestiae fugiat quod modi in nesciunt assumenda maiores dolore consectetur dolor laudantium ipsum officia! Voluptatum, aspernatur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolore dolores tempora ipsa quas delectus ex, porro non, obcaecati et, animi qui! Fugit sequi at temporibus cupiditate tenetur iste eveniet?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus quas in! Quaerat illo rem accusantium. Voluptate, necessitatibus minus! Porro similique accusamus atque voluptatibus facilis eveniet, quia debitis velit consequuntur?
                </p>
            </div>
        </div>
    )
}
export default KaliptasDescription