import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        return (<div>
        <span className = {this.valueColor()}>{this.props.counters.value}</span>
        <button 
        onClick= {() => this.props.onIncrement(this.props.counters.value)} 
        className='btn btn-secondary btn-sm m-2'> + </button>
        <button
        onClick ={() => this.props.onDecrement(this.props.counters.value)}
        className='btn btn-secondary btn-sm m-2'> - </button>
        <button onClick={() => {this.props.onDelete(this.props.counters)}}
         className='btn btn-danger btn-sm m-2'> X </button>
        </div>
        );
    }

valueColor() {
    let color = 'btn btn-';
    color += (this.props.counters.value === 0) ? 'warning': 'primary';
    return color;
    
}

// displayZero(){
//     let {value} = this.props.counters
//    return value === 0 ? 'Zero': value;
// }
}

export default Counter;