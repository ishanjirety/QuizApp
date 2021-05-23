import React from 'react'
import './Header.css'
import {useHeader} from '../../Context'
export function Header() {
    const {headerName} = useHeader()
    return (
        <div className="header fixed w-full float-right h-16 flex justify-items-center items-center pl-5">
            <p className="text-xl font-bold">{headerName}</p>
        </div>
    )
}


