import React from "react";
import Header from './Header/index.js';
import Footer from './Footer/index.js';
import { HashRouter  } from 'react-router-dom';
import Home from './Portfolio/index';
export default () => {
  return (
    <React.Fragment>
      <HashRouter>
        <Header />
        <div className="container-fluid">
          <Home/>
        </div>
        <Footer />
      </HashRouter>
    </React.Fragment>
  )
};
