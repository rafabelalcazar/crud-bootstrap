import React from 'react';
// import './App.css';

import Navbar from './components/Navbar'
import Category from './components/Category'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 ">
            <div className="m-2 p-3">
              <Form />

            </div>
          </div>
          <div className="col-9">
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
          </div>

        </div>

      </div>


    </div>
  );
}

export default App;
