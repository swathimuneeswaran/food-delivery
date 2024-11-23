import React from "react";
import food_1 from "../../assets/images/food_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faLocationDot,
  faMagnifyingGlass,
  faBagShopping,
  faHouseChimneyWindow,
  faBowlFood,
  faMoneyCheckDollar,
  faStar,
  faArrowRight,
  faTag,
  faMapMarkerAlt,
  faStopwatch,
  
} from "@fortawesome/free-solid-svg-icons";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons"; 
import "../../styles/Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import food1 from "../../assets/images/food1.jpeg";
import food2 from "../../assets/images/food2.jpeg";
import food3 from "../../assets/images/food3.jpeg";
import food4 from "../../assets/images/food4.jpeg";
import food5 from "../../assets/images/food5.jpeg";
import food6 from "../../assets/images/food6.jpeg";
import food7 from "../../assets/images/food7.jpeg";
import food8 from "../../assets/images/food8.jpeg";
import food9 from "../../assets/images/food9.jpeg";
import food10 from "../../assets/images/food10.png";
import food12 from "../../assets/images/food12.png";
import logo2 from "../../assets/images/logo2.avif";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.avif";
import logo5 from "../../assets/images/logo5.avif";
import logo6 from "../../assets/images/logo6.png";
import logo8 from "../../assets/images/logo8.jpg";
import logo9 from "../../assets/images/logo9.avif";
import logo from "../../assets/images/logo.png";
import mobile_image from "../../assets/images/mobile_image.jpg"
import Footer from "../../components/Footer/Footer";
const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsive_circle = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const items = [
    { img: food1, title: "Greys Vage", area: "Area", amount: "$4.00" },
    { img: food2, title: "Greys Vage", area: "Area", amount: "$1.00" },
    { img: food3, title: "Greys Vage", area: "Area", amount: "$2.00" },
    { img: food4, title: "Greys Vage", area: "Area", amount: "$4.00" },
    { img: food5, title: "Greys Vage", area: "Area", amount: "$4.00" },
    { img: food6, title: "Greys Vage", area: "Area", amount: "$4.00" },
  ];

  const restaurants = [
    {
      img: food1,
      discount: "10% off",
      logo: logo2,
      name: "Foodworld",
      rating: 48,
      dish: "Greys Vage",
      status: "Opens Tomorrow",
    },
    {
      img: food2,
      discount: "15% off",
      logo: logo3,
      name: "Foodhub",
      rating: 35,
      dish: "Spicy Delight",
      status: "8 Days Remaining",
    },
    {
      img: food3,
      discount: "25% off",
      logo: logo4,
      name: "Eatopia",
      rating: 60,
      dish: "Tangy Treat",
      status: "7 Days Remaining",
    },
    {
      img: food4,
      discount: "20% off",
      logo: logo5,
      name: "Taste Haven",
      rating: 50,
      dish: "Sizzler Special",
      status: "8 Days Remaining",
    },
    {
      img: food5,
      discount: "20% off",
      logo: logo6,
      name: "Taste Haven",
      rating: 50,
      dish: "Sizzler Special",
      status: "8 Days Remaining",
    },
    {
      img: food6,
      discount: "20% off",
      logo: logo,
      name: "Taste Haven",
      rating: 50,
      dish: "Sizzler Special",
      status: "8 Days Remaining",
    },
    {
      img: food7,
      discount: "20% off",
      logo: logo8,
      name: "Taste Haven",
      rating: 50,
      dish: "Sizzler Special",
      status: "8 Days Remaining",
    },
    {
      img: food8,
      discount: "20% off",
      logo: logo9,
      name: "Taste Haven",
      rating: 50,
      dish: "Sizzler Special",
      status: "8 Days Remaining",
    },
    // Add more restaurants here
  ];

  const CustomLeftArrow = ({ onClick }) => (
    <button className="custom-arrow left-arrow" onClick={onClick}>
      &#10094;
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button className="custom-arrow right-arrow" onClick={onClick}>
      &#10095;
    </button>
  );

  return (
    <>
      <section id="banner">
        <div className="banner-content">
          <div className="text-section">
            <h1>Are You Starving?</h1>
            <h3>
              Your favorite food is just a click away! Enjoy amazing meals from
              local restaurants.
            </h3>
            <div className="pickup-box">
              <div className="button-group">
                <button
                  style={{
                    color: "#FF5349",
                    fontWeight: "bold",
                    backgroundColor: "#fbafaa",
                  }}
                >
                  <FontAwesomeIcon icon={faTruck} /> Delivery
                </button>
                <button>
                  <FontAwesomeIcon icon={faBagShopping} /> Pickup
                </button>
              </div>
              <div className="address-group">
                <div className="input-wrapper">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="input-icon"
                  />
                  <input type="text" placeholder="Enter Your Address" />
                </div>
                <button>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="navbar-icon1"
                  />{" "}
                  Find Food
                </button>
              </div>
            </div>
          </div>
          <div className="image-section">
            <img src={food_1} alt="Food" />
          </div>
        </div>
      </section>

      <section id="products">
        <div>
          <div>
            <img src={food1} />
            <button class="discount-button">
              <span class="large-number">15</span>
              <span class="text-small">
                % <br></br>Off
              </span>
            </button>
            <h4>Greys Vage</h4>
            <button className="days">6 Days Remaining</button>
          </div>
          <div>
            <img src={food2} />
            <button class="discount-button">
              <span class="large-number">10</span>
              <span class="text-small">
                %<br></br> Off
              </span>
            </button>
            <h4>Greys Vage</h4>
            <button className="days">8 Days Remaining</button>
          </div>
          <div>
            <img src={food3} />
            <button class="discount-button">
              <span class="large-number">25</span>
              <span class="text-small">
                %<br></br> Off
              </span>
            </button>
            <h4>Greys Vage</h4>
            <button className="days">7 Days Remaining</button>
          </div>
          <div>
            <img src={food4} />
            <button class="discount-button">
              <span class="large-number">20</span>
              <span class="text-small">
                % <br></br>Off
              </span>
            </button>
            <h4>Greys Vage</h4>
            <button className="days">8 Days Remaining</button>
          </div>
        </div>
      </section>

      <section id="how_it_works">
        <div className="how-it-works-container">
          <h1 className="how-it-works-heading">How does it work</h1>
          <div className="how-it-works-cards">
            <div className="how-it-works-card">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="how-it-works-icon"
              />
              <h4 className="how-it-works-card-heading">Select Location</h4>
              <p className="how-it-works-card-text">
                Choose the location <br></br>where your food will be delivered
              </p>
            </div>
            <div className="how-it-works-card">
              <FontAwesomeIcon
                icon={faBowlFood}
                className="how-it-works-icon"
              />
              <h4 className="how-it-works-card-heading">Select Food</h4>
              <p className="how-it-works-card-text">
                Choose your favorite <br></br>food from the menu
              </p>
            </div>
            <div className="how-it-works-card">
              <FontAwesomeIcon
                icon={faMoneyCheckDollar}
                className="how-it-works-icon"
              />
              <h4 className="how-it-works-card-heading">Make Payment</h4>
              <p className="how-it-works-card-text">
                Secure payment <br></br>options for your order
              </p>
            </div>
            <div className="how-it-works-card">
              <FontAwesomeIcon
                icon={faHouseChimneyWindow}
                className="how-it-works-icon"
              />
              <h4 className="how-it-works-card-heading">Delivery</h4>
              <p className="how-it-works-card-text">
                Your food will<br></br> be delivered to your door
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="popular-items">
        <div className="popular-items-container">
          <h1 className="popular-items-heading">Popular Items</h1>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            containerClass="popular-items-carousel"
          >
            {items.map((item, index) => (
              <div key={index} className="popular-item-card">
                <img
                  src={item.img}
                  alt={item.title}
                  className="popular-item-image"
                />
                <div className="popular-item-content">
                  <h4 className="popular-item-title">{item.title}</h4>
                  <h4 className="popular-item-area">
                    {" "}
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="popular-icon"
                    />
                    {item.area}
                  </h4>
                  <h4 className="popular-item-amount">{item.amount}</h4>
                  <button className="popular-item-days">Order Now</button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <section id="restaurants">
        <div className="restaurant-container">
          <h1 className="restaurant-title">Featured Restaurants</h1>
          <div className="restaurant-grid">
            {restaurants.map((restaurant, index) => (
              <div className="restaurant-card" key={index}>
                <img
                  src={restaurant.img}
                  alt={restaurant.dish}
                  className="restaurant-image"
                />
                {/* <button className="restaurant-discount">{restaurant.discount}</button> */}
                <div className="restaurant-info">
                  <img
                    src={restaurant.logo}
                    alt="Logo"
                    className="restaurant-logo"
                  />
                  <div>
                    <h1 className="restaurant-name">{restaurant.name}</h1>
                    <p
                      className="restaurant-rating"
                      style={{ color: "rgba(246, 174, 14, 255)" }}
                    >
                      <FontAwesomeIcon icon={faStar} /> {restaurant.rating}
                    </p>
                  </div>
                </div>
                {/* <h4 className="restaurant-dish">{restaurant.dish}</h4> */}
                <button className="restaurant-status">
                  {restaurant.status}
                </button>
              </div>
            ))}
          </div>
          <div className="button-view">
            <button>View All</button>
          </div>
        </div>
      </section>

      <section id="search-by-food">
        <div className="search-by-food-container">
          <h1 className="search-by-food-title">Search by Food</h1>
          <Carousel
            responsive={responsive_circle}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 0.5s"
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="carousel-item"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {restaurants.map((food, index) => (
              <div className="food-item" key={index}>
                <img src={food.img} alt={food.name} className="food-image" />
                <h5 className="food-name">{food.name}</h5>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <div className="install-app-section">
      {/* Feature Icons */}
      <div className="features">
        <div className="feature-item">
          <div className="icon">
            <FontAwesomeIcon icon={faTag} size="2x" color="#ff9000" />
          </div>
          <p>Daily Discounts</p>
        </div>
        <div className="feature-item">
          <div className="icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="#ff9000" />
          </div>
          <p>Live Tracing</p>
        </div>
        <div className="feature-item">
          <div className="icon">
            <FontAwesomeIcon icon={faStopwatch} size="2x" color="#ff9000" />
          </div>
          <p>Quick Delivery</p>
        </div>
      </div>

      {/* App Installation Section */}
      <div className="install-container">
        {/* Mobile Preview */}
        <div className="mobile-preview">
          <img
            src={mobile_image}
            alt="Mobile Preview"
            className="mobile-image"
          />
        </div>

        {/* App Info */}
        <div className="app-info">
          <h2>Install the app</h2>
          <p>
            It's never been easier to order food.<br></br> Look for the finest discounts
            and you'll be lost<br></br> in a world of delectable food.
          </p>
          <div className="download-buttons">
            <button className="google-play">
              <FontAwesomeIcon icon={faGooglePlay} size="lg" />
              Google Play
            </button>
            <button className="app-store">
              <FontAwesomeIcon icon={faApple} size="lg" />
              App Store
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* section for installing tha app */}

      <section id="special-menu">
        <div className="special-menu-container">
          {/* First Box - Content Left, Image Right */}
          <div className="special-menu-box">
            <div className="special-menu-content">
              <h1>
                Best Deals <span>Crispy Sandwiches</span>
              </h1>
              <p>
                Enjoy the large size of sandwiches. Complete perfect slice of
                sandwiches.
              </p>
              <button className="order-button">
                Proceed to Order
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="special-menu-image">
              <img src={food1} alt="Crispy Sandwich" />
            </div>
          </div>

          {/* Second Box - Image Left, Content Right */}
          <div className="special-menu-box reverse-layout">
            <div className="special-menu-image">
              <img src={food2} alt="Fried Chicken" />
            </div>
            <div className="special-menu-content">
              <h1>
                Celebrate Parties with <span>Fried Chicken</span>
              </h1>
              <p>
                Get the best fried chicken smeared with a lip-smacking lemon
                chili flavor. Check out best deals for fried chicken.
              </p>
              <button className="order-button">
                Proceed to Order
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

          <div className="special-menu-box">
            <div className="special-menu-content">
              <h1>
                Best Deals <span>Crispy Sandwiches</span>
              </h1>
              <p>
                Enjoy the large size of sandwiches. Complete perfect slice of
                sandwiches.
              </p>
              <button className="order-button">
                Proceed to Order
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="special-menu-image">
              <img src={food8} alt="Crispy Sandwich" />
            </div>
          </div>
        </div>
      </section>

      <section id="ready-to-order">
        {/* <div className="container-order"> */}
        <img src={food1} alt="Food Right" className="image-right" />
        {/* <img src={food3} alt="Food Left" className="image-left" /> */}
        <h2>
          Are you ready to order <br></br>with the best deals?
        </h2>
        <button className="order-button">
          Proceed to Order
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        {/* </div> */}
      </section>

      <Footer />
    </>
  );
};

export default Home;
