import axios from "axios";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { getRealLanguage } from "./getLanguage";

export function serverAdress(arg){
   //return "http://kaliptas.com/" + arg;
   return "https://kaliptas.people-ua.org/" + arg;
}

export function api(apiFunc, obj, url){
   // obj.id = localStorage.getItem('id');
    obj.token = localStorage.getItem('token');
    if(obj?.email){

    }else{
        obj.email = localStorage.getItem('email');
    }
    obj.lang = getRealLanguage();
    axios({
        url: serverAdress(url),
        method: "POST",
        header: {'application/x-www-form-urlencoded': 'application/json;charset=utf-8'},
        data: JSON.stringify(obj),
        onUploadProgress: (event) => {
            document.getElementById('lineLoading').style.width = Math.round((event.loaded * 100) / event.total) + "%"
        } 
    })
    .then((data)=>{
        apiFunc(data.data)
        document.getElementById('lineLoading').style.width = 0;
    })
    .catch((error)=>{
        throw error
        
    })
}

// apiResponseWithRedirect(obj, url) {
//     try {
//         return apiResponse(obj, url);
//     } catch (e) {
//         redirect
//     }
// }


export async function apiResponse(obj, url){
    // obj.id = localStorage.getItem('id');
     obj.token = localStorage.getItem('token');
     if(obj?.email){
 
     }else{
         obj.email = localStorage.getItem('email');
     }
     obj.lang = getRealLanguage();
   return await axios({
         url: serverAdress(url),
         method: "POST",
         header: {'application/x-www-form-urlencoded': 'application/json;charset=utf-8'},
         data: JSON.stringify(obj),
         onUploadProgress: (event) => {
             document.getElementById('lineLoading').style.width = Math.round((event.loaded * 100) / event.total) + "%"
         } 
     })
     .then((data)=>{
         document.getElementById('lineLoading').style.width = 0;
         return (data.data)
     })
     .catch((error)=>{
         let obj = {
            "code":error.code
         }
         throw error;
     })
 }
 


export function apiMultipartUpload(apiFunc,links, files, url, index,shopID,count){
    const objImage = new FormData();

    objImage.append("shopID",shopID);
    objImage.append("image",files.files[index]);

    objImage.id = localStorage.getItem('id');
    objImage.token = localStorage.getItem('token');
    if(objImage?.email){

    }else{
        objImage.email = localStorage.getItem('email');
    }

    axios({
        url: serverAdress(url),
        method: "POST",
        header: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (event) => {
           // document.getElementById('lineLoading').style.width = Math.round((event.loaded * 100) / event.total) + "%"
        },
        data: objImage,
        
      })
        .then((data) => {
           // apiFunc(data.data)
           if(count === 0){
            return apiFunc(data.data)
           }
            document.getElementById('lineLoading').style.width = 0;
            if(index + 1 == files.files.length){
                links.push(data.data)
                apiFunc(links)
            }else{
                links.push(data.data)
                apiMultipartUpload(apiFunc,links, files, url, index + 1,shopID,1)
            }
        })
        .catch((error) => {
            throw error
        });
}