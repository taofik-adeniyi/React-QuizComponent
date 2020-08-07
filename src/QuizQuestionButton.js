import React, { Component } from 'react'


class QuizQuestionButton extends Component {
  handleClick() {
    this.props.clickHandler(this.props.button_text)
  }
  render() {
    return (
      <li>
        <div>
          {this.props.answer_text}
        </div>
      </li>
    )
  }
}


export default QuizQuestionButton
