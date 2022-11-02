
import './App.css';
import React, { Component } from 'react';

import Counters from './Components/Counters';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';

class App extends Component {
  state = { 
    counters: [
      {id:1, value:0},
      {id:2, value:3},
      {id:3, value:9},
      {id:4, value:12},
    ]
   }

  handleReset = () => {
    const resetValues = this.state.counters.map( x => {
      (x.value = 0);
      return x;
    })
    this.setState( {counters : resetValues} )
  }

  handleIncrement =(counter) =>{
    const counters = [...this.state.counters];
    const index = counters.map(x => x.value).indexOf(counter);
    counters[index].value++;
    this.setState({counters})


    console.log('Clicked Value is ', counter);
    // console.log('Increased Value is ', newValue);
    console.log('Index is ', index);
    // console.log('newValue is ', counters[index].value+1);
   

    }
    handleDecrement = (counter)=> {
      const counters = [...this.state.counters];
      const index = counters.map(x => x.value).indexOf(counter);
      counters[index].value--;
      this.setState({counters})
    }

  handleDelete = counter => {
    const remainingValues = this.state.counters.filter( r => r.id !== counter.id);
    console.log(counter);
    console.log('Delete function', remainingValues);
    this.setState({ counters : remainingValues });
  };

  render() {
    return (
      <Counters
        counters = {this.state.counters}
        onReset = {this.handleReset}
        onDelete = {this.handleDelete}
        onIncrement = {this.handleIncrement}
        onDecrement ={this.handleDecrement}
      />
    );
  };
}
export default App;

