import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from './Body/Body';

export default class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
      </React.Fragment>
    )
  }
}
