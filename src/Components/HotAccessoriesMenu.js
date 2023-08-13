import React from 'react'
import {Link} from "react-router-dom"
import '../Styles/HotAccessoriesMenu.css'


const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
      
        <Link className = 'HotAccessoriesLink' to = "/music">MUSIC STORE</Link>
        <Link className = 'HotAccessoriesLink' to = "/smartDevice">SMART DEVICE</Link>
        <Link className = 'HotAccessoriesLink' to = "/home">HOME</Link>
        <Link className = 'HotAccessoriesLink' to = "/lifestyle">LIFESTYLE</Link>
        <Link className = 'HotAccessoriesLink' to = "/mobileAccessories">MOBILE ACCESSORIES</Link>

    </div>
  )
}

export default HotAccessoriesMenu
