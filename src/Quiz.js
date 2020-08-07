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
    this.setState((state) => {
      return { quiz_position: this.state.quiz_position + 1 }
    })
    // console.log(quiz_position)
  }

  showPreviousQuestion() {
    this.setState((state) => {
      return { quiz_position: this.state.quiz_position - 1}
    })
  }

  render() {
    console.log(this.state.quiz_position)
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
