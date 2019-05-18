import React, { Component } from 'react';
import './Category.css';


class Category extends Component {
    render() {
        return (
            <div className="card">
                <h1 className="mt-4">${this.props.category.price}</h1>
                <p className="mt-5">{this.props.category.name}</p>

            </div>
        );
    }
}

export default Category;