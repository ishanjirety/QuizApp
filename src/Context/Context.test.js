import {initialState,AuthDispatch} from './Auth.reducer'

describe('Testing auth reducer',()=>{
    it("Testing USER-LOGGED-IN",()=>{
        const reducerResult = AuthDispatch(initialState,{type:"USER-LOGGED-IN",payload:false})
        expect(reducerResult).toEqual({
            isUserLoggedIn:false,
            username:""
        })
    })
    it("Testing USER-NAME",()=>{
        const reducerResult = AuthDispatch(initialState,{type:"USER-NAME",payload:"ishan"})
        expect(reducerResult).toEqual({
            isUserLoggedIn:false,
            username:"ishan"
        })
    })
})