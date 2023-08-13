import './App.css';
import Navbar from './Components/Navbar';
import PreNavbar from './Components/PreNavbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Slider from './Components/Slider';
import Offers from './Components/Offers'
import Heading from './Components/Heading'
import StarProduct from './Components/StarProduct'
import HotAccessoriesMenu from './Components/HotAccessoriesMenu';
import HotAccessories from './Components/HotAccessories.js';
import ProductReviews from './Components/ProductReviews.js'
import Videos from './Components/Videos.js'
import Banner from './Components/Banner.js'
import Footer from './Components/Footer.js'
import NavOptions from './Components/NavOptions.js'
import data from "./data/data.json"




function App() {


  return (
    <Router>

    <PreNavbar />
    
    <Navbar/>

    <NavOptions  miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptops={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />


    <Slider start = {data.banner.start} />

    <Offers offers = {data.offer} />

    <Heading text = "STAR PRODUCTS" />

    <StarProduct starProduct = {data.starProduct} />

    <Heading text = "HOT ACCESSORIES" />

    <HotAccessoriesMenu />

      <Routes>
  
      <Route exact path='/music'

      element = {<HotAccessories music = {data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music} />}

      />

      <Route exact path='/smartDevice'

      element = {<HotAccessories smartDevice = {data.hotAccessories.smartDevice} smartDeviceCover = {data.hotAccessoriesCover.smartDevice} />}

      />

      <Route exact path='/home'

        element = {<HotAccessories home = {data.hotAccessories.home} homeCover = {data.hotAccessoriesCover.home} />}

      />

      <Route exact path='/lifeStyle'

        element = {<HotAccessories lifeStyle = {data.hotAccessories.lifeStyle} lifeStyleCover = {data.hotAccessoriesCover.lifeStyle} />}

      />

      <Route exact path='/mobileAccessories'

      element = {<HotAccessories mobileAccessories = {data.hotAccessories.mobileAccessories} mobileAccessoriesCover = {data.hotAccessoriesCover.mobileAccessories} />}

      />

      </Routes>

    <Heading text = "PRODUCT REVIEWS" />

    <ProductReviews productReviews={data.productReviews}/>


    <Heading text = "VIDEOS" />

    <Videos videos={data.videos}/>

    <Heading text = "IN THE PRESS" />

    <Banner banner = {data.banner}/>

    <Footer />
    

    </Router>
  );
}

export default App;
