import React,{useState,useContext,createContext} from 'react'
import {users} from '../Database'
import {ValueDatabase,Prop} from './Context'

const UserContext = createContext({} as ValueDatabase)

export function User ({children} : Prop){
    const [user,setUsers] = useState(users)
    return (
        <UserContext.Provider value={{user,setUsers}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser (){
    return useContext(UserContext)
}