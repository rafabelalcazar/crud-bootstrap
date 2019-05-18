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
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 ">
              <div className="m-2 p-3">
                <Form />

              </div>
            </div>
            <div className="col-9">
              <Categories />
            </div>

          </div>

        </div>


      </div>
    </ContextProvider>

  );
}

export default App;
