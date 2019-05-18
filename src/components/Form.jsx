import React, { Component, Fragment } from 'react';
import { Context } from '../Context';

class Form extends Component {

    handleInput() {
        console.log('Escribiendo');
    }
    render() {

        let price = React.createRef()
        let categoryName = React.createRef()
        return (
            <div>
                <p className="display-4 text-center d-none d-md-block">Crea tu categoria</p>
                <form className="car" action="">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Valor</label>
                        <input ref={price} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Valor"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Categoria</label>
                        <input ref={categoryName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Categoria"></input>
                    </div>
                    <Context.Consumer>
                        {
                            (value) => {
                                return (
                                    <Fragment>
                                        <button type="button" className="btn btn-primary" onClick={() => {
                                            value.addCategory({
                                                price: price.current.value,
                                                name: categoryName.current.value,
                                            })
                                        }} >Crear</button>
                                        <button type="button" className="btn btn-danger mx-1" onClick={() => {
                                            value.deleteCategory()
                                        }}>Eliminar</button>
                                    </Fragment>
                                )
                            }
                        }

                    </Context.Consumer>
                </form>

            </div>
        );
    }
}

export default Form;