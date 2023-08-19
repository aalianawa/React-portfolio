import React from 'react'
import group from "../../asets/images/Group 4285.svg"

const CardPart = () => {
  return (
    <div className='card-parts py-5'>
      <div className='container'>
        <div className="row">
          <div className="col-md-7">
            <h2 className="featuer-heading fw-bolder lh-1">Peed Of Creative <br /> Service For Your <br /> Business Growth</h2>
            <p className="para">We recruit doctors with the best honors and graduates at their <br /> universities, with a very broad and extraordinary
              experience <br /> they grow into professional doctors</p>
            <p>then received extraordinary supplies, guided for 2 years, they <br />
              already understand very well about existing diseases and how <br /> to handle them properly</p>
          </div>
          <div className="col-md-5 ">
            <img src={group} width={500} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPart;