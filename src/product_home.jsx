import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./product_home.css";
import arrow_down from "./images/arrow-down.png";
import biriyani from "./images/food_pics/biriyani.jpg";
import curry from './images/food_pics/delicious-pakistani-dish-high-angle.jpg'
import swarma from './images/food_pics/side-view-doner-with-grilled-chicken-greens-lettuce-tomato-french-fries-table.jpg'
import fish from './images/food_pics/fried-fish-with-vegetables-plate-3.jpg'
import prawn from './images/food_pics/close-up-tasty-mussels-serving.jpg'
import mutton from './images/food_pics/delicious-goulash-ready-dinner.jpg'
import rice from './images/food_pics/sausage-fried-rice-with-tomatoes-carrots-shiitake-mushrooms-plate.jpg'
import fish1 from './images/food_pics/top-view-delicious-fish-meal-tray.jpg'
import Animation from './animation';

const Product_Home = () => {
  const [message, setMessage] = useState('');
  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbw71a8-6XJn9ODqsUmwmWRXB1VOmHxrs5p7nr2d5P3eNesRpjUAi4Q3gY6lQHEueIXumQ/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    
    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form),
      });
      
      setMessage("Thank You For Subscribing!");
      
      setTimeout(() => {
        setMessage("");
      }, 5000);
      
      form.reset();
    } catch (error) {
      console.error('Error!', error.message);
    }
  };
  return (
    <>
      <Animation />
      <div className="index">
        <p id="result">Result Nearby</p>
        <div className="result">
          <ul>
            <li>
              <div id="filter_field">
                <p id="filter_box">FILTER</p>
                <img src={arrow_down} id="filter_arrow_down" />
              </div>
            </li>
            <li>
              Sort BY <img src={arrow_down} />
            </li>
            <li>
              Veg,Non-Veg <img src={arrow_down} />
            </li>
            <li>
              Halal <img src={arrow_down} />
            </li>
            <li>
              Distance <img src={arrow_down} />
            </li>
          </ul>
        </div>

        <div>
          <ul className="food_container">
            <li>
              <List image={biriyani} name="Biriyani" price="$350" />
            </li>
            <li>
              <List image={curry} name="Country Chicken Curry" price="$200" />
            </li>
            <li>
              <List image={swarma} name="Chicken Shawarma" price="$150" />
            </li>
            <li>
              <List image={fish} name="Fish Fry" price="$160" />
            </li>
            <li>
              <List image={prawn} name="Prawn Fry" price="$200" />
            </li>
            <li>
              <List image={mutton} name="Mutton Curry" price="$250" />
            </li>
            <li>
              <List image={rice} name="Chicken Rice" price="$230" />
            </li>
            <li>
              <List image={fish1} name="Fish Curry" price="$215" />
            </li>
          </ul>
        </div>
        <p id='recepie-text'>Make Your day with us</p>
        <div className='footer'>
        <div style={{ maxWidth: '100%', overflow: 'hidden', color: 'red', width: '400px', height: '300px',paddingTop:'30px',marginLeft:'40px',borderRadius:'20px' }}>
      <div id="embed-ded-map-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
        <iframe
          style={{ height: '100%', width: '100%', border: '0' }}
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=brookfield&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          title="Google Map"
        />
      </div>
      <a
        className="googlemaps-made"
        rel="nofollow"
        href="https://www.bootstrapskins.com/themes"
        id="make-map-infor-mation"
      >
        premium bootstrap themes
      </a>
      <style>
        {`
          #embed-ded-map-canvas img {
            max-width: none !important;
            background: none !important;
            font-size: inherit;
            font-weight: inherit;
          }
        `}
      </style>
    </div>
    <div>
      <p>FeedBack Form</p>
      <form name="Email">
    <input type='text' placeholder='Review'></input><br/>
    <button type='submit'>SUBMIT</button>
    </form>
    </div>
    <p id='address-text'><span style={{fontSize:"22px"}}>Address :</span> 
      <br/><br/>
      Store No : 261,BrookField Mall,Ukkadam,Coimbatore.
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p style={{fontSize:"22px"}}>CONTACTS</p>
      +91 9443092162<br></br>
      arab_cuisine@gmail.com



    </p>
      </div>
      
    </div >
    </>
  );
};
export default Product_Home;

const List = (props) => {
  return (
    <div className="food_detail">
      <img src={props.image} id="biriyani" style={{ borderRadius: "10px" }} />
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
};
