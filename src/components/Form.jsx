import React, { Component } from 'react';

class Form extends Component {

    handleInput(e) {
        console.log(e.target.value, e.target.name);
    }
    render() {
        return (
            <div>
                <form className="car" action="">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Valor</label>
                        <input name="price"
                            onChange={this.handleInput}
                            type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Valor"></input>
                    </div>
                    <div className="form-group">
                        <label htmlfor="exampleInputEmail1">Categoria</label>
                        <input name="category" onChange={this.handleInput} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Categoria"></input>
                    </div>
                    <button type="button" className="btn btn-primary">Crear</button>
                    <button type="button" className="btn btn-danger mx-2">Eliminar</button>
                </form>

            </div>
        );
    }
}

export default Form;