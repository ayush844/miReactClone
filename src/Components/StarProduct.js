import React from 'react'
import '../Styles/StarProduct.css'

const StarProduct = ({starProduct}) => {
  return (

    <div className='starProductSection'>

      <div><a href={starProduct[0].url}><img src={starProduct[0].image} alt="1rst product" /></a></div>

      <div>

        <a href={starProduct[1].url}><img src={starProduct[1].image} alt="1rst product" /></a>
        <a href={starProduct[2].url}><img src={starProduct[2].image} alt="1rst product" /></a>
        <a href={starProduct[3].url}><img src={starProduct[3].image} alt="1rst product" /></a>

      </div>

    </div>

  )
}

export default StarProduct;
