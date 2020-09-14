import React from "react";
import { Link } from "react-router-dom";
import Groom from "../../media/imgs/groom.jpg";
import Bride from "../../media/imgs/bride.jpg";

const Home = () => {
  return (
    <div className="marriage-details">
      <div className="groom-bride">
        <img src={Groom} className="person-img" alt="" />
        <h1 className="title">Daniel</h1>
        <p className="">The Groom</p>
      </div>
      <div className="save-the-date">
        <h1 className="title">Save The Date</h1>
        <div className="day">19th Dec 2020</div>
        <div className="address">24/52 Newark, NJ City Rajdahan, Usa</div>
        <Link to='/login' ><button className="rsvp-button">Login</button></Link>
        <Link to='/messages' ><button className="rsvp-button">All Messages</button></Link>

      </div>
      <div className="groom-bride">
        <img src={Bride} className="person-img" alt="" />
        <h1 className="title">Sheryl</h1>
        <p>The Groom</p>
      </div>
    </div>
  );
};

export default Home;
