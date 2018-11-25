import React, { Component } from 'react';
class Footer extends Component {
    render() {
      return (
        <div id='footer' className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div className='footerMain'>
                            <p>We are one of the recognised institutes in this region affiliated to one of the top institutes in Delhi. We provide world class training with top class facilities in the market.</p>
                            <p>&#169; 2018 All rights reserved with ECC</p>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='footerMain'>
                            <p>At Raj Nilagiri, Post: Nilagiri,<br/> Balasore, Odisha 756040, India<br/></p>
                            <p>+91 7655972339<br/>dev.ecc.nilagiri@gmail.com</p>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <input type='text' placeholder='Enter Email Id..'/>
                        <button type='button' className='btnSubscribe'>Subscribe</button>
                        <ul className='social'>
                            <li><a href='https://www.google.co.in' target='_blank' rel='noopener noreferrer'><i className='fa fa-facebook'></i></a></li>
                            <li><a href='https://www.google.co.in' target='_blank' rel='noopener noreferrer'><i className='fa fa-google-plus'></i></a></li>
                            <li><a href='https://www.google.co.in' target='_blank' rel='noopener noreferrer'><i className='fa fa-twitter'></i></a></li>
                            <li><a href='https://www.google.co.in' target='_blank' rel='noopener noreferrer'><i className='fa fa-instagram'></i></a></li>
                            <li><a href='https://www.google.co.in' target='_blank' rel='noopener noreferrer'><i className='fa fa-linkedin'></i></a></li>
                            <li><a href='https://www.google.co.in' target='_blank' rel='noopener noreferrer'><i className='fa fa-youtube'></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Footer;