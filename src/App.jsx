import React from "react";
import Header from './Header/index.js';
import Footer from './Footer/index.js';
import { routes } from './Router/Router';
import CreatePortfolio from './Portfolio/CreatePortfolio';
import { HashRouter  } from 'react-router-dom';

export default () => {
  return (
    <React.Fragment>
      <HashRouter>
        <Header />
        <div className="container-fluid">
        {routes}
        </div>
        <Footer />
      </HashRouter>
    </React.Fragment>
  )
};
