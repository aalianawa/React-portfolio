import React from 'react'
import "./Dashboard.css";
import Nike from '../../asets/images/Nike 2.svg'
import spoti from '../../asets/images/Spotify 2.svg'
import google from '../../asets/images/Google 2.svg'
import Apple from '../../asets/images/Apple 2.svg'
import amazon from '../../asets/images/Amazon2 2.svg'
import airbon from '../../asets/images/Airbnb 2.svg'

const Dashboard = () => {
  return (
    <div className='images-section'>
      <div className='container'>

        <div className='mt-5 py-5'>

          <h4 className='text-center font'>Trusted by the world's best companies</h4>
        </div>
        <div className='images text-center'>

          <img className='nike' src={Nike}  alt="" />
          <img className='spoti' src={spoti} alt="" />
          <img className='Google' src={google} alt="" />
          <img className='apple' src={Apple} alt="" />
          <img className='Amazon' src={amazon } alt="" />
          <img className='Airbon' src={airbon} alt="" />


        </div>
      </div>
    </div>
  )
}

export default Dashboard;