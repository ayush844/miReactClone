import { Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/Slider.css"
import React from 'react'


const Slider = ({start}) => {
  return (
        <Carousel fade>
            
            {
                start.map((item) => (
                    <Carousel.Item>
                        <img 
                            className="d-block w-100" 
                            src={item} 
                            alt="Fist slide" 
                            key={item}
                        />
                    </Carousel.Item>
                ))
            }

        </Carousel>

  )
}

export default Slider
