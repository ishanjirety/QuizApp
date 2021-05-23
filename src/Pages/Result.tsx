import {useState,useEffect,useReducer} from 'react'
import { Nav,Header } from "../Components"
import trophy from '../Images/trophy.png'
import {useLocation} from 'react-router-dom'
import {LocationState} from './page'
import {initialState,resultReducer} from '../utils/Result.reducer'

export function Result() {
    const location = useLocation();
    const { quiz,quizAnswers} = location.state as LocationState ;
    const [answerState,answerDispatch] = useReducer(resultReducer, initialState)
    useEffect(() => {
        for(let i=0 ; i<=quizAnswers.length-1 ;i++){
            const queObject = quiz.questions.find(questions =>questions.question === quizAnswers[i].question)
            const options = queObject?.options
            const question = queObject?.question
            const rightAns = options?.find(obj => obj.isRight === true)?.answer
            const correctAnswerGiven = quizAnswers.find(ans => ans.answer === rightAns)?.answer
            if(correctAnswerGiven === rightAns){
                answerDispatch({type:"ADD-CORRECT-ANSWER",payload:{question:question,answerGiven:rightAns}})
            }else{
                answerDispatch({type:"ADD-WRONG-ANSWER",payload:{question:question,answerGiven:rightAns}})
            }
        }
    }, [])

    function addList(){
        let wrongAns = answerState.wrongAns.map((item:any,key:number) =>{
            return (
            <div className="w-9/10">
             <h1 className="text-white text-left">{item.question}</h1>
            {key>0 && <h2 className="text-left text-green-500">Correct Answer : {item.answerGiven} <span className="ml-48">Points scored : 2</span> </h2>}
         </div>)
        })
        console.log(wrongAns)
    let rightAns = answerState.rightAns.map((item:any,key:number) =>{
        return (
        <div className="w-9/10">
         <h1 className="text-white text-left">{item.question}</h1>
        {key>0 && <h2 className="text-left text-green-500">Correct Answer : {item.answerGiven} <span className="ml-48">Points scored : 2</span> </h2>}
     </div>)
    }) 

    return [...wrongAns,...rightAns] 
    }


    return (
        <>
        <Header/>
        <Nav/>

        {console.log(answerState.rightAns)}
        <div className="dashboard flex items-center flex-col">
            <img src={trophy} alt="" className="w-28 h-32" />
                <div className="">
                    {addList()}
                </div>
        </div>
    </>
    )
}
