import React, { Component } from 'react';
import data from './data.json';
const Context = React.createContext();
export { Context };

class ContextProvider extends Component {
    state = {
        categorias: [data
        ],
    }
    render() {
        return (
            <Context.Provider value={{
                categorias: this.state.categorias,
                addCategory: category => {
                    let allCategories = this.state.categorias;
                    allCategories.push(category)
                    this.setState({
                        categorias: allCategories
                    })
                },
                deleteCategory: category => {
                    let allCategories = this.state.categorias;
                    allCategories.pop()
                    this.setState({
                        categorias: allCategories
                    })
                }
            }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default ContextProvider;