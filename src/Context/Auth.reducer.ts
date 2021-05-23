import {AuthType,AuthAction} from './Context'
import {users} from '../Database'

export const initialState :AuthType = {
    isUserLoggedIn :false,
    username:""
}

export function AuthDispatch (state : AuthType ,action:AuthAction){
        switch (action.type) {
            case "USER-LOGGED-IN":
                return {...state,isUserLoggedIn:action.payload}        
            case "USER-NAME":
                return {...state,username:action.payload}
        }
}