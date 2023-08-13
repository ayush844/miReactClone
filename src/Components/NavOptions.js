import React, {useState, useEffect} from 'react'
import NavCard from './NavCard.js'
import '../Styles/NavOptions.css'



const NavOptions = ({miPhones, redmiPhones, tv, laptops, fitnessAndLifeStyle, home, audio, accessories}) => {

    const [miPhonesToggle, setMIPhoneToggle] = useState(false);
    const [redmiPhonesToggle, setRedmiPhoneToggle] = useState(false);
    const [tvToggle, setTVToggle] = useState(false);
    const [laptopsToggle, setLaptopToggle] = useState(false);
    const [fitnessAndLifestyleToggle, setFitnessAndLifestyleToggle] = useState(false);
    const [homeToggle, setHomeToggle] = useState(false);
    const [audioToggle, setAudioToggle] = useState(false);
    const [accessoriesToggle, setAccessoriesToggle] = useState(false);


    useEffect( ()=> {
        try {
            if(window.location.pathname==='/miPhones'){
                return setMIPhoneToggle(!miPhonesToggle);
            }
            if(window.location.pathname==='/redmiPhones'){
                return setRedmiPhoneToggle(true);
            }
            if(window.location.pathname==='/tv'){
                return setTVToggle(true);
            }
            if(window.location.pathname==='/laptops'){
                return setLaptopToggle(true);
            }
            if(window.location.pathname==='/fitness&lifestyles'){
                return setFitnessAndLifestyleToggle(true);
            }
            if(window.location.pathname==='/home'){
                return setHomeToggle(true);
            }
            if(window.location.pathname==='/audio'){
                return setAudioToggle(true);
            }
            if(window.location.pathname==='/accessories'){
                return setAccessoriesToggle(true);
            }
        } catch (error) {
            console.log(error)
        }


    }, [])

    


  return (
    <div className='NavOptions'>
 
        {
            miPhonesToggle ? 
            miPhones.map((item, index) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index}/>
            )):null
        }
        {
            redmiPhonesToggle ? 
            redmiPhones.map((item, index) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
            )):null
        }
        {
            
            tvToggle ? 
            tv.map((item, index) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
            ))
            :null
        }
        {
            laptopsToggle ? 
            laptops.map((item, index) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
            )):null
        }
        {
            fitnessAndLifestyleToggle ? 
            fitnessAndLifeStyle.map((item, index) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
            )):null
        }
        {
            homeToggle ? 
            home.map((item, index) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
            )):null
        }
        {
            audioToggle ? 
            audio.map((item, index) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
            )):null
        }
        {
            accessoriesToggle ? 
            accessories.map((item, index) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
            )):null
        }

      
    </div>
  )
}

export default NavOptions
