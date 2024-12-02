import { Block, ForkLeft, ShoppingCart, Search, ContactMail } from '@mui/icons-material';
import React from 'react';
import './Restaurant.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
import profany from '../assets/feature1.png'
import profbny from '../assets/feature1.png'
import profcny from '../assets/feature3.png'
import profdny from '../assets/product-1.png'
import profeny from '../assets/product-2.png'
import proffny from '../assets/product-3.png'
import prony from '../assets/product-4.png'
import prny from '../assets/product-5.png'
import poffny from '../assets/product-6.png'
import polo from '../assets/product-7.png'
import shirt from '../assets/product-8.png'
import shirt1 from '../assets/cat-1.png'
import shirt2 from '../assets/cat-2.png'
import shirt3 from '../assets/cat-3.png'
import shirt4 from '../assets/cat-4.png'
import perls from '../assets/pic-1.png'
import perl from '../assets/pic-2.png'
import perlos from '../assets/pic-3.png'
import lebe from '../assets/blog-1.jpg'
import miko from '../assets/blog-2.jpg'
import nwoko from '../assets/blog-3.jpg'
import Star from '@mui/icons-material/Star';
import StarHalf from '@mui/icons-material/StarHalf';

const Restaurant = () => {
  return (
    <>
      <div className="bottlewater-container">
        <p className="bottlewater-title">Groco </p>
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

      <div className="bg-img2">

        <p className="text">Fresh and <span style={{ color: 'burlywood' }}>Organic</span> Foods</p>
        <p className="txt"> Our mission is to ensure sustainable access to clean and safe consumables for every community, <br></br> while promoting responsible food management practices</p>
        <button className="btn">Shop Now</button>

      </div>

      <div className="fit2"> Our <span className="features1">Features</span></div>

      <div className="card">
        <img className="opolo" src={profany} alt="profilepic"></img>
        <h2 className="class-title">Fresh Organic </h2>
        <p className="text-nicard">Lorem ipsum dolor sit amet! </p>
        <button className="card-button">Read More</button>

      </div>

      <div className="card2">
        <img className="opolo" src={profbny} alt="profilepic"></img>
        <h2 className="class-title">Free Delivery </h2>
        <p className="text-nicard">Lorem ipsum dolor sit amet! </p>
        <button className="card-button">Read More</button>

      </div>

      <div className="card">
        <img className="opolo" src={profcny} alt="profilepic"></img>
        <h2 className="class-title">Easy Payment </h2>
        <p className="text-nicard">Lorem ipsum dolor sit amet! </p>
        <button className="card-button">Read More</button>
      </div>
      <div className="fit"> Our <span className="featur">Products</span></div>
      <div className="cart">
        <img className="opolo" src={profdny} alt="profilepic"></img>
        <h2 className="class-title">Fresh Orange </h2>
        <p className="text-nicard">$4.99/ -- 10.99/- </p>

        <div className="ratings">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>

        <button className="card-button">Add to Cart</button>
      </div>


      <div className="cart">
        <img className="opolo" src={profeny} alt="profilepic"></img>
        <h2 className="class-title">Fresh Onion </h2>
        <p className="text-nicard">$2.99/ -- 10.99/- </p>

        <div className="ratings">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>

        <button className="card-button">Add to Cart</button>
      </div>

    
      <div className="cart"> 
        <img className="opolo" src={proffny} alt="profilepic"></img>
        <h2 className="class-title">Fresh Meat </h2>
        <p className="text-nicard">$7.99/ -- 10.99/- </p>

        <div className="ratings">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>

        <button className="card-button">Add to Cart</button>
      </div>

      <div className="cart"> 
        <img className="opolo" src={prony} alt="profilepic"></img>
        <h2 className="class-title">Fresh Cabage </h2>
        <p className="text-nicard">$3.99/ -- 10.99/- </p>

        <div className="ratings">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>

        <button className="card-button">Add to Cart</button>
      </div>

      <div className="cart"> 
        <img className="opolo" src={prny} alt="profilepic"></img>
        <h2 className="class-title">Sweet Potato </h2>
        <p className="text-nicard">$5.99/ -- 10.99/- </p>

        <div className="ratings">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>

        <button className="card-button">Add to Cart</button>
      </div>

      <div className="cart"> 
        <img className="opolo" src={poffny} alt="profilepic"></img>
        <h2 className="class-title">Fresh Avocado </h2>
        <p className="text-nicard">$6.99/ -- 10.99/- </p>

        <div className="ratings">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>

        <button className="card-button">Add to Cart</button>
      </div>

      <div className="cart"> 
        <img className="opolo" src={polo} alt="profilepic"></img>
        <h2 className="class-title">Fresh Carrot </h2>
        <p className="text-nicard">$6.99/ -- 10.99/- </p>

        <div className="ratings">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>

        <button className="card-button">Add to Cart</button>
      </div>

      <div className="cart"> 
        <img className="opolo" src={shirt} alt="profilepic"></img>
        <h2 className="class-title">Green Lemon </h2>
        <p className="text-nicard">$6.99/ -- 10.99/- </p>

        <div className="ratings">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>

        <button className="card-button">Add to Cart</button>
      </div>

      <div className="fit2"> Product <span className="features1">Categories</span></div>

      <div className="cart"> 
        <img className="opolo" src={shirt1} alt="profilepic"></img>
        <h2 className="class-title">Vegetables </h2>
        <p className="text-nicard">Upto 45% off </p>

        <button className="card-button">Shop Now</button>
      </div>

      <div className="cart"> 
        <img className="opolo" src={shirt2} alt="profilepic"></img>
        <h2 className="class-title">Fresh Fruits </h2>
        <p className="text-nicard">Upto 45% off </p>

        <button className="card-button">Shop Now</button>
      </div>

      <div className="cart"> 
        <img className="opolo" src={shirt3} alt="profilepic"></img>
        <h2 className="class-title">Diary Products </h2>
        <p className="text-nicard"> Upto 45% off </p>

        <button className="card-button">Shop Now</button>
      </div>

      <div className="cart"> 
        <img className="opolo" src={shirt4} alt="profilepic"></img>
        <h2 className="class-title">Fresh Meat </h2>
        <p className="text-nicard">Upto 45% off  </p>

        <button className="card-button">Shop Now</button>
      </div>

      <div className="fit"> Our <span className="featur">Reviews</span></div>

    
      <div className="stel1"> 
      <img className="opo" src={perls} alt="profilepic"></img>
      <p className="text-nicard">Great food at affordable price<br></br>I love the reusable plates options <br></br> The fruits is my favorite </p>
      <h3 className="rlo">John Doe</h3>
        <div className="ratings">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>
        </div>


        <div className="stel"> 
      <img className="opo" src={perl} alt="profilepic"></img>
      <p className="text-nicard">Great food at affordable price<br></br>I love the reusable plates options <br></br> The fruits is my favorite </p>
      <h3 className="rlo">Alisson jaros</h3>
        <div className="ratings">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>
        </div>

        <div className="stel"> 
      <img className="opo" src={perlos} alt="profilepic"></img>
      <p className="text-nicard">Great food at affordable price<br></br>I love the reusable plates options <br></br> The fruits is my favorite </p>
      <h3 className="rlo">Ben Dover </h3>
        <div className="ratings">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>
        </div>



        <section className="blogs" id="blogs">
        <div className="fit2"> Our <span className="features1">Blogs</span></div> 
      <div className="box-container">
        <div className="box">
        <img src={lebe} alt="profilepic"></img>
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st May, 2021
              </a>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.
            </p>
            <button className="card-button">Read More</button>
          </div>
        </div>
        <div className="box">
        <img src={miko} alt="profilepic"></img>
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st May, 2021
              </a>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.
            </p>
            <button className="card-button">Read More</button>
          </div>
        </div>
        <div className="box">
        <img src={nwoko} alt="profilepic"></img>
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st May, 2021
              </a>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.
            </p>
            <button className="card-button">Read More</button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Restaurant;