import React, { Component } from 'react';
class ModalReg extends Component {
    render() {
      return (
            <div id="modalReg" className="modal fade" role="dialog">
                <div className="modal-dialog">

                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Candidate Registration</h4>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    Full Name<span className='required'>*</span><span className='errMsg'></span><br/>
                                    <input type='text'/>
                                </div>
                                <div className='col-sm-6'>
                                    Father's Name<span className='required'>*</span><span className='errMsg'></span><br/>
                                    <input type='text'/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    Phone No<span className='required'>*</span><span className='errMsg'></span><br/>
                                    <input type='text'/>
                                </div>
                                <div className='col-sm-6'>
                                    Email Id<span className='required'>*</span><span className='errMsg'></span><br/>
                                    <input type='text'/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    Date of Birth<br/>
                                    <input type='date' placeholder='DD/MM/YYYY'/>
                                </div>
                                <div className='col-sm-6'>
                                    Gender<br/>
                                    <select>
                                        <option>--Select Option--</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            Category<br/>
                                            <select>
                                                <option>--Select Option--</option>
                                                <option>GEN</option>
                                                <option>OBC</option>
                                                <option>SC</option>
                                                <option>ST</option>
                                            </select>
                                        </div>
                                        <div className='col-sm-12'>
                                            Marital Status<br/>
                                            <select>
                                                <option>--Select Option--</option>
                                                <option>Married</option>
                                                <option>Unmarried</option>
                                                <option>Divorced</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    Address<br/>
                                    <textarea rows='4'></textarea>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    Choose Course<br/>
                                    <select>
                                        <option>--Select Option--</option>
                                        <option>Fundamentals</option>
                                        <option>Windows</option>
                                        <option>MS Office</option>
                                        <option>Networking</option>
                                        <option>Internet</option>
                                        <option>Multimedia</option>
                                        <option>Programming C</option>
                                        <option>C++ OOPS</option>
                                        <option>DBMS/RDBMS</option>
                                        <option>Tally</option>
                                        <option>Photoshop</option>
                                        <option>Web Designing</option>
                                        <option>HTML/CSS</option>
                                        <option>Javascript</option>
                                        <option>Web Development</option>
                                    </select>
                                </div>
                                <div className='col-sm-6'>
                                    Course Type<br/>
                                    <select>
                                        <option>--Select Option--</option>
                                        <option>Classroom Sessions</option>
                                        <option>Online Documents</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                        <div className='declaration'>
                            <input type='checkbox' defaultChecked/> I hereby confirm that the information provided above are true to best of my knowledge and I agree to abide the Terms &amp; Conditions of the Institute provided here.
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default ModalReg;