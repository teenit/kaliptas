import { useDispatch, useSelector } from "react-redux";
import { serverAdress } from "./api";
import { removeUser} from "../../Store/Slices/userSlice";
import axios from "axios";

function check(token,email){
    if(token == null || token == 'null' || token == undefined || token == "" || email == null || email == 'null' || email == undefined || email == "") return false;
    else return true;
}

export function useAuth(){
    const {token,email} = useSelector(state => state.user);
    const dispatch = useDispatch();
    if(check(token,email)){
       return axios({
            url: serverAdress('user/check-auth.php'),
            method: "POST",
            header: {'Content-Type': 'application/json;charset=utf-8'},
            data: JSON.stringify({
                token:token,
                email:email
            })
        })
        .then((data)=>{
            if(data.data.token !== null){
                return true
            }else{
                dispatch(removeUser())
                return false
            }   
        })
        .catch((error)=>{console.log(error)})
    }else{
        return false;
    }
   
}