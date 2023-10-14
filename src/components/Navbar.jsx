import React, { useState } from 'react'
import { NavLink , Link } from 'react-router-dom'
import pic1 from './pages/images/nuturmite_logo_tranparent.webp'
import pic2 from './pages/images/download (1).png'





import  { Component } from 'react';
// import './Navbar.css'; // Import your CSS file

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 0) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  render() {
    return (
      <nav className={`navbar ${this.state.scrolled ? 'scrolled' : ''}`}>
        
            <div className='nav'>
                <div className="logo">
                    <img src={pic1} alt="" />
                </div>
                <div className="home">
                    <NavLink to={"/home"}> Home </NavLink>
                   
                </div>
                <div className="product">
                   <NavLink to={"/product"}>Product</NavLink>
                    </div>
                    <div className="about">
                    <NavLink to={"/about"}>About Us</NavLink>
    
                </div>
                <div className="ragistration">
                    <img src={pic2} alt=""/>
    <NavLink to={"/registrationform"}>Registration</NavLink>
                    </div>    
                </div>
  
      </nav>
    );
  }
}

export default Navbar;

