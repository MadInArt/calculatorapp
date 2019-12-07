import React, {Component} from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ButtonClear } from './components/ButtonClear';
import * as math from 'mathjs';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      input:''
    };
  }

  addToInput = val => {
    if (isNaN(val) && isNaN(this.state.input[this.state.input.length-1])) {
      this.setState({input:this.state.input})
    }
    else{
        this.setState({input: this.state.input + val})
    }
  }

  HandleEqual = () => {
    if (isNaN(this.state.input[this.state.input.length-1])) {
      this.setState({input:this.state.input})
    }
    else{this.setState({input: math.evaluate(this.state.input) })
    }
  }

  render(){
    return(
      <div className="app">
          <div className="calc-wrapper">  
          <Input input = {this.state.input} />
             <div className="row">
                <Button HandleClick={this.addToInput}>7</Button>
                <Button HandleClick={this.addToInput}>8</Button>
                <Button HandleClick={this.addToInput}>9</Button>
                <Button HandleClick={this.addToInput}>/</Button>
             </div>
             <div className="row">
                <Button HandleClick={this.addToInput}>1</Button>
                <Button HandleClick={this.addToInput}>2</Button>
                <Button HandleClick={this.addToInput}>3</Button>
                <Button HandleClick={this.addToInput}>*</Button>
             </div>
             <div className="row">
                <Button HandleClick={this.addToInput}>4</Button>
                <Button HandleClick={this.addToInput}>5</Button>
                <Button HandleClick={this.addToInput}>6</Button>
                <Button HandleClick={this.addToInput}>+</Button>
             </div>
             <div className="row">
                <Button HandleClick={this.addToInput}>.</Button>
                <Button HandleClick={this.addToInput}>0</Button>
                <Button HandleClick={()=>this.HandleEqual()}>=</Button>
                <Button HandleClick={this.addToInput}>-</Button>
             </div>
             <div className="row">
             <ButtonClear HandleCleaner={()=>this.setState({input:''})}>Clear</ButtonClear>
             </div>
          </div>
      </div>

      )}
}

export default App;
