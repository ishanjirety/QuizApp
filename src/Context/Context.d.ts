import {Users} from '../Database/database.types'
export type Prop = {
    children: React.ReactNode;
}

export type Value = {
    headerName: string;
    setHeaderName: React.Dispatch;
}
export type ValueDatabase = {
    user: {
        username:string;
        password:string;
        emailId:string;
        quizesPlayed:QuizesPlayed[];
        Usertoken:string;
    }[];
    setUsers: React.Dispatch
}
export type AuthType = {
    isUserLoggedIn :boolean;
    username:string;
}
export type AuthContextType = {
    authState :  {
        isUserLoggedIn :boolean;
        username:string;
    }
    authDispatch : React.Dispatch
}
export type AuthAction = {type:"USER-LOGGED-IN",payload:boolean} | {type:"USER-NAME",payload:string} 