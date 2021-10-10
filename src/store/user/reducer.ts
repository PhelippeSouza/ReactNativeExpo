import {Action} from "../../interface/Action"
import { userState,SET_USER, CLEAR_USER } from "./types"

const initialState:userState={
    nome:"",
    email:"",
    password:""
}


const reducer = (state=initialState, action:Action)=>{
    switch(action.type){
        case SET_USER:
            return{...state,...action.payload}

    case CLEAR_USER:
        return initialState;
        default:
            return state;
  
    }
}

export default reducer