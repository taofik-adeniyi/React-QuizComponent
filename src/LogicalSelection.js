import React, {Component} from 'react'



class LogicalSelection extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            // <button onClick={() => this.props.clickin()}>
            <div>
                {this.props.id}
            </div>
                
            // </button>
        )
    }
}



export default LogicalSelection