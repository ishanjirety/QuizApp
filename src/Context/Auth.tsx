import { createContext, useContext, useState,useReducer } from 'react'
import { Prop,AuthContextType } from './Context'
import {initialState, AuthDispatch} from './Auth.reducer'
const AuthContext = createContext({} as AuthContextType)

export function Auth({ children }: Prop) {
    const [authState,authDispatch] = useReducer(AuthDispatch,initialState)
    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth() {
    return useContext(AuthContext)
}

