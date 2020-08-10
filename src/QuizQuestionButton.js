import React, { Component } from 'react'


class QuizQuestionButton extends Component {
  handleClick() {
    this.props.clickHandler(this.props.button_text)
  }
  render() {
    return (
      <li>
        <div>
          <a href="">
            <button></button>
            <button>
            {this.props.answer_text}
            </button>
          </a>
        </div>
      </li>
    )
  }
}


export default QuizQuestionButton
