import { Block, ForkLeft, ShoppingCart, Search, ContactMail } from '@mui/icons-material';
import React from 'react';
import './Bottlewater.css';
import profpic from '../assets/carol.jpg';
import profepic from '../assets/recyc.jpg'
import rev1 from '../assets/pic-1.png'
import rev2 from '../assets/pic-2.png'
import rev3 from '../assets/pic-3.png' 
import Star from '@mui/icons-material/Star';
import StarHalf from '@mui/icons-material/StarHalf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Bottlewater = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className="bottlewater-container">
        <p className="bottlewater-title">GulpMoore </p>
        <nav className="container">
          <a href="#home">Home</a>
          <a href="#features" >Features</a>
          <a href="#products">Products</a>
          <a href="#categories">Services</a>
          <a href="#reviews">Review</a>
          <a href="#blogs">Blogs</a>
        </nav>
        <div className="icons-container">
          <div className="icon-box">
            <a href="#search" className="icon">
              <Search />
            </a>
          </div>
          <div className="icon-box">
            <a href="#cart" className="icon">
              <ShoppingCart />
            </a>
          </div>

          <div className="icon-box">
            <a href="#contact" className="icon">
              <ContactMail />
            </a>
          </div>

        </div>
      </div>
      <div className="bg-img">

        <p className="text">One <span style={{ color: 'burlywood' }}>drop</span> at a Time</p>
        <p className="txt"> Our mission is to ensure sustainable access to clean and safe drinking water for every community, <br></br> while promoting responsible water management practices</p>
        <button className="btn">Shop Now</button>

      </div>


      <div className="fit"> Our <span className="features">Services</span></div>

      <div className="card">
        <img className="opolo" src={profpic} alt="profilepic"></img>
        <h2 className="class-title">Recycling </h2>
        <p className="text-nicard">Lorem ipsum dolor sit amet! </p>
        <button className="card-button">Read More</button>

      </div>

      <div className="card2">
        <img className="opolo" src={profepic} alt="profilepic"></img>
        <h2 className="class-title">Filtration</h2>
        <p className="text-nicard">Lorem ipsum dolor sit amet! </p>
        <button className="card-button">Read More</button>

      </div>

      <div className="card3">
        <img className="opolo" src={profpic} alt="profilepic"></img>
        <h2 className="class-title">Branding</h2>
        <p className="text-nicard">Lorem ipsum dolor sit amet! </p>
        <button className="card-button">Read More</button>

      </div>

      <div className="fit"> Our <span className="features">Reviews</span></div>

      <div className="review-1">
        <img className="opolo2" src={rev1} alt="profilepic"></img>
        <h2 className="class-title"></h2>
        <p className="text-nicard">Great water at affordable price<br></br>I love the reusable bottle options <br></br> The sparkling water is my favorite </p>
        <h3 className="rlo">John Doe</h3>

        <div className="rating">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>



      </div>
      <div className="review-3">
        <img className="opolo2" src={rev2} alt="profilepic"></img>
        <h2 className="class-title"></h2>
        <p className="text-nicard">Convenient service with quality water,<br></br> love the ecco-friendly approach <br></br>The water is always fresh. </p>
        <h3 className="rlo">Ariana Sheffield</h3>

        <div className="rating">
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>

      <div className="review-2">
        <img className="opolo2" src={rev3} alt="profilepic"></img>
        <h2 className="class-title"></h2>
        <p className="text-nicard">Pure refreshing water delivered to you<br></br>the water is always fresh. <br></br> This water keeps me hydrated perfectly </p>
        <h3 className="rlo">Justin Case</h3>

        <div className="rating">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>
      </div>
<div className="footie">

      <footer className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <FontAwesomeIcon icon={['fas', 'faUser']} />
          <h3>
            GulpMoore
            <i>
              <FontAwesomeIcon icon={faShoppingBasket} />
            </i>
          </h3>
          <p>
            Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Natus,
            Laudantium?
          </p>
          <div className="share">
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faFacebookF} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
              </i>
            </a>
          </div>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +234 90 665 79652
          </a>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +(1) 333-423-567
          </a>
          <a href="/" className="links" id="emailLink">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            feluopi@gmail.com
          </a>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </i>
            Lagos, Nigeria
          </a>
        </div>
        <div className="box">
          <h3>quick info</h3>
          <a href="#home" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            home
          </a>
          <a href="#features" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            features
          </a>
          <a href="#products" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            products
          </a>
          <a href="#categories" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            categories
          </a>
          <a href="#reviews" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            reviews
          </a>
          <a href="#blogs" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            blogs
          </a>
        </div>
      </div>
      <div className="credits">
        <p>
          Created By
          {' '}
          <span>Mr. II Tolu</span>
          {' '}
          | All Rights Reserved
        </p>
      </div>
    </footer>
  
    </div>
    </>
  );
};



export default Bottlewater;