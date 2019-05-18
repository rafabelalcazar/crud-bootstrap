import React, { Component } from 'react';
const Context = React.createContext();
export { Context };

class Context extends Component {
    state = {
        categorias: []
    }
    render() {
        return (
            <Context.Provider value={{ categorias: this.context.categorias }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;