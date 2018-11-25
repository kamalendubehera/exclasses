import React, { Component } from 'react';
class BigNav extends Component {
    render() {
      return (
        <nav className='navbar'>
            <div className='container'>
                <div className='navbar-header'>
                <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span> 
                </button>
                <a className='navbar-brand' href='#'><span id='compName'>EXCELLENT CLASSES</span><br/><span id='tagLine'>A Career Foundation Firm..</span></a>
                </div>
                <div className='collapse navbar-collapse' id='myNavbar'>
                    <ul className='nav navbar-nav navbar-right'>
                        <li className='active'><a href='#bannerMain'>Home</a></li>
                        <li><a href='#portfolio'>Portfolio</a></li>
                        <li><a href='#courses'>Courses</a></li> 
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
      );
    }
  }
  
  export default BigNav;