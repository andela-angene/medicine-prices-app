import React, { Component } from 'react';
import Calculator from './calculator/Calculator';
import NavigationBar from './Navbar';
import Footer from './Footer';
import Stories from './Stories';
/*
* Home component
*/
export default class Home extends Component {
  resetCalculator() {
    this.calculator.resetCalculator();
  }
  render() {
    return (
      <div className="page-width">
        <NavigationBar resetCalculator={this.resetCalculator.bind(this)} />
        <div className="illustration">
          <img src="img/illustration.svg" alt="banner" className="img-responsive"/>
          </div>
        <div className="spacer"></div>
        <Calculator ref={(calculator) => { this.calculator = calculator; }} />
        <Stories />
        <Footer />
      </div>
    );
  }
}
