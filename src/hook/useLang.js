import { useDispatch, useSelector } from "react-redux";
export function useLang(){
    const {lang} = useSelector(state => state.lang);
    const dispatch = useDispatch();
    
     return lang
}