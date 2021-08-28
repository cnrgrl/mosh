import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    state = { 
        counters:[
        {id: 1, value: 11},
        {id: 2, value:22 },
        {id: 3, value:0},
        {id: 4, value:44}
    ] 
};

    handleDelete=(counterId)=>{
        console.log("delete func called")
        const counters=this.state.counters.filter(c=>c.id !== counterId );
        this.setState({counters});

    };
    render() { 
       
        return (
        <div>
            {this.state.counters.map(counter=>(
            <Counter key={counter.id} value={counter.value} id={counter.id+counter.value} onDelete={this.handleDelete}/>
                ))}
        </div>  
        );
    }
}
 
export default Counters;