import React, { Component } from 'react';

class Navbar extends Component {
   
    render() { 
        return ( <React.Fragment>

            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1"> {this.props.totalIncrement} </span>
            </div>
            </nav>

        </React.Fragment> );
    }
}
 
export default Navbar;
