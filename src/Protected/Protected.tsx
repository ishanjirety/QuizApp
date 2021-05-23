import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { ProtectedType } from './ProtectedType'
import {getToken} from '../utils/Token'
export function Protected({ path, ...props }: ProtectedType) {
    const token = getToken()
    return (
        token ? <Route {...props} path={path} /> : <Navigate state={{ from: path }} replace to="/login" />
    )
}


