import React, { Component } from 'react'


class Inline extends Component {
    render() {
        const heading = {
            fontSize: '100px',
            color: 'red'
        }
        return (
            <div>
                <h1 style={heading}>Inline Styling</h1>
            </div>
        )
    }
}


export default Inline