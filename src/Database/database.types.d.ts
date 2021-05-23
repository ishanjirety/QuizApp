// User Database
export type QuizesPlayed = {
    quizName : string;
    quizId:number;
    score:number;
    date:date;
}

 export type User ={
    username:string;
    password:string;
    emailId:string;
    quizesPlayed:QuizesPlayed[];
    Usertoken:string;
}

export type Users = User[]



// Quiz Database
export type Options = {
    answer: string;
    isRight:boolean;
}

export type Questions = {
    question: string;
    points: number;
    options: Options[];
}

export type QuizDB = {
    quizName: string;
    quizId:number;
    questions: Questions[];
}

export type Quiz = QuizDB[]