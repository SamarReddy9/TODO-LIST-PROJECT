import React, { Component } from 'react';

class Cla extends Component {
  constructor() {
    super();
    this.state = {
      arr: ['One', 'Two', 'Three', 'Four'],
    };
  }
  render() {
    return (
      <>
        <h1> I am from List - 1 </h1>
        <p>Creating Order List </p>

        <ol>
          {this.state.arr.map((ele, ind) => {
            return <li> {ele} </li>;
          })}
        </ol>

        <p>Creating Un-order List </p>

        <ul>
          {this.state.arr.map((ele, ind) => {
            return <li> {ele} </li>;
          })}
        </ul>
      </>
    );
  }
}

export default Cla;
