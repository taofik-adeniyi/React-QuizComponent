import React, {Component} from 'react'


class DisplayAnswer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="two">
                <h1>Answers Submitted Successfully</h1>
                <p>Your Result would be mailed to you</p>
                <p><a href="" onClick={this.props.resetClickHandler}>Reset Quiz</a></p>
            </div>
        )
    }
}


export default DisplayAnswer