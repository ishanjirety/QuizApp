import './QuizCard.css'
import ripple from '../../Images/Ripple.jpg'
import quizIcon from '../../Images/QuizIcon.jpg'
import {Link} from 'react-router-dom'
import {QuizProps} from './QuizType'
export function QuizCards({topic,quizId} : QuizProps) {
    return (
        <div className="quiz-card relative">
            <img src={ripple} className="bg-img w-full" alt=""/>
            <img src={quizIcon} className="absolute h-20 w-20 top-16 left-1/3 rounded-full" alt=""/>
             <div className="pt-10 flex flex-col items-center">
                <h2 className="text-white text-lg">{topic}</h2>
                <Link to={`/quiz/${quizId}`} className="get-started w-36 h-10 mt-8 flex justify-evenly items-center font-semibold">Play Now
                <svg  className="h-7 w-7" viewBox="0 0 24 24"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" fill="currentColor"></path></svg></Link>
            </div>   
        </div>
    )
}


