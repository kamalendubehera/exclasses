import React, { Component } from 'react';
class Contact extends Component {
    render() {
      return (
        <div id='contact'>
            <img src={require('../../images/contact.png')} className='fitLayout' alt='CONTACT'/>
            <div className='container'>
                <div className='contactTop'>
                    <img src={require('../../images/contact-top.png')} className='fitLayout' alt='CONTACT top' />
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div className='address'>
                            <h3>Office Address :</h3>
                            <h4>Excellent Computer Classes</h4>
                            <p>@ Raj Nilagiri, Post: Nilagiri,<br/> Balasore, Odisha 756040, India<br/></p>
                            <p>+91 7655972339<br/>dev.ecc.nilagiri@gmail.com</p>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='regHolder'>
                            <h3>We are providing a vast range of courses with some outstanding facilities in the training premises and also the courses are made availanle to you online with pdf. Register now to avail the offerings.</h3>
                            <button type='button' className='btnGen btnBig' data-toggle="modal" data-target="#modalReg">REGISTER NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Contact;