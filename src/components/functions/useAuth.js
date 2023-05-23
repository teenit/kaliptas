import { useDispatch, useSelector } from "react-redux";
import { serverAdress } from "./api";
import { removeUser} from "../../Store/Slices/userSlice";
import axios from "axios";
import { t } from "i18next";

function check(token,email){
    if(token == null || token == 'null' || token == undefined || token == "" || email == null || email == 'null' || email == undefined || email == "") return false;
    else return true;
}

export async function useAuth(arg,url){
    const {token,email} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const errorMes = false;
    if(check(token,email)){
     await axios({
            url: serverAdress(url),
            method: "POST",
            header: {'Content-Type': 'application/json;charset=utf-8'},
            onUploadProgress: (event) => {
                console.log(event)
                document.getElementById('lineLoading').style.width = Math.round((event.loaded * 100) / event.total) + "%"
            },
            data: JSON.stringify({
                token:token,
                email:email
            })

        })
        .then((data)=>{
            console.log(data)
            if(data.data.token !== null){
                arg(true)
            }else{
                dispatch(removeUser())
                arg(false)
                console.log("kkkk")
            }   
        })
        .catch((error)=>{
            console.log(error)
            let div = document.createElement('div');
            div.innerHTML = t(error.response.status);
            div.className = "error__message"
            document.getElementById('error').append(div);
            setTimeout(()=>{
                div.remove();
            },5000)
            arg(false)
        });
    }else{
        return arg(false);
    }
    
}