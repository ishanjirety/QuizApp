import {Link} from 'react-router-dom'

import Arrow1 from '../../Images/Arrow-1.svg'
import Arrow2 from '../../Images/Arrow-2.svg'

export function Signup() {
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
                <p>Create account in Quiz App</p>
                    <div className="flex flex-col items-center gap-y-2 pt-2 relative w-10/12 lg:w-2/5">
                        
                        <div className="flex gap-x-1 w-full">
                        <input placeholder="First Name" className="login-input rounded pl-2 w-full h-10 " ></input>
                        <input placeholder="Last Name" className="login-input rounded pl-2 w-full h-10 " ></input>
                        </div>
                        
                        <input placeholder="Password" type="password" className="login-input rounded pl-2 w-full h-10 " ></input>
                        <input placeholder="Email" className="login-input rounded pl-2 w-full h-10 "></input>                   
                    </div>
                    <button className="get-started w-36 h-10 mt-10 place-self-center flex justify-evenly items-center font-semibold">Create Account</button>
                    <Link to="/login" className="text-xs mt-2">Already have a account? Login</Link>
            </div>
        </div>
    )
}

