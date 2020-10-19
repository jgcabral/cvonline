import React, { Component } from 'react';
import { FormattedMessage} from "react-intl";

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;

    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">
               <FormattedMessage 
                  id="app.home"
                  defaultMessage="Home">
               </FormattedMessage>
               </a>
            </li>
            <li><a className="smoothscroll" href="#about">
               <FormattedMessage 
                  id="app.about"
                  defaultMessage="About">
               </FormattedMessage>
               </a>
            </li>
	         <li><a className="smoothscroll" href="#resume">
               <FormattedMessage 
                  id="app.resume"
                  defaultMessage="Resume">
               </FormattedMessage>
               </a>
            </li>
            <li><a className="smoothscroll" href="#portfolio">
               <FormattedMessage 
                  id="app.portfolio"
                  defaultMessage="Works">
               </FormattedMessage>
               </a>
            </li>
            <li><a className="smoothscroll" href="#contact">
               <FormattedMessage 
                  id="app.contact"
                  defaultMessage="Contact">
               </FormattedMessage>
               </a>
            </li>

         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">               
               <FormattedMessage 
                  id="app.presentation"
                  defaultMessage="I'm">
               </FormattedMessage> {name}.
            </h1>
            <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
