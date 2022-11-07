import React from 'react'
import './styles/LogoHoverLayout.css'

const LogoHoverLayout = ({positions}) => {

    const logoLayoutStyle = {
      top:`${positions.x - 350}px`,
      left:`${positions.y + 130}px`
    }
    

  return (
    <div className='logo-hover' style={logoLayoutStyle}>
      <div className='outer-container'>
          <img className='img-logo' src='https://media-exp1.licdn.com/dms/image/C5603AQG_Sw9npO7vIg/profile-displayphoto-shrink_100_100/0/1627385878879?e=1672876800&v=beta&t=LSuEEvlqYawUFJLssdkfBY5_qHIMkPVftm0Oaa4YJI0' />  
          <div> Jeremy Ravenel • 3rd+</div>
          <div className='middle-header-body'>⚡️ Building @naas.ai - open source data platform | Stanford LEAD alumni </div>
          <button className='btn'> Follow </button>
      </div>
    </div>
  )
}

export default LogoHoverLayout
