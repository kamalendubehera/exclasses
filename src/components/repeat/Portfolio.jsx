import React, { Component } from 'react';
class Portfolio extends Component {
    render() {
      return (
        <div>
            <div id='portfolio' className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-7'>
                            <h1>WELCOME TO EXCELLENT<br/>COMPUTER CLASSES</h1>
                            <h3>One student, one teacher, one book and one pen can change the world.</h3>
                            <p>Established in the year 2018 @ Nilagiri, Excellent Computer Classes is an institutional firm led by Mr. Nihar Ranjan Behera. Built on the principles of entrepreneurship, excellence and professionalism, the institute is intended to impart quality education and boasts of producing some exceptional professional, leaders and managers for today's industry.</p>
                            <button type='button' className='btnGen'>KNOW MORE</button>
                        </div>
                        <div className='col-sm-5'>
                            <img src={require('../../images/portfolio.jpg')} alt='Portfolio Banner'/>
                        </div>
                    </div>
                </div>
            </div>
            <div id='whyus' className='container'>
                <h1>WHY CHOOSE US?</h1>
                <p className='headDesc'>Excellent Computer Classes is considered as one of the best coaching center in Odisha, affiliated to TECHINAUT INSTITUTE OF TECHNOLOGY, Delhi. A pioneer in the region with its holistic approach and dedication of adding value to life and professional ethics to its students, it is a centre of learning where knowledge fuels the desire for distinction and always aspires for serving the changing needs of the industry.</p>
                <div className='row'>
                    <div className='col-sm-3'>
                        <div className='whyusHolder'>
                            <img src={require('../../images/whyus1.png')} alt='*'/>
                            <h4>DELIVER QUALITY</h4>
                            <p>Our priority is to provide the best quality education to all of our students with groundbreaking innovative ideas and modern cutting edge technologies.</p>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='whyusHolder'>
                            <img src={require('../../images/whyus2.png')} alt='*'/>
                            <h4>ALWAYS ON TIME</h4>
                            <p>We complete all the courses within the scheduled time inorder to provide our students with ample time to revise, demo and gain practical knowlwdge.</p>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='whyusHolder'>
                            <img src={require('../../images/whyus3.png')} alt='*'/>
                            <h4>QUALIFIED TEACHERS</h4>
                            <p>To make our studens career successfull we provide some of the best teachers in town and high level infrastructures along with video conference lectures.</p>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='whyusHolder'>
                            <img src={require('../../images/whyus4.png')} alt='*'/>
                            <h4>MULTIPLE COURSES</h4>
                            <p>We have a huge no of courses to offer our students with top class amenities &amp; infrastructure that indeed makes education stimulating and dynamic.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Portfolio;