import React from 'react';

const displayStyle = {
    background: "#6E8FD0",
    color: "white",
    textAlign: "right",
    paddingRight: 20
}

class Display extends React.Component {
    render () {
        return (
            <div id="display" style={displayStyle}>
                <h2>{this.props.secondNumber !== '' ? this.props.secondNumber : this.props.firstNumber}</h2>
            </div>
        )
    }
}

export default Display;