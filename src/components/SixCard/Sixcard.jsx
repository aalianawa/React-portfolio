import React from 'react'
import maskGroup from "../../asets/images/Mask group.svg"
import Mask from "../../asets/images/Mask group (1).svg"
import Makso from "../../asets/images/Mask group (2).svg"
import mausko from "../../asets/images/Mask group (3).svg"

const Sixcard = () => {
  return (
    <div className='six-card'>
      <div className='container'>
        <h2>Our Impressive Portfolio</h2>
        <h6>We believe scaling startups require a radically different kind of agency</h6>
        <div className='d-felx row row-cols-lg-2'>
          <div>
            <img width={500} src={maskGroup} className='' alt="" />
            <h5>Website Design</h5>
          </div>



          <div>
            <img width={500} className='' src={Mask} alt="" />
            <h5>Dashboard Design</h5>
          </div>

          <div>
            <img width={500} src={Makso} className='' alt="" />
            <h5> Gallery Item  </h5>
          </div>



          <div>
            <img width={500} className='' src={mausko} alt="" />
            <h5>Mock Up Design </h5>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sixcard;