import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import img from '../assets/images/img-contact-1.png'

Contact.propTypes = {
    
};

function Contact(props) {
    return (
        <div>

        <section className="tf-page-title style-2">    
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-12">

                        <ul className="breadcrumbs">
                            <li><Link to="/">Home</Link></li>
                            <li>Contact</li>
                        </ul>
                
                    </div>
                </div>
            </div>                    
        </section>
                
        <section className="tf-contact">
            <div className="tf-container">
                <div className="row ">
                    <div className="col-md-6">
                        <div className="image ani4">
                            <img src={img} alt="Binasea" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="tf-heading style-3">
                            <h4 className="heading">문의를 남겨주세요</h4>
                            <p className="sub-heading">반갑습니다 블카데미에 문의를 남겨주세요 </p>
                        </div>
                        <form action="contact/contact-process.php" method="post" id="commentform"  className="comment-form">
                            <fieldset className="name">
                                <input type="text" id="name" placeholder="성함을 입력해주세요" className="tb-my-input" name="name" tabIndex="2" aria-required="true" required="" />
                            </fieldset>    
                            <fieldset className="email">
                                <input type="email" id="email" placeholder="이메일을 입력해주세요" className="tb-my-input" name="email" tabIndex="2" aria-required="true" required="" />
                            </fieldset>
                            <div className="form-select" id="subject">
                                <select>
                                    <option value="1">제휴/협업</option>
                                    <option value="2">문의</option>
                                    <option value="3">기타</option>
                                </select>
                                <i className="icon-fl-down"></i>
                            </div>
                            <fieldset className="message">
                                <textarea id="message" name="message" rows="4" placeholder="메세지를 남겨주세요" tabIndex="4" aria-required="true" required="" />
                            </fieldset>
                            <div className="btn-submit"><button className="tf-button" type="submit">제출</button></div>
                        </form>
                        

                    
                        
                    </div>
                </div>
            </div>
        </section>
            
        </div>
    );
}

export default Contact;