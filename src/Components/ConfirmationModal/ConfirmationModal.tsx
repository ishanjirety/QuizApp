import React from 'react'
import {confirmationProps} from './Confirmation'
import './Confirmation.css'

export function ConfirmationModal(props:confirmationProps) {
    const {callback,state,message} = props
    // 
    return (
        <div className="wrapper fixed flex items-center justify-center top-0 ">
            <div className="modal p-10 rounded w-11/12 md:w-1/3">
                <h1 className="text-3xl pb-7">Are you sure ?</h1>
                <p >{message}</p>
                <div className="flex items-center justify-center gap-x-2 mt-10">
                    <button className="get-started p-1 pr-10 pl-10 " onClick ={()=>callback()}>Ok</button>
                    <button className="get-started p-1 pr-10 pl-10 " onClick={()=>state(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

