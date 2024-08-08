import "../ComponentCSS/main.css";
import homeIcon from "../icons_assets/restauranfood.jpg";
import lemonCake from "../icons_assets/lemon dessert.jpg";
import greekSalad from "../icons_assets/greek salad.jpg";
import bruschetta from "../icons_assets/bruchetta.svg";
import Monica from "../icons_assets/Monica.jpg";
import Rachel from "../icons_assets/Rachel.jpg";
import Joey from "../icons_assets/Joey.jpg";
import food1 from "../icons_assets/Mario and Adrian A.jpg";
import food2 from "../icons_assets/restaurant.jpg";

import { Link } from "react-router-dom";

function Main() {
  return (
    <main>
      <ul className="MainList">
        <div className="Intro">
          <ul className="Intro_List">
            <div className="Into_Text">
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/booking" className="Button">
                Reserve a Table
              </Link>
            </div>
            <div className="Into_Image">
              <img className="Into_Image" alt="Home Logo" src={homeIcon}></img>
            </div>
          </ul>
        </div>

        <div className="Specials">
          <div className="Specials_Header">
            <h1>Specials</h1>
            <h4 className="Button">Online Menu</h4>
          </div>
          <ul className="Specials_Modules">
            <div className="Special_Module">
              <img
                className="Greek_Salad_Image"
                alt="Greek Salad"
                src={greekSalad}
              ></img>
              <div className="Specials_Subheader">
                <h6>Greek Salad</h6>
                <h6 className="price">$12.99</h6>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <h6>order a delivery</h6>
            </div>

            <div className="Special_Module">
              <img
                className="Greek_Salad_Image"
                alt="bruschetta"
                src={bruschetta}
              ></img>
              <div className="Specials_Subheader">
                <h6>Bruschetta</h6>
                <h6 className="price">$5.99</h6>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <h6>order a delivery</h6>
            </div>

            <div className="Special_Module">
              <img
                className="Greek_Salad_Image"
                alt="lemonCake"
                src={lemonCake}
              ></img>
              <div className="Specials_Subheader">
                <h6>Lemon Dessert</h6>
                <h6 className="price">$5.00</h6>
              </div>
              <p>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <h6>order a delivery</h6>
            </div>
          </ul>
        </div>
        <div className="Testimonial_Section">
          <h2>Testimonials</h2>
          <ul className="Testimonials">
            <div className="Testimonial">
              <p>4.6</p>
              <div className="customer_info">
                <img
                  alt="Monica"
                  src={Monica}
                  className="Testimonial_Image"
                ></img>
                <h5>Monica Bing</h5>
              </div>
              <p>
                Lorem sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua
              </p>
            </div>
            <div className="Testimonial">
              <p>4.6</p>
              <div className="customer_info">
                <img
                  alt="Rachel"
                  src={Rachel}
                  className="Testimonial_Image"
                ></img>
                <h5>Rachel Green</h5>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="Testimonial">
              <p>4.6</p>
              <div className="customer_info">
                <img alt="Joey" src={Joey} className="Testimonial_Image"></img>
                <h5>Joey Tribiani</h5>
              </div>
              <p>Llabore et dolore magna aliqua</p>
            </div>
            <div className="Testimonial">
              <p>4.6</p>
              <div className="customer_info">
                <img
                  alt="Monica"
                  src={Monica}
                  className="Testimonial_Image"
                ></img>
                <h5>Monica Bing</h5>
              </div>
              <p>
                Lorem sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua
              </p>
            </div>
          </ul>
        </div>
        <div className="About">
          <div className="About_Info">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="About_Photos">
            <img alt="food" className="food1" src={food2}></img>
            <img alt="food" className="food2" src={food1}></img>
          </div>
        </div>
      </ul>
    </main>
  );
}

export default Main;
