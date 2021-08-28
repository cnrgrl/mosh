import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value:this.props.value
      };


      handleIncrement = product => {
        //console.log("kliklendi", this)
        //console.log(product);
        this.setState({value: this.state.value+1});
    };
    render() { 

        
        
        return ( 
        <React.Fragment>
            <hr/>
            {/* <h4>{this.props.id}</h4> */}

            <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
            
            <button 
            onClick={this.handleIncrement} 
            className="btn btn-secondary btn-sm">
                Increment
            </button>
            
            <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">DELETE</button>
        </React.Fragment> );
    }





    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value===0 ? "warning":"primary";
        return classes;
    }

    formatCount(){
        //return this.state.count===0 ? 'Zero' : this.state.count;
        const {value} = this.state;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;