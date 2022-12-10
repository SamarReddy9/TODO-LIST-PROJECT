import React, { Component } from 'react';

class Cla2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      arr: ['One', 'Two', 'Three', 'Four'],
    };
  }
  render() {
    return (
      <>
      <h1> I am from List - 2 </h1>
      <input type="text" onChange={this.collect}/>
      <button onClick={this.add}> Add </button>
      <p>{this.state.name}</p>



        <p>Creating Order List </p>

        <ol>
          {this.state.arr.map((ele, ind) => {
            return <li> {ele} </li>;
          })}
        </ol>

      </>
    );
  }

//collecting data from input
  collect = (demo) => {
    this.setState({
     name: demo.target.value
    });
  }

  //pushing both table data with adition of input data
add = () =>{
  this.setState({
    arr: [...this.state.arr, this.state.name]
  })
}

}

export default Cla2;

