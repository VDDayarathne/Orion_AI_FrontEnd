import React from 'react'
import './home.css';

//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import {  Button } from 'react-bootstrap';
import './home.css';
//import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom';
import './navbar.css';

const  Home = () => {

 
  return (
    <div style={{backgroundColor:"#000000"}}>
        <div class="head-section">
        <div className="dark-overlay">
        <img src="./Images/hero.png" alt="Hero" class="head-image"/>
        </div>
        <div className='navBar'>
      <nav>
  <ul>
    <li>
      <a href="home">Home</a>
    </li>
    <li>
      <a href="leaderboard">LeaderBoard</a>
    </li>
    <li>
      <a href="Tutorials">Tutorials</a>
    </li>
    <li>
      <a href="dashboard">Profile</a>
    </li>
  </ul>
</nav>
    </div>
        <div class="head-overlay">
            <h1 class="head-title">Orion AI</h1>
            <p class="head-text">A Magical Window to the Future</p>
            
        </div>
       </div>





       <Carousel className="custom-carousel" >
      <Carousel.Item>
        <div className="carousel-content" style={{"background-color":"#0C0B45"}}>
          <div className="carousel-text" style={{"color":"white"}}>
            <h3>A kingdom of</h3>
            <h1><b><i>Writers</i></b></h1>
            <p>Where you can master the art of text prompting. </p>
            <Link to='/writer'>
            <Button variant="light">Play Now</Button>
            </Link>
          </div>
          <div className="carousel-image">
            <img
              src="./Images/wri.png"
              alt="First slide"
              className="img-fluid"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-content" style={{"background-color":"#3A2104"}}>
          <div className="carousel-text" style={{"color":"white"}}>
            <h3>A kingdom of</h3>
            <h1><b><i>Artists</i></b></h1>
            <p>Learn to Generate eye catching images like pro.</p>
            <Link to='/artists'>
            <Button variant="light">Play Now</Button>
            </Link>
          </div>
          <div className="carousel-image">
            <img
              src="./Images/artist.png"
              alt="Second slide"
              className="img-fluid"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-content" style={{"background-color":"#38054A"}}>
          <div className="carousel-text" style={{"color":"white"}}>
            <h3>A kindom of</h3>
            <h1><b><i>Musicians</i></b></h1>
            <p>Learn to Generate incredible catching audio like pro.</p>
            <Link to='/musician'>
            <Button variant="light">Play Now</Button>
            </Link>
          </div>
          <div className="carousel-image">
            <img
              src="./Images/music.png"
              alt="Third slide"
              className="img-fluid"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-content" style={{"background-color":"#0D2108"}}>
          <div className="carousel-text" style={{"color":"white"}}>
            <h3>A Kingdom of</h3>
            <h1><b><i>Programmers</i></b></h1>
            <p>Learn to Generate code like pro.</p>
            <Link to='/coders'>
            <Button variant="light">Play Now</Button>
            </Link>
          </div>
          <div className="carousel-image">
            <img
              src="./Images/program.png"
              alt="Third slide"
              className="img-fluid" 
            />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>



      

    </div>
  )
}

export default Home