import {Link} from 'react-router-dom'
import {useState} from 'react'
import { PhoneNo } from './forgotType'
import './ForgotPassword.css'
import Arrow1 from '../../Images/Arrow-1.svg'
import Arrow2 from '../../Images/Arrow-2.svg'

export function ForgotPassword() {

    const [mobileno,setMobileNo] = useState<PhoneNo | null>(0)
    return (
        <div className="login fixed flex item-center flex-col text-white gap-y-28">
             <img src={Arrow1} alt="" className="absolute w-32 md:w-60 textures arrow-random-1"></img>
            <img src={Arrow2} alt="" className="absolute w-20 md:w-48 textures arrow-random-2"></img>
            <img src={Arrow2} alt="" className="absolute w-24 md:w-36 textures arrow-random-3"></img>
             <div className="flex flex-col items-center justify-center">
                <p className="mt-10 font-bold text-3xl">QUIZ APP</p>
                <span className="underline w-16 h-0.5 mt-1"></span>
            </div>
            <div className="flex flex-col items-center relative ">
                <p className="w-10/12">Enter your mobile number and we will send you a OTP to verify</p>
                    <div className="flex flex-col items-center gap-y-7 pt-2 relative h-36 w-10/12 lg:w-2/5">
                        <div className="flex items-center justify-center gap-x-2 w-full">
                            <input placeholder="+91" disabled={true} className="login-input rounded pl-2 w-1/6 h-10 lg:w-1/6 "/>
                            <input placeholder="Mobile number" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" minLength={10} maxLength={10} onChange={(e)=>setMobileNo(parseInt(e.target.value))} className="login-input rounded pl-2 w-full h-10 lg:w-full" ></input>
                        </div>
                        <input placeholder="OTP" type="password" maxLength={5} className="login-input otp text-center rounded pl-2 w-9/12 h-10 lg:w-full"></input>
                    </div>
                    <button className="get-started w-36 h-10 mt-10 place-self-center flex justify-evenly items-center font-semibold">Verify</button>
                    <Link to="/login" className="text-xs mt-2">Already have a account? Login</Link>
                  
            </div>
        </div>
    )
}

