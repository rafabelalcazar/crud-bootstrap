import React, { Component } from 'react';
import './Category.css';


class Category extends Component {
    render() {
        return (
            <div className="card">
                <h2 className="mt-4">${Intl.NumberFormat().format(this.props.category.price)}</h2>
                <p className="mt-5">{this.props.category.name}</p>

            </div>
        );
    }
}

export default Category;