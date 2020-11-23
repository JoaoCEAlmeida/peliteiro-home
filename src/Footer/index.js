import React from "react";
import { Link } from "react-scroll";

import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { IconButton } from "@material-ui/core";

import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div id="go-top">
        <Link to="banner" smooth duration={1000}>
          <div className="footer__goToTop">
            <KeyboardArrowUpOutlinedIcon />
          </div>
        </Link>
      </div>
      <div className="footer_socialPages">
        <a
          href="https://www.facebook.com/casadospeliteiros/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </a>
        <a
          href="https://www.instagram.com/casa_dos_peliteiros/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </a>
      </div>

      <div className="footer__contactInfo">
        <div>
          <p>Address</p>
          <a
            href="https://www.google.com/maps/dir/41.4351946,-8.7811653/41.67508,-8.2471599/@41.4908325,-8.8457735,9.75z/data=!4m4!4m3!1m1!4e1!1m0"
            target="_blank"
            rel="noreferrer"
          >
            Vilarinho das Perdizes, 4845-045
          </a>
        </div>
        <div>
          <p>Contacts</p>
          <a class="phoneblock" href="tel:+351913108908">
            Phone: +351 913 108 908
          </a>
          <a class="emailblock" href="mailto:miguel@peliteiro.com">
            Email: miguel@peliteiro.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
