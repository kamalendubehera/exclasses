import React, { Component } from 'react';
class SmallNav extends Component {
    render() {
      return (
        <div id='smallNav' className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-7'>
                        <ul className='contactInfo'>
                            <li><span className='fa fa-phone'></span> +91-7655972339</li>
                            <li><span className='fa fa-envelope'></span> dev.ecc.nilagiri@gmail.com</li>
                            <li><span className='fa fa-clock-o'></span> Mon - Sat 9:00AM - 8:00PM</li>
                        </ul>
                    </div>
                    <div className='col-sm-5'>
                        <ul className='contactInfo text-right'>
                            <li><a href='https://www.google.co.in' target='_blank' rel='noopener noreferrer'><span className='fa fa-facebook'></span></a></li>
                            <li><a href='https://www.google.co.in' target='_blank' rel='noopener noreferrer'><span className='fa fa-google-plus'></span></a></li>
                            <li><a href='https://www.google.co.in' target='_blank' rel='noopener noreferrer'><span className='fa fa-twitter'></span></a></li>
                            <li><a href='https://www.google.co.in' target='_blank' rel='noopener noreferrer'><span className='fa fa-instagram'></span></a></li>
                            <li><a href='https://www.google.co.in' target='_blank' rel='noopener noreferrer'><span className='fa fa-linkedin'></span></a></li>
                            <li><a href='https://www.google.co.in' target='_blank' rel='noopener noreferrer'><span className='fa fa-youtube'></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default SmallNav;