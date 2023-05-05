import React from "react";
import s from "./FrontSlider.module.css"
import { useState } from "react";
import { useEffect } from "react";
import FrontSlide from "./FrontSlide/FrontSlide";

const FrontSlider = ({ data }) => {

    const [state, setState] = useState({
        sliderPosition: 0,
        slideNow: 0,
        step: 100,
        amountOnPage: 1,
        dotActive: 0,
        go: true,
        data: data
    })
    useEffect(() => {
        const interval = setInterval(() => {
            if (state.go) {
                setState({
                    ...state,
                    sliderPosition: state.sliderPosition + state.step,
                    dotActive: state.dotActive + 1,
                    go: state.sliderPosition < (data.length - 2) * 100 ? true : false
                })
            } else {
                setState({
                    ...state,
                    sliderPosition: state.sliderPosition - state.step,
                    dotActive: state.dotActive - 1,
                    go: state.sliderPosition == 100 ? true : false
                })
            }
        }, 3000);
        return () => clearInterval(interval);
    });
    return (
        <div className={s.wrap}>
            <div className={s.inner}>
                <div className={s.slider} style={{
                    gridTemplateColumns: `repeat(${data.length}, 100%)`,
                    marginLeft: `${-state.sliderPosition}%`
                }}>
                    {
                        state.data.map((item, index) => <FrontSlide item={item} key={index} />)
                    }
                </div>
                <div className={s.dots__wrap}>
                    <div className={s.dots}>
                        {
                            data.map((item, index) => {
                                return index % state.amountOnPage == 0 || index === 0 ? (
                                    <div key={index + 100} className={state.dotActive == index ? `${s.dot} ${s.dot__active}` : s.dot} onClick={() => {
                                        setState({
                                            ...state,
                                            dotActive: index,
                                            sliderPosition: state.step * index
                                        })
                                    }}>
                                    </div>
                                ) : null
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default FrontSlider