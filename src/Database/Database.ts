import { QuizDB, Users,Quiz } from './database.types'

export const QuizData: QuizDB = {
    quizName: "Chess Trivia",
    quizId: 1,
    questions: [
        {
            question: "How many types of movable objects are there in a chess piece or chessman?",
            points: 2,
            options: [{
                answer: "Six different types",
                isRight: true
            },{
                answer: "Twelve different types",
                isRight: false
            },{
                answer: "Eight different types",
                isRight: false
            },{
                answer: "Twi different types",
                isRight: false
            }]
        },
        {
            question: "Who is credited for creating the longest Chess Problem, mate in 290 moves?",
            points: 2,
            options: [{
                answer: "Vishy Anand",
                isRight: false
            },{
                answer: "Garry Kasparov",
                isRight: false
            },{
                answer: "Blathy, Otto",
                isRight: true
            },{
                answer: "Bobby Fischer",
                isRight: false
            }]
        },
        {
            question: "What is the weakest chess piece?",
            points: 2,
            options: [{
                answer: "Queen",
                isRight: false
            },{
                answer: "Pawn",
                isRight: true
            },{
                answer: "Bishop",
                isRight: false
            },{
                answer: "Rook",
                isRight: false
            }]
        },
        {
            question: "How is current world champion of chess",
            points: 2,
            options: [{
                answer: "Vishy Anand",
                isRight: false
            },{
                answer: "Anish Giri",
                isRight: false
            },{
                answer: "Garry Kasparov",
                isRight: false
            },{
                answer: "Magnus Carlsen",
                isRight: true
            }]
        },
        {
            question: "What is the shortest number of moves to achieve a checkmate?",
            points: 2,
            options: [{
                answer: "Fool’s mate",
                isRight: true
            },{
                answer: "Smothered mate",
                isRight: false
            },{
                answer: "Back rank mate",
                isRight: false
            },{
                answer: "suffocation mate",
                isRight: false
            }]
        },
    ]
}

export const quiz : Quiz = [QuizData]

export let users: Users = [{
    username: "ishan",
    password: "1234",
    emailId: "ishanjirety24@gmail.com",
    Usertoken:"",
    quizesPlayed: [
        {
            quizName: "",
            quizId: 1,
            score: 10,
            date: 10 / 12 / 21,
        }
    ],
    
}]