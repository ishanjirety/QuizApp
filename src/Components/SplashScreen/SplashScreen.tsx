import './SplashScreen.css'
import './SplashScreen.responsive.css'
import screen_1 from '../../Images/Splash-cover-1.svg'
import {Link} from 'react-router-dom'
import Arrow1 from '../../Images/Arrow-1.svg'
import Arrow2 from '../../Images/Arrow-2.svg'
export function SplashScreen() {
    return (
        <div className="splash-screen flex item-center flex-col text-white gap-y-16">
            <img src={Arrow1} alt="" className="absolute w-32 md:w-60 textures arrow-random-1"></img>
            <img src={Arrow2} alt="" className="absolute w-20 md:w-48 textures arrow-random-2"></img>
            <img src={Arrow2} alt="" className="absolute w-24 md:w-36 textures arrow-random-3"></img>
            <div className="flex flex-col items-center justify-center">
                <p className="mt-10 font-bold text-3xl">QUIZ APP</p>
                <span className="underline w-16 h-0.5 mt-1"></span>
            </div>
            <p className="trivia md:text-xl lg:text-2xl">The Police raided a Chess Tournament in Cleveland in 1973, arrested the Tournament director and confiscated the Chess sets on charges of allowing gambling (cash prizes to winners) and possession of gambling devices (the Chess sets).</p>
            <img alt="" className="w-72 md:w-80 xl:w-1/3 place-self-center" src={screen_1}/>
            <Link to="/login" className="get-started w-36 h-10 place-self-center flex justify-evenly items-center font-semibold">Start Quizzing <svg  className="h-7 w-7" viewBox="0 0 24 24"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" fill="currentColor"></path></svg></Link>
        </div>
    )
}
