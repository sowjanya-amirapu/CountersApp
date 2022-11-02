import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Counter from './Counter';

class Counters extends Component {

    render() { 
        return (
            <div>
            <button onClick = {this.props.onReset} className = 'btn btn-primary m-2'>Reset</button>
            {this.props.counters.map( counters => 
                <Counter 
                    key = {counters.id}
                    counters = {counters}
                    onDelete = {this.props.onDelete}
                    onIncrement ={this.props.onIncrement}
                    onDecrement = {this.props.onDecrement}
                    />
            
)}
            </div>
            );
      }
}

export default Counters;

