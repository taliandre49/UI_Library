import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../src/styles/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Accordian from './accordian';
import ContactForm from './components/ContactForm';
import Success from './components/SuccessSubmit';
import DashBoard from './components/DashBoard';
import Carousel from './components/Carousel';
import Car1 from './assets/imgs_Carousel/car-1.jpg';
import Car2 from './assets/imgs_Carousel/car-2.jpg';
import Car3 from './assets/imgs_Carousel/car-3.jpg';
import Car4 from './assets/imgs_Carousel/car-4.jpg';
import Car5 from './assets/imgs_Carousel/car-5.jpg';
import HamburgerMenu from './components/hamburgerMenu';
import DropDown from './components/DropDown';
import '../src/styles/Accordian.css';
// import styles from '../src/styles/App.module.css';

function Home() {
  return (
    <div>
        <h1>Hi this is the home of my component Libraries.</h1>
        <p> Explore bellow</p>
    </div>
  );

}


function App() {
  const [isSuccess, setSuccess] = useState(false)

  function Updatesuccess() {
    setSuccess(true)
  }

  const IMAGES = [{url: Car1, alt: "Image of Car1"}, {url: Car2, alt: "Image of Car2"},{url: Car3, alt: "Image of Car3"}, {url: Car4, alt: "Image of Car4"}, {url: Car5, alt: "Image of Car5"}]
  const LINKS = [{title: 'Page 1', url: "/page1"},{title: 'Page 2', url: "/page2"},{title: "Page 3", url: "/page3"}, {title: "Page 4", url: "/page4"}, {title: "Page 5", url: "/page5"}]
  const OPTIONS = ['apple', 'bannana', 'orange', 'lime', 'peach']
  return (
    <>
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accordian" element={<div className='centerbody'><Accordian /> </div>} />
            <Route path="/contact" element={<><ContactForm onSuccess = {Updatesuccess} /> {isSuccess && <Success/>}</>} />
            <Route path = "/dashboard" element = {<DashBoard />} ></Route>
            <Route path = "/carousel" element = { <div style = {{maxWidth: '800px', width: '100%',  aspectRatio: '16 / 9' , margin: '0 auto',}}><Carousel images = {IMAGES}/> </div>}></Route>
            <Route path = "/hamburgerMenu" element = {<HamburgerMenu Links = {LINKS}/>}> </Route>
            <Route path = "/dropDown" element = {<DropDown options = {OPTIONS} ismultiple = {true}/>}> </Route>
          </Routes>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/accordian">Accordian</Link>
              </li>
              <li>
                 <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to = "/dashboard"> Dashboard</Link>
              </li>
              <li>
                <Link to = "/carousel"> Carousel</Link>
              </li>
              <li>
                <Link to = "/hamburgerMenu">
                Hamburger Menu
                </Link>
              </li>
              <li>
                <Link to = "/dropDown"> DrownDown (multi & single)</Link>
              </li>
            </ul>
          </nav>
       </div>
    </>
  )
}


export default App
