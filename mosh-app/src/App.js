

import './App.css';
import Counters from './components/counters';
import './components/navbar'
import Navbar from './components/navbar';
import React, { Component } from 'react';

class App extends Component {
       
    state = { 
        counters:[
        {id: 1, value: 800},
        {id: 2, value:900 },
        {id: 3, value:0},
        {id: 6, value:700}
    ] 
};
    handleReset=()=>{
        const counters=this.state.counters.map(c=> {c.value=0; return c;});
        this.setState({counters})
    }
    handleIncrement = counter => {
           const counters=[...this.state.counters];
           const index=counters.indexOf(counter)
           counters[index]={...counter};
           counters[index].value++;
           this.setState({counters});
        
            // const clone=this.state.counters;
            // const index=clone.indexOf(counter.id);
            // console.log(counter)

        
        // const valued=this.state.counters[counterId-1].value+1;
        // const valued=this.state.counters.value
        // console.log(this.setState({value:valued}));
        // console.log(valued)
        // const counters=[...this.state.counters];

        // console.log("kliklendi", valued.indexOf(incr))
    };
    handleDelete=(counterId)=>{
        console.log("delete func called")
        const counters=this.state.counters.filter(c=>c.id !== counterId );
        this.setState({counters});

    };
   

    render() { 
        return ( 
        <div className="App">
            <Navbar 
                totalIncrement={this.state.counters.filter(c=> c.value>0).length}   
            />

            
            <Counters 
               
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
                onReset={this.handleReset}
                counters={this.state.counters}
                // key={counter.id}
                //id={counter.id} 
            />
                

      </div> );
    }
}
 
export default App;

