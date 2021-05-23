import {initialState,quizAction} from './quiz'

export function QuizReducer (state : initialState,action : quizAction){
    switch (action.type) {
        case "SHOW-MODAL":
            return {...state,showModal:!state.showModal}
        case "SELECT-QUIZ":
            return {...state,selectQuiz:action.payload}
        case "DECREMENT-TIMER":
            return {...state,timer:state.timer-1}
        case "RESET-TIMER":
            return {...state,timer:60}
        case "INCREMENT-QUESTION":
            return {...state,counter:state.counter+1}
        case "ADD-ANSWER":
            if(state.selectedAnswers.find(ans => ans.questionIndex === action.payload.questionIndex)){
                return {...state,selectedAnswers: state.selectedAnswers.map((answer) => answer.questionIndex === action.payload.questionIndex ? 
                    {...answer,answerIndex:action.payload.answerIndex,question:action.payload.question,answer:action.payload.answer} : answer) 
            }
        }return {...state,selectedAnswers:[...state.selectedAnswers,{answerIndex:action.payload.answerIndex,questionIndex:action.payload.questionIndex,question:action.payload.question,answer:action.payload.answer}]}
        default:
            return state
    }
}

export const QuizInitial : initialState ={
    showModal:false,
    selectQuiz: {
        question: "",
        points: 2,
        options: [{
            answer: "",
            isRight: false
        },{
            answer: "",
            isRight: false
        },{
            answer: "",
            isRight: false
        },{
            answer: "",
            isRight: false
        }]
    },
    timer:60,
    counter:0,
    selectedAnswers:[]
}