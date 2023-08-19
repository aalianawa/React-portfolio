import React from 'react'
import './cardSetin.css'
import Coins from "../../asets/images/coins.svg"
import hand from "../../asets/images/Hand.svg"
import Icon from "../../asets/images/icon.svg"



const CardSection = () => {
  return (
    <div className='card-section'>
      <div className='container'>

        <h2 className='text-center py-3'>I want company feature</h2>
        <h6 className='text-center'>We believe scaling startups require a radically different kind of agency</h6>
        <div className="row g-4 py-5 row-cols-lg-3">





      
          <div className="feature text-center">
            <div className="feature-icon d-inline-flex align-items-center justify-content fs-2 mb-3">
              <img src={Coins} alt="" />
            </div>
            <h3 className="fs-2 text-center">Easy to purchase</h3>
            <p className='text-center'>A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.</p>

          </div>
          <div className="card">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">

              <img src={hand} alt="" />
            </div>
            <h3 className="fs-2 text-center">Strategy</h3>
            <p className='text-center'>Strategy A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.</p>

          </div>
          <div className="feature text-center">
            <div className="feature-icon d-inline-flex align-items-center justify-content fs-2 mb-3">
              <img src={Icon} alt="" />
            </div>
            <h3 className="fs-2 text-center">Agency Web</h3>
            <p className='text-center'>A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.</p>

          </div>
        </div>
      </div>
    </div>

  )
}

export default CardSection;