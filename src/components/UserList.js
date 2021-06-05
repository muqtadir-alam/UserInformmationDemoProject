import axios from "axios";
import React from "react";
import {useEffect} from 'react'
import {SetUsers} from "../Redux/actions/UserAction"
import {  UserComponent } from "./UserComponent";
import { useDispatch } from "react-redux";
 

export const UserList = () => {
    
    
    const dispatch = useDispatch();
    
    const fetchUsers = async () => {
        const response = await axios.get(" https://jsonplaceholder.typicode.com/posts")
            .catch((err) => {
                console.log("err is ", err)
            });
        dispatch(SetUsers(response.data));
        
        
    };

    
    useEffect(() => {
        fetchUsers();
    }, );
    
    
    return (
        <div className="ui grid container" >
            
               <UserComponent/>
            </div>
        
    )
}