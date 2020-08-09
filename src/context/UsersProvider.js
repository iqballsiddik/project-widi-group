import React, { Component } from 'react'
import RootContext from './index';

export default class UsersProvider extends Component {
    render() {
        return (
            <RootContext.Provider value={{ menulist: ["Dashboard", "Order", "List Order"] }}>
                {this.props.children}
            </RootContext.Provider>
        )
    }
}
