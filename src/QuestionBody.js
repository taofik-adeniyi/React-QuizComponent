import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuestionBody extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className="two">

            
                <div className="firstrow">
                    <div className="title">
                        <h3>
                            Question -
                            {` ${this.props.quiz_question.id}`}
                        </h3>
                    </div>
                <div className="submit">
                <button>
                    Submit
                </button>
                </div>
            </div>
            <div className="questionbody">
            <div className="question">
              {this.props.quiz_question.instruction_text}
            </div>
              <div className="questionsoption">
                <ul>
                  {
                    this.props.quiz_question.answer_options.map((answer_option, index) => {
                    return (
                      <QuizQuestionButton 
                      key={index}
                      answer_text={answer_option}
                      />
                    )
                    })
                  }
                </ul>
              </div>
              <div className="controlbutton">
                  <button
                    onClick={() => this.props.showPrevQuestion()}
                  >
                    Previous
                  </button>
                  <button 
                    onClick={() => this.props.showNextQuestion()}
                  >
                    Next Questions
                  </button>
              </div>
          </div>
          </div>
        )
    }
}


export default QuestionBody