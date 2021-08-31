import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../Layout/Header';
function Login(props){
    const histroy = useHistory();
    useEffect(()=>{
        if(!localStorage.getItem("user_info")){
            histroy.push("/login");
        }
    },[])

    let Cmp= props.Cmp;
    return (
        
        <div>
           <Cmp/> 
        </div>
    )
}


export default Login;