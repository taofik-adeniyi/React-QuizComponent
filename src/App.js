import React, { Component } from 'react'
import Quiz from './Quiz.js'
import './App.css'
import Header from './containers/Header'

// import Inline from './Inline'
import StyleSheet from './StyleSheet'


class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <Inline /> */}
        <StyleSheet />
        <Header />
        {/* <Questions /> */}
        <Quiz />
      </div>
    )
  }
}

export default App
