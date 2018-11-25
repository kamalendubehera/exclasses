import React, { Component } from 'react';
import SmallNav from './repeat/SmallNav';
import BigNav from './repeat/BigNav';
import BannerMain from './repeat/BannerMain';
import Portfolio from './repeat/Portfolio';
import Courses from './repeat/Courses';
import Contact from './repeat/Contact';
import ModalReg from './repeat/ModalReg';
import Testimonial from './repeat/Testimonial';
import Footer from './repeat/Footer';
class Home extends Component {
    render() {
      return (
        <div>
          <SmallNav/>
          <BigNav/>
          <BannerMain/>
          <Portfolio/>
          <Courses/>
          <Contact/>
          <Testimonial/>
          <Footer/>
          <ModalReg/>
        </div>
      );
    }
  }
  
  export default Home;