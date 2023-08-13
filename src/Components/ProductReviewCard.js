import React from 'react'
import '../Styles/ProductReviewCard.css'

const ProductReviewCard = ({name, price, image, review, index}) => {
  return (
    <div className='productReviewCard'>
      <img src={image} alt={`${index} review`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard
