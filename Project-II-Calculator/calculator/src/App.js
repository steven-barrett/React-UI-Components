import React, { Component } from 'react';
import './App.css';
import { Button } from './components/ButtonComponents/NumberButton';
import { Input } from './components/input';
import { ClearButton } from './components/ButtonComponents/ActionButton';
import * as math from 'mathjs';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  addToInput = val => {
    this.setState({input: this.state.input + val});
  }

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) });
  }

  handleMultiply = val => {
    if (val === "x") {
      this.setState({input: this.state.input + val.replace("x", "*")});
    }
}

  render() {
    return (
      <div className="app">
        <div className="calculator-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.handleMultiply}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({input: ""})}>clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;