import React from 'react'
import {Nav,QuizCards,Header} from '../Components'
import './Page.css'
import './Responsive.css'
import {quiz} from '../Database/Database'

import { Line } from 'react-chartjs-2';

const data_yellow = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'No. of quizes played',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: '#FFBB01',
        borderColor: '#FFBB01',
      },
    ],
  };
  const data_blue = {
    labels: ['1', '2', '3', '4', '5', '6','3','12','78'],
    datasets: [
      {
        label: 'No. of Won',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: '#4D9BF9',
        borderColor: '#4D9BF9',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
export function Dashboard() {
    return (
      <>
      <Nav/>
      <Header />
        <div className="dashboard flex flex-col items-center gap-10">
            <div className="flex flex-col md:flex-row w-full">
                 <Line data={data_yellow} options={options} type="line" className="graph"/>
                <Line data={data_blue} options={options} type="line" className="graph"/>
            </div>
            <div className="flex flex-col w-full items-center justify-items-center flex-wrap md:flex-row pb-20 md:pb-10 md:pl-4 gap-16">
                {quiz.map(({quizName,quizId})=>{
                  return <QuizCards quizId={quizId} topic={quizName}/>
                })}
            </div>
        </div>
        </>
    )
}


