import React from 'react';
import './App.css';
import {SplashScreen,Login,Signup,ForgotPassword,Nav,Header} from './Components'
import {Dashboard,Quiz,QuizDisplay,Result} from './Pages'
import {Routes,Route} from 'react-router-dom'
import {Protected} from './Protected/Protected'


function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<SplashScreen/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Protected path="/dashboard" element={<Dashboard/>}/>
          <Protected path="/quizes" element={<Quiz/>}/>
          <Route path="/quiz/result" element={<Result/>}/>
          <Route path="/quiz/:id" element={<QuizDisplay/>}/>
          <Route path="/*" element={<SplashScreen/>}/>
      </Routes>

    </div>
  );
}
export default App;
