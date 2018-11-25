import React, { Component } from 'react';
class Courses extends Component {
    render() {
      return (
        <div id='courses' className='container-fluid'>
            <div className='container'>
              <h1>COURSES WE OFFER</h1>
              <p className='headDesc'>We provide a wide range of courses including PGDCA and special courses with some finest facilities like highly qualifies teachers/faculties, high speed internet, online training, projector training, e-libraries, video conferencing etc..</p>
              <div className='row'>
                <div className='col-sm-4'>
                  <div className='courseHolder'>
                    <img src={require('../../images/course1.png')} className='fitLayout' alt='PGDCA' />
                    <div className='courseText'>
                      <h3>REGULAR PGDCA</h3>
                      <p>Course for students who are interested in computer applications.</p>
                    </div>
                    <button type="button" className="btnGen">EXPLORE</button>
                  </div>
                </div>
                <div className='col-sm-4'>
                  <div className='courseHolder'>
                    <img src={require('../../images/course2.png')} className='fitLayout' alt='PGDCA+' />
                    <div className='courseText'>
                      <h3>ADVANCED PGDCA</h3>
                      <p>Allows students to seek high quality knowledge in computer applications.</p>
                      <button type="button" className="btnGen">EXPLORE</button>
                    </div>
                  </div>
                </div>
                <div className='col-sm-4'>
                  <div className='courseHolder'>
                    <img src={require('../../images/course3.png')} className='fitLayout' alt='PGDCA' />
                    <div className='courseText'>
                      <h3>SPECIAL COURSES</h3>
                      <p>Trains you for other cutting edge technologies to compete in industry.</p>
                      <button type="button" className="btnGen">EXPLORE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default Courses;