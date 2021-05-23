import React, {useContext,createContext,useState} from 'react'
import {Prop,Value} from './Context'
const HeaderContext = createContext({} as Value)

export const Header = ({children} : Prop) => {
    const [headerName,setHeaderName] = useState("")
    return (
        <HeaderContext.Provider value={{headerName,setHeaderName}}>
            {children}
        </HeaderContext.Provider>
    )
}
export function useHeader(){
    return useContext(HeaderContext)
}
