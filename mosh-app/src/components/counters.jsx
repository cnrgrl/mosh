import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
 
    
   
    render() { 
       
        return (
        <div>
                <button 
            onClick={()=>this.props.onReset()} 
            className="btn btn-primary btn-sm">
                Reset
            </button>
           {this.props.counters.map(counter=>(
            <Counter 
                value={counter.value}
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
                onReset={this.props.onReset}

                key={counter.id}
                //id={counter.id} 
                counter={counter}
                />
                ))} 
        </div>  
        );
    }
}
 
export default Counters;