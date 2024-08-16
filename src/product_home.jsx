import "./product_home.css";
import arrow_down from "./images/arrow-down.png";
import biriyani from "./images/food_pics/biriyani.jpg";

const Product_home = () => {
  return (
    <>
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
        <div id="filter_list">
          <ul>
            <li>
              <p>RATING</p>
            </li>
            <li>
              <p>QUALITY</p>
            </li>
            <li>
              <p>OFFER</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="food_container">
            <li>
              <List image={biriyani} />
            </li>
            <li>
              <List image={biriyani} />
            </li>
            <li>
              <List image={biriyani} />
            </li>
            <li>
              <List image={biriyani} />
            </li>
            <li>
              <List image={biriyani} />
            </li>
            <li>
              <List image={biriyani} />
            </li>
            <li>
              <List image={biriyani} />
            </li>
            <li>
              <List image={biriyani} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Product_home;

const List = (props) => {
  return (
    <div className="food_detail">
      <img src={props.image} id="biriyani" style={{ borderRadius: "10px" }} />
      <p>hello</p>
      <p>buy</p>
    </div>
  );
};
