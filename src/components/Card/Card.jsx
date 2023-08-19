import React from 'react'
import Girl from "../../asets/images/girl2.svg"

const Card = () => {
  return (
    <div className='container mt-5 py-5'>
      <div className='row'>
        <div className="row featurette">

          <div className="col-md-5 order-md-1 py-1">
            <img width={460} height={430} src={Girl} alt="" />
          </div>
          <div className="col-md-7 order-md-2 mt-5 py-3">
            <h1 className="featurette-heading fw-bold lh-1 fs-1">Let your visitors know <br /> about your features.</h1>
            <p className="lead fs-4 ">We develop enjoyable consumer experiences, from <br /> digital strategy and content to
              media and analysis. <br /> Leading to meaningful results and satisfied clients.</p>

            <button type="button" className="button rounded-5 px-2">Our Process</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card;