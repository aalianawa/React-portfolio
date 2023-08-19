import React from 'react'
import "./Header.css"
import image from "../../asets/images/image.png"
import girl from "../../asets/images/Girl.png"

const Header = () => {
  return (
    <div className="header-section">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
          <div className="col-md-3 mb-2 mb-md-0">

            <img src={image} alt="" /><span className='fw-bold'> Warkinon</span>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-clour nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#" className="nav-clour nav-link px-2">case Studies</a></li>
            <li><a href="#" className="nav-clour nav-link px-2">Blog</a></li>
            <li><a href="#" className="nav-clour nav-link px-2">services</a></li>
            <li><a href="#" className="nav-clour nav-link px-2">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">

            <button type="button" className=" button rounded-5 px-3">Contact</button>
          </div>
        </header>










        <div className='row'>
          <div className='col-md-7 hero-section mt-5'>
            <h1 className='heading fw-bold'>The Better Way<br></br> To <span className='spam'>Success</span> In <br></br> Your Business</h1>
            <p >I seek to push the limits of creativity to create high-engaging,<br></br> user-friendly, and memorable interactive experiences.</p>
            <button type="button" className="button rounded-5 px-4">Hire Me</button>
          </div>
          <div className='col-md-5 '>
            <img className="bd-placeholder-img-lg  img-fluid mx-auto" height={350} width={450} src={girl} alt="girl" />
          </div>
        </div>
      </div>
    </div>

  );
};
export default Header;
