import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import useLang from './hook/useLang'
i18next
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .use(I18NextHttpBackend)
    .init({
        debug:false,
        fallbackLng: localStorage.getItem('lang') == '' ? 'ge' : localStorage.getItem('lang'),
    })
