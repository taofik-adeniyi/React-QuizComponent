import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = { incorrectAnswer: false }
  }
  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.setState({ incorrectAnswer: false })
      this.props.showNextQuestionHandler()
    }else {
      this.setState({ incorrectAnswer: true })
    }
  }
  render() {
    return(
      <div>
        <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>

        <section className="buttons">
          <ul>
          {
            this.props.quiz_question.answer_options.map((answer_option, index) => {
              return <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)} />
            })
          }
          </ul>
        </section>
        {this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p>: null}
      </main>
      
      <div className="two">
        <div className="firstrow">
            <div className="title"><h3>Question 1</h3></div>
            <div className="submit"><button>Submit</button></div>
        </div>

      <div className="questionbody">
          <div className="question">
            What is the Question ?
          </div>
          <div className="questionsoption">
              <ul>
                  <li>Sample Answer 1</li>
                  <li>Sample Answer 2</li>
                  <li>Sample Answer 3</li>
                  <li>Sample Answer 4</li>
              </ul>
          </div>
          <div className="controlbutton">
              <button>Previous</button>
              <button>Next Questions</button>
          </div> 
      </div>
      </div>
      </div>
    )
  }
}


export default QuizQuestion
