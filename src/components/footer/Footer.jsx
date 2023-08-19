import React from 'react'
import facebook from "../../asets/images/Facebook16px.svg"
import insta from "../../asets/images/16px.svg"
import tweiter from "../../asets/images/Twitter.svg"
import './footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='container'>
                <div className='row d-flex'>


                    <div className="container">
                        <footer className="py-5">
                            <div className="row">
                                <div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-bottom'>
                                    <h5 className='txt-title'>About Services Pricing plans Privacy Contact us</h5>
                                    <div className='text-end'>
                                        <img src={facebook} alt="" />
                                        <img src={insta} alt="" />
                                        <img src={tweiter} alt="" />
                                    </div>

                                </div>
                                <div className="col-6 col-md-2 mb-3">
                                    <h5 className='txt-title'>About</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0 ">About Sway</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0 ">Plans & Pricing</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0">Services</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0 ">Blog</a></li>

                                    </ul>
                                </div>

                                <div className=" col-md-2 mb-3">
                                    <h5 className='txt-title'>Products</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0">Primary blocks</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0">Content block</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0 ">Infographic blocks</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0">Business blocks</a></li>

                                    </ul>
                                </div>

                                <div className="col-md-2 mb-3">
                                    <h5 className='txt-title'>Resources</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0">Support center</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0">Documentation</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0">Newsletter</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0">Chanelog</a></li>

                                    </ul>
                                </div>



                                <div className="col-md-2 mb-3">
                                    <h5 className='txt-title'>Follow us</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0">Twitter</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0">Dribble</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0">Facebook</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0">Linkedin</a></li>

                                    </ul>
                                </div>

                                <div className="col-md-4 mb-3 nav-link-color">
                                    <h5>Contact</h5>
                                    <p>New York. 112 W <br /> 34th St, Manhattan <br /> (1) 212-445-4320</p>
                                </div>

                                <div className="d-flex flex-column flex-sm-row justify-content-around py-4 my-4 border-top nav-link-color">
                                    <p>&copy;Sways by keydesign. All Rights Reserved</p>
                                    <p className='text-center'>Terms of Use Privacy Policy</p>

                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Footer;