import {resultInitialState,resultAction} from './quiz'

export const initialState : resultInitialState = {
    rightAns:[{
            question: "",
            answerGiven:"",
            correctAnswer:""
    }],
    wrongAns:[{
            question:"",
            answerGiven:"",
            correctAnswer:"",
    }]
}

export function resultReducer(state : any ,action:resultAction){
    switch (action.type) {
        case "ADD-CORRECT-ANSWER":
            return {...state,rightAns:[...state.rightAns,{question:action.payload.question,answerGiven:action.payload.answerGiven}]}    
        case "ADD-WRONG-ANSWER":
            return {...state,wrongAns:[...state.wrongAns,{question:action.payload.question,answer:action.payload.answerGiven,correctAnswer:action.payload.correctAnswer}]}    
        default:
            return state
    }
}