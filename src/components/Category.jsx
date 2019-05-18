import React, { Component } from 'react';
import './Category.css';


class Category extends Component {
    render() {
        console.log(this.props);
        return (

            <div className="card">
                <h2 className="mt-5">${this.props.price}</h2>
                <p className="mt-3">{this.props.name}</p>
            </div>
        );
    }
}

export default Category;