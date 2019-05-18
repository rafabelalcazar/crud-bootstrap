import React, { Component } from 'react';
const Context = React.createContext();
export { Context };

class ContextProvider extends Component {
    state = {
        categorias: [{
            name: "Hoteles",
            price: "30000"
        },
        {
            name: "Restaurantes",
            price: "45000"
        }
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
                }
            }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default ContextProvider;