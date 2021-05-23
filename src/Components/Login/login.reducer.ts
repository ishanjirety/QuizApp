import {InitialState,LoginAction} from './loginTypes'

export const initialState = {
    username:"",
    password:""
}

export function loginDispatch(state : InitialState, action: LoginAction){
    switch (action.type) {
        case "USERNAME":
            return {...state,username:action.payload}   
        case "PASSWORD":
            return {...state,password:action.payload}
    }
}