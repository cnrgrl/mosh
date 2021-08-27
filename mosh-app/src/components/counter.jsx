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

        console.log('prop', this.props)
        console.log(this.props)
        
        return ( 
        <React.Fragment>
            <hr/>
            <a>{this.props.children}</a>
            <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
            <button 
            onClick={this.handleIncrement} 
            className="btn btn-secondary btn-sm">
                Increment
            </button>
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