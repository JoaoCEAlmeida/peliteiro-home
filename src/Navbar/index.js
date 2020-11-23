import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import "./index.css";
const Navbar = () => {
  const [show, setHandleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else setHandleShow(false);
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <Link to="banner" smooth duration={1000}>
        <h4>Casa dos Peliteiros</h4>
        {/*
        <img
          className="nav__logo"
          src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
          alt="Netflix Logo"
        />
        */}
      </Link>
      <div className="nav__reservations">
        <a
          href="https://www.booking.com/hotel/pt/casa-dos-paliteiros.pt-pt.html"
          target="_blank"
          rel="noreferrer"
        >
          <h3>Booking</h3>
        </a>
        <a
          href="https://www.airbnb.pt/rooms/1970323?source_impression_id=p3_1605818669_PjdJXNbn1Mp%2BJ%2B93&guests=1&adults=1"
          target="_blank"
          rel="noreferrer"
        >
          <h3>Airbnb</h3>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
