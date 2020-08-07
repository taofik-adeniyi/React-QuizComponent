import React, { Component } from 'react'


class QuizQuestionButton extends Component {
  handleClick() {
    this.props.clickHandler(this.props.button_text)
  }
  render() {
    return (
      <li>
        <button>
          {this.props.answer_text}
        </button>
      </li>
    )
  }
}


export default QuizQuestionButton
