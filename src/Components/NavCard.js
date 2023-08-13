import React from 'react'
import '../Styles/NavCard.css'

const NavCard = ({name, price, image, index}) => {
  return (
    <div className='NavCard'>

        <img src={image} alt={`${index} image`} />
        <p>{name}</p>
        <span>{price}</span>
      
    </div>
  )
}

export default NavCard
