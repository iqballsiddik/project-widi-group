import React, { Component } from 'react';
import RootContext from './index';

// Value Global ketika ini dipake oleh child" nya. 
// ini untuk menu side
class AdminProvider extends Component {
    render() {
        return (
            <RootContext.Provider value={{ menulist: ["Dashboard", "Add User", "List User", "Order"] }}>
                {this.props.children}
            </RootContext.Provider>
        )
    }
}
export default AdminProvider;
