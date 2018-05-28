import { FETCH_USER } from "../action/types";

export default function(state=null,action){
    switch(action.type){
        default:
            return state;
        case FETCH_USER: 
            return action.payload.data || false
    }
}