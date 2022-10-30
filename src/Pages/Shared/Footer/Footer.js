import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className='w-100 mt-5'>
            <footer className="page-footer font-small blue pt-4 w-100 bottom-0">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Quick Learn</h5>
                            <p>Enjoy a personalized, fun, and interactive learning
                                process while becoming a Quick learner.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            
                            <ul className="list-unstyled">
                                <li><a href="#!">Refund policy</a></li>
                                <li><a href="/terms">Terms and condition</a></li>
                                <li><a href="#!">Privacy Policy</a></li>
                                
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            
                            <ul className="list-unstyled">
                                <li><a href="#!">Facebook</a></li>
                                <li><a href="#!">Instagram</a></li>
                                <li><a href="#!">Linkedin</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="#"> abc.com</a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;