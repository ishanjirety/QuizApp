import { useReducer, useState, useEffect } from 'react'
import { Header, ConfirmationModal } from '../Components'

import { useNavigate, useParams } from 'react-router-dom'

import { quiz } from '../Database/Database'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { QuizReducer, QuizInitial } from '../utils/Quiz.reducer'
export function QuizDisplay() {

    const [QuizState, QuizDispatch] = useReducer(QuizReducer, QuizInitial)
    const navigate = useNavigate()
    const [quizBoundry, setQuizBoundry] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        QuizDispatch({ type: "SELECT-QUIZ", payload: quiz.find(({ quizId }) => quizId === parseInt(id)) })
    }, [])

    useEffect(() => {
        const time = setTimeout(() => {
            if (QuizState.timer > 0) {
                QuizDispatch({ type: "DECREMENT-TIMER" })
            }
            else if (QuizState.timer === 0) {
                QuizDispatch({ type: "INCREMENT-QUESTION" })
                QuizDispatch({ type: "RESET-TIMER" })
            }
            return
        }, 1000)

        return () => clearTimeout(time)
    }, [QuizState.timer])

    function nextClicked() {
        if (QuizState.selectQuiz) {
            if (QuizState.selectQuiz.questions.length - 1 > QuizState.counter) {
                QuizDispatch({ type: "INCREMENT-QUESTION" })
                QuizDispatch({ type: "RESET-TIMER" })
            }
        }
    }

    function ansSelected(question, answer, key, questionIndex) {
        QuizDispatch({ type: "ADD-ANSWER", payload: { answerIndex: key, questionIndex: questionIndex, answer: answer, question: question } })
    }


    return (
        <>
            <Header />
            <div className="dashboard quiz-questions flex items-center flex-col gap-10">
                <div className="w-32">
                    <CircularProgressbar value={QuizState.timer} text={QuizState.timer}
                        strokeWidth={5}
                        className="h-28 timer"
                        maxValue={60}
                    />
                </div>
                <h1 className="text-2xl text-white">{QuizState.selectQuiz.questions && QuizState.selectQuiz.questions[QuizState.counter].question}</h1>
                <div className="flex items-center justify-center h-50 flex-wrap w-full md:w-7/12 md:gap-x-44 md:gap-y-20 gap-y-6 gap-x-5">
                    {
                        QuizState.selectQuiz.questions && QuizState.selectQuiz.questions[QuizState.counter].options.map(({ answer }, key) => {
                            return (
                                <button className="relative get-started w-36 md:w-52 h-16 md:h-20 flex items-center justify-center" onClick={() => ansSelected(QuizState.selectQuiz.questions[QuizState.counter].question, answer, key, QuizState.counter)}>{answer}</button>
                            )
                        })
                    }
                </div>
                {QuizState.selectQuiz.questions && QuizState.selectQuiz.questions.length - 1 > QuizState.counter ? <button className="get-started next font-bold text-lg pr-3 pl-3 text-white outline-none flex items-center justify-evenly absolute right-7 md:right-16 bottom-7 md:bottom-10 w-28 h-10 rounded"><p className="p-0 m-0" onClick={nextClicked}>Next</p></button>
                    :
                    <button className="get-started next font-bold text-lg pr-3 pl-3 text-white outline-none flex items-center justify-evenly absolute right-7 md:right-16 bottom-10 w-28 h-10 rounded"><p className="p-0 m-0" onClick={() => navigate('/quiz/result', { state: { quizAnswers: QuizState.selectedAnswers, quiz: QuizState.selectQuiz } })}>Finish</p></button>
                }

                <button className="exit font-bold text-lg text-white flex items-center justify-evenly absolute left-2 md:left-20 top-20 w-10 h-10 rounded-full" onClick={() => QuizDispatch({ type: "SHOW-MODAL" })}><ArrowDoubled /></button>
            </div>
            {QuizState.showModal && <ConfirmationModal message="You are going to quit this quiz your progress will not be stored!" state={() => QuizDispatch({ type: "SHOW-MODAL" })} callback={() => navigate('/dashboard')} />}
        </>
    )
}

// 

function ArrowDoubled() {
    return (<svg className="w-7" viewBox="0 0 24 24"><path d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12z" fill="currentColor"></path></svg>)
}

function Wrong() {
    return <svg width="1em" height="1em" viewBox="0 0 512 512"><path fill="#FF473E" d="M330.443 256l136.765-136.765c14.058-14.058 14.058-36.85 0-50.908l-23.535-23.535c-14.058-14.058-36.85-14.058-50.908 0L256 181.557L119.235 44.792c-14.058-14.058-36.85-14.058-50.908 0L44.792 68.327c-14.058 14.058-14.058 36.85 0 50.908L181.557 256L44.792 392.765c-14.058 14.058-14.058 36.85 0 50.908l23.535 23.535c14.058 14.058 36.85 14.058 50.908 0L256 330.443l136.765 136.765c14.058 14.058 36.85 14.058 50.908 0l23.535-23.535c14.058-14.058 14.058-36.85 0-50.908L330.443 256z"></path></svg>
}
function Tick() {
    <svg width="1em" height="1em" viewBox="0 0 128 128"><path d="M48.3 103.45L12.65 67.99a2.2 2.2 0 0 1 0-3.12l9-9.01c.86-.86 2.25-.86 3.11 0l23.47 23.33c.86.86 2.26.85 3.12-.01l51.86-52.36c.86-.87 2.26-.87 3.13-.01l9.01 9.01c.86.86.86 2.25.01 3.11l-56.5 57.01l.01.01l-7.45 7.49c-.86.86-2.26.86-3.12.01z" fill="#40c0e7" stroke="#40c0e7" strokeWidth="6" strokeMiterlimit="10"></path></svg>
}