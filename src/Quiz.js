import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import quizData from './quiz_data'


class Quiz extends Component {

  constructor(props) {
    super(props)
    this.state = {
      quiz_position: 0
    }
    this.showNextQuestion = this.showNextQuestion.bind(this);
    this.showPreviousQuestion = this.showPreviousQuestion.bind(this);
  }

  showNextQuestion() {
    
    // if(this.state.quiz_position > quizData.quiz_questions.length - 1){
    //   this.setState((state) => {
    //     return { quiz_position: 0}
    //   })
    // }else {
      console.log('aaaaaaaaaaaaaaa' + quizData.quiz_questions.length);
      if(this.state.quiz_position === quizData.quiz_questions.length - 1){
          // console.log(quizData.quiz_questions.length)
          this.setState((state) => {
            return { quiz_position: 0}
          })
          console.log(this.state.quiz_position)
      } else {
          this.setState((state) => {
            return { quiz_position: this.state.quiz_position + 1 }
          }) 
      }
    // }
  }

  showPreviousQuestion() {
    if (this.state.quiz_position === 0){
      
    }else{
      this.setState((state) => {
        return { quiz_position: this.state.quiz_position - 1}
      })
    }
  }


  render() {
    // console.log(quizData.quiz_questions.length)
    return (
      <div>      
        <QuizQuestion
          quiz_question={quizData.quiz_questions[this.state.quiz_position]}
          showNextQuestion={this.showNextQuestion}
          showPrevQuestion={this.showPreviousQuestion}
        />
      </div>
    )
  }
}

export default Quiz
