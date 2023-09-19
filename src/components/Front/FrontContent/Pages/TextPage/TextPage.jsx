import React from "react";
import s from "./TextPage.module.css"
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "../Privacy/PrivacyPolicy";

export default function TextPage(){
    return(
        <div className={s.wrap}>
            <Routes>
                <Route path="/privacy-policy" element={<PrivacyPolicy ></PrivacyPolicy>}></Route>
            </Routes>
        </div>
    )
}
