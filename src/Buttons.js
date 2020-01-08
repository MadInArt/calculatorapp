import React from 'react';

const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

class Buttons extends React.Component {

    handleClick = () => {
        switch(this.props.name) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case ".":
                this.props.setSecondNumber(this.props.name);
                break;
            case "+":
            case "-":
            case "x":
            case "/":
            case "=":
                this.props.setOperator(this.props.name);
                break;
            case "Clear":
                this.props.clearResult();
                break;
            default:
                break;
        }
    }

    render () {
        return (
            <button
                id={this.props.id}
                style={buttonStyle}
                onClick={this.handleClick}
                >
                    <h2>{this.props.name}</h2>
            </button>
        )
    }
}

export default Buttons;