import React from 'react';
import './Footer.css';
import LinkedinLogo from '../image/LinkedinLogo.webp';

const Footer = () => {
    return (
        <div>
            <div className="main-footer">
                <div className="container-fluid">
                    <div className="row footer-1">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4 lft-footer">
                                    <div className="row">
                                        <div className="col-md-12">
                                            Centre for Data Science &  Machine Intelligence
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            1st Floor, Centre for Skill and Entrepreneurship Development &#40;CSED  AB-11&#41;, GLA University,NH-19, Mathura-Delhi Road, Chaumuhan,Uttar Pradesh 281406<br />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            E-mail: sakshamgupta0531@gmail.com <br />
                                            <img src={LinkedinLogo} alt="Linkedin" onClick={() => window.open('https://www.linkedin.com/in/saksham0531/','_blank')}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 rgt-footer">
                                    <div className="col-md-12">
                                       
                                        <div className="row">
                                            <div className="col-md-12 footer-logo"> 
                                            <i class="ri-instagram-line"></i>
                                            <i class="ri-google-fill"></i>
                                            <i class="ri-youtube-line"></i>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul>
                                                    <li>Home</li>
                                                    <li>About</li>
                                                    <li>Event</li>
                                                    <li>Team</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer