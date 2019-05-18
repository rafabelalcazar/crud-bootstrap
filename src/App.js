import React from 'react';
// import './App.css';

import Navbar from './components/Navbar'
// import Category from './components/Category'
import Form from './components/Form'
import ContextProvider from './Context';
import Categories from './components/Categories';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <div className="container-fluid p-0 fixed-top ">
          <Navbar />
        </div>
        <div className="container-fluid  mt-5">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="m-2 p-3">
                <Form />

              </div>
            </div>
            <div className="col-12 col-md-9  text-center d-flex justify-content-center">
              <Categories />
            </div>

          </div>

        </div>


      </div>
    </ContextProvider>

  );
}

export default App;
