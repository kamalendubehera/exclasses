import React, { Component } from 'react';
class Testimonial extends Component {
    render() {
      return (
        <div id='testimonial' className='container'>
        <h1 className='text-center'>TESTIMONIALS</h1>
            <div className='row'>
                <div className='col-xs-6 col-sm-3'>
                    <div className='testiHolder'>
                        <img src={require('../../images/pro1.jpg')} alt='pro1'/>
                        <h5>Kunal Ranjan Patra</h5>
                        <h6>Faculty Member</h6>
                        <hr></hr>
                        <p>The program I've just completed has been an amazing journey. The information and knowledge I acquired has been invaluable and I will take it with me.</p>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                </div>
                <div className='col-xs-6 col-sm-3'>
                    <div className='testiHolder'>
                        <img src={require('../../images/pro2.jpg')} alt='pro2'/>
                        <h5>Jugal Kishore Sahoo</h5>
                        <h6>Faculty Member</h6>
                        <hr></hr>
                        <p>The program I've just completed has been an amazing journey. The information and knowledge I acquired has been invaluable and I will take it with me.</p>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                </div>
                <div className='col-xs-6 col-sm-3'>
                    <div className='testiHolder'>
                        <img src={require('../../images/pro3.jpg')} alt='pro3'/>
                        <h5>Bandita Mahalick</h5>
                        <h6>Student</h6>
                        <hr></hr>
                        <p>The program I've just completed has been an amazing journey. The information and knowledge I acquired has been invaluable and I will take it with me.</p>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                </div>
                <div className='col-xs-6 col-sm-3'>
                    <div className='testiHolder'>
                        <img src={require('../../images/pro4.jpg')} alt='pro4'/>
                        <h5>Dinabandhu Dash</h5>
                        <h6>Student</h6>
                        <hr></hr>
                        <p>The program I've just completed has been an amazing journey. The information and knowledge I acquired has been invaluable and I will take it with me.</p>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Testimonial;