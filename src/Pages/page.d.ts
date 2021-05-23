
  export type Options = {
    answer: string;
    isRight:boolean;
}

export type Questions = {
    question: string;
    points: number;
    options: Options[];
}
export type LocationState = {
    quiz:{
        questions: Questions[]
    };
    quizAnswers:{
        answerIndex:number;
        questionIndex:number;
        answer:string;
        question:string;
    }[];
}