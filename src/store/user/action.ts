import { Action } from "../../interface/Action"
import { SET_USER, userState, CLEAR_USER } from "./types"


export const setUser=(data:userState):Action=>{
    return{
        type:SET_USER,
        payload:data,
    }
}

export const clearUser=():Action=>{
    return{
        type:CLEAR_USER,
        
    }
}