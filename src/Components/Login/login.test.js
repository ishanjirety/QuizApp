import {loginDispatch,initialState} from './login.reducer'

describe("testing login reducer",()=>{
    it("Username test",()=>{
        const loginResult = loginDispatch(initialState,{type:"USERNAME",payload:"ishan"})
        expect(loginResult).toEqual({
            username:"ishan",
            password:""
        })
    })
    it("Password test",()=>{
        const loginResult = loginDispatch(initialState,{type:"PASSWORD",payload:"1234"})
        expect(loginResult).toEqual({
            username:"",
            password:"1234"
        })
    })


})