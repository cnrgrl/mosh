import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value:this.props.counter.value
    //   };


 
    render() { 

        
        
        return ( 
        <React.Fragment>
            <hr/>
            {/* <h4>{this.props.id}</h4> */}

            <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
            
            <button 
            onClick={()=>this.props.onIncrement(this.props.counter.id)} 
            className="btn btn-secondary btn-sm">
                Increment
            </button>
            <button 
                onClick={()=>this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">DELETE</button>
        </React.Fragment> );
    }





    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.value===0 ? "warning":"primary";
        return classes;
    }

    formatCount(){
        //return this.state.count===0 ? 'Zero' : this.state.count;
        // const {value} = this.props.counter.value;
        return this.props.value === 0 ? 'Zero' : this.props.value;
    }
}
 
export default Counter;