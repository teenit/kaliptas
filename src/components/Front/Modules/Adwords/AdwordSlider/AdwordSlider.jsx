import React from "react";
import s from "./AdwrodSlider.module.css"
import { useState } from "react";
import { useEffect } from "react";

const AdwordSlider = ({data}) =>{
    const [state, setState] = useState({
        sliderPosition: 0,
        slideNow: 0,
        step: 100,
        amountOnPage : 1,
        dotActive: 0,
        go:true
    })
    useEffect(() => {
        const interval = setInterval(() => {
            if(state.go){
                setState({...state, 
                    sliderPosition: state.sliderPosition + state.step, 
                    dotActive: state.dotActive + 1,
                    go: state.sliderPosition < (data.length - 2) * 100 ? true :false
                })
            }else{
                setState({...state, 
                    sliderPosition: state.sliderPosition - state.step, 
                    dotActive: state.dotActive - 1,
                    go: state.sliderPosition == 100 ? true :false
                })
            }
        }, 3000);
        return () => clearInterval(interval);
    });
    return(
        <div className={s.wrap}>
            <div className={s.inner}>
                <div className={s.slider} style={{
                    gridTemplateColumns: `repeat(${data.length}, 100%)`,
                    marginLeft: `${-state.sliderPosition}%`
                }}>
                    {
                        data.map((item, index)=>{
                            return(
                                <div className={s.slide} key={index}>
                                    <div className={s.slide__in}>
                                       <div className={s.slide__text}>
                                            <p className={s.title}>{item.title}<br></br>{item.titleDop}</p>
                                            <div className={s.sub__title}>
                                                <div className={s.sub__title__inner}>
                                                    <p className={s.title__dop}>до</p>
                                                    <div className={s.line}></div>
                                                </div>
                                                <div className={s.sub__title__inner__dop}>
                                                    <p className={s.title__price}>{item.skidca}</p>
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                    <div className={s.slide__btn}>
                                            <a href="#" className={s.btn}>Подробнее</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={s.dots__wrap}>
                    <div className={s.dots}>
                        {
                            data.map((item, index)=>{
                                return index % state.amountOnPage == 0 || index === 0 ?(
                                    <div key={index + 100} className={state.dotActive == index ? `${s.dot} ${s.dot__active}` : s.dot}  onClick={()=>{
                                        setState({...state, 
                                            dotActive: index,
                                            sliderPosition: state.step * index
                                        })
                                    }}>
                                    </div>
                                ): null
                            })
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default AdwordSlider