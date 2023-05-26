import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../functions/useAuth";
import LoginForm from "../../../../Auth/LoginForm";
import { apiResponse } from "../../../../functions/api";
import { Auth } from "../../../../Auth/Auth";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileOrders from "./ProfileOrders/ProfileOrders";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../../../Store/Slices/userSlice";

const Profile = ()=>{
    const [auth, setAuth]= useState( false);
    const dispatch = useDispatch();
    useEffect(()=>{
        apiResponse({},"user/check-auth.php").then((data)=>{
           // return console.log(data)
            if(data.email !== null && data.token !== null){
                setAuth(true)
            }
            
        }).catch((err,dar)=>{
            console.log(err.propertyIsEnumerable())
        })

        apiResponse({
            products:[{
                id:47,
                count: 1
            },{
                id:55,
                count: 1
            },{
                id:49,
                count: 2
            },{
                id:56,
                variabled:1,
                count: 3
            }]
        },"orders/create-order.php").then((data)=>{
          console.log(data)
             
         }).catch((err,dar)=>{
             console.log(err.propertyIsEnumerable())
         })


    },[])
    return auth ?(
        <div>
            <div onClick={()=>{
                dispatch(removeUser())
                window.location.reload()
            }}>Logout</div>
            <ProfileInfo />
            <ProfileOrders />
        </div>
    ):(
        <Auth />
    )
}
export default Profile