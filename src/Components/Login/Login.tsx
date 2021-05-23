import { useReducer,useEffect } from 'react'
import './Login.css'
import { Link ,useLocation,useNavigate} from 'react-router-dom'

import { users } from '../../Database'
import { useAuth,useUser } from '../../Context'
import { initialState, loginDispatch } from './login.reducer'
import {LocationState} from './loginTypes'
import {getToken,setToken} from '../../utils'

import Arrow1 from '../../Images/Arrow-1.svg'
import Arrow2 from '../../Images/Arrow-2.svg'
import { v4 as uuidv4 } from 'uuid';

export function Login() {
    const {authDispatch} = useAuth()
    const [loginState, loginDispatcher] = useReducer(loginDispatch, initialState)
    const {setUsers} = useUser()
    const navigate = useNavigate()
    const location = useLocation();
    const { from } = location.state ? location.state as LocationState :{from:'/dashboard'} ;
    function LoginHandler() {
        if (users.find((user) => user.username === loginState.username && user.password === loginState.password)) {
            from ? navigate(from) : navigate('/dashboard')
            setUsers(()=>users.map((user)=>{
                if(users.find((user) => user.username === loginState.username && user.password === loginState.password)){
                    
                    const token = uuidv4()
                    console.log({...user,Usertoken:token})
                    return {...user,Usertoken:token}
                }
            }))
            setToken(uuidv4())
          return authDispatch({type:"USER-LOGGED-IN",payload:true})
        }return authDispatch({type:"USER-LOGGED-IN",payload:false})
    }
    useEffect(() => {
        const token = getToken()
        if(token){
            console.log(token)
            console.log(users)
            if(users.find((user) => user.Usertoken === token)){
                navigate('/dashboard')
                return authDispatch({type:"USER-LOGGED-IN",payload:true})
            }
        }
        return token
    }, [])
    return (
        <div className="login fixed flex item-center flex-col text-white gap-y-28">
            <img src={Arrow1} alt="" className="absolute w-32 md:w-60 textures arrow-random-1"></img>
            <img src={Arrow2} alt="" className="absolute w-20 md:w-48 textures arrow-random-2"></img>
            <img src={Arrow2} alt="" className="absolute w-24 md:w-36 textures arrow-random-3"></img>
            <div className="flex flex-col items-center justify-center">
                <p className="mt-10 font-bold text-3xl">QUIZ APP</p>
                <span className="underline w-16 h-0.5 mt-1"></span>
            </div>
            <div className="flex flex-col items-center relative">
                <p>Login your account</p>
                <div className="flex flex-col items-center gap-y-7 pt-2 relative h-36">
                    <input placeholder="Username" className="login-input rounded pl-2 w-80 h-10 lg:w-96" onChange={(e) => loginDispatcher({ type: "USERNAME", payload: e.target.value })} ></input>
                    <input placeholder="Password" type="password" className="login-input rounded pl-2 w-80 h-10 lg:w-96" onChange={(e) => loginDispatcher({ type: "PASSWORD", payload: e.target.value })}></input>
                    <Link to="/forgot-password" className="absolute bottom-0 right-1">Forgot password?</Link>
                </div>
                <button className="get-started w-36 h-10 mt-10 place-self-center flex justify-evenly items-center font-semibold" onClick={() => LoginHandler()}>Login</button>
                <Link to="/signup" className="text-xs mt-2">Don't have account? Register</Link>
            </div>

        </div>
    )
}


