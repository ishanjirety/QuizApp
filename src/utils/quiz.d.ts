
export type Options = {
    answer: string;
    isRight: boolean;
}

export type Questions = {
    question: string;
    points: number;
    options: Options[];
}

export type quizAction =
    { type: "SHOW-MODAL" } |
    { type: "SELECT-QUIZ", payload: Questions } |
    { type: "DECREMENT-TIMER" } |
    { type: "RESET-TIMER" } |
    { type: "INCREMENT-QUESTION" } |
    {
        type: "ADD-ANSWER", payload: {
            answerIndex: number,
            questionIndex: number,
            question:string,
            answer:string,
        }
    }

type Answers = {
    answerIndex: number,
    questionIndex: number,
    answer: string,
    question: string
}

export type initialState = {
    showModal: boolean;
    selectQuiz: Questions;
    timer: number;
    counter: number;
    selectedAnswers: Answers[];
}


//Result Reducer
export type resultInitialState = {
    rightAns:{
        question?: string;
        answerGiven?:string;
        correctAnswer?:string;
    }[],
    wrongAns:{
        question?:string;
        answerGiven?:string;
        correctAnswer?:string;
    }[]
}
export type resultAction = {type:"ADD-CORRECT-ANSWER",payload:{
    question?:string;
    answerGiven?:string;
    correctAnswer?:string,
}} | {type:"ADD-WRONG-ANSWER",payload:{
    question?:string;
    answerGiven?:string;
    correctAnswer?:string,
}}