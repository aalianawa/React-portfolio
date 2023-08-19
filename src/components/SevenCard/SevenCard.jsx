import React from 'react'
import "./sevenCard.css"
import Girly from "../../asets/images/Ellipse 12.svg"
import love from "../../asets/images/in-love.svg"
import line from "../../asets/images/Line.svg"


const SevenCard = () => {
    return (
        <div className='card-seven'>
            <div className='container py-5'>
                <h2 className='text-center'>Our Testimonial</h2>
                <h6 className='text-center'>We believe scaling startups require a radically different kind of agency</h6>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start rounded-4">
                        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            <img src={Girly} alt="" />
                        </div>
                        <div>
                            <p className="fs-5 text-body">The experts easily identified the
                                wand guided us through the
                                creation of the c.</p>
                            <h3>I love Sway
                            <img src={love} alt="" />
                            </h3>
                            <img src={line} alt="" />
                            <h5 className='headin'> Vincent Smith <span className='span'> CEO at Ritmo</span></h5>
                        </div>
                    </div>

                    <div className="col d-flex align-items-start  rounded-4">
                        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            <img src={Girly} alt="" />
                        </div>
                        <div>
                            <p className="fs-5 text-body">The experts easily identified the
                                wand guided us through the
                                creation of the c.</p>
                            <h3>I love Sway
                            <img src={love} alt="" />
                            </h3>
                            <img src={line} alt="" />
                            <h5 className='headin'> Vincent Smith <span className='span'> CEO at Ritmo</span></h5>
                          
                        </div>
                    </div>

                    <div className="col d-flex align-items-start  rounded-4">
                        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            <img src={Girly} alt="" />
                        </div>
                        <div>
                            <p className="fs-5 text-body">The experts easily identified the
                                wand guided us through the
                                creation of the c.</p>
                            <h3>I love Sway
                                <img src={love} alt="" />
                            </h3>
                            <img src={line} alt="" />
                            <h5 className='headin'> Vincent Smith <span className='span'> CEO at Ritmo</span></h5>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        </div>
    )
}

export default SevenCard;