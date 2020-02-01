import React from "react";
import "../css/Calculator.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 0,
      total: 0
    };
    this._onClick = this._onClick.bind(this);
    this._OnChange = this._OnChange.bind(this);
  }

  _OnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  _onClick(e) {
    const total = Number(this.state.first) + Number(this.state.second);
    this.setState({ total: total });
  }

  render() {
    return (
      <div>
        <input name='first' type='number' onChange={this._OnChange} />
        <p>+</p>
        <input name='second' type='number' onChange={this._OnChange} />
        <br />
        <button onClick={this._onClick}> add </button>
        <p> = </p>
        <p>{this.state.total}</p>
      </div>
    );
  }
}

export default Calculator;
