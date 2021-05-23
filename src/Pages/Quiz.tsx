import './Page.css'
import './Responsive.css'
import {Header,Nav,QuizCards} from '../Components'
import {quiz} from '../Database/Database'
export function Quiz() {
    return (
        <>
        <Nav/>
        <Header />
        <div className="dashboard">
        <div className="flex flex-col w-full items-center justify-items-center flex-wrap md:flex-row pb-20 md:pb-10 md:pl-4 gap-16">
        {quiz.map(({quizName,quizId})=>{
                  return <QuizCards quizId={quizId} topic={quizName}/>
                })}
            </div>
        </div>
        </>
    )
}


