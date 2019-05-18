import React, { Component } from 'react';
import { Context } from '../Context';
import Category from './Category';
// import Category from './Category';

class Categories extends Component {
    render() {
        return (
            <div>
                <Context.Consumer>
                    {
                        (value) => {
                            console.log(value)
                            return (
                                value.categorias.map((category, index) => {
                                    return (<Category category={category} key={index} />)
                                })
                            )
                        }
                    }
                    {/* <Category name={value.categorias}></Category> */}
                </Context.Consumer>

            </div>
        );
    }
}

export default Categories;