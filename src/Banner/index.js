import React from "react";
import Slider from "react-slick";
import { Link } from "react-scroll";

import "./index.css";

const items = [
  {
    thumbnail:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg",
  },

  {
    thumbnail:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fi8EvaWtL5CvoielOjjVvTr7ux3.jpg",
  },

  {
    thumbnail:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bOth4QmNyEkalwahfPCfiXjNh1r.jpg",
  },

  {
    thumbnail:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zn7feouGPU8sELez4qvpp0EtgeQ.jpg",
  },

  {
    thumbnail:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/c1J6PO4qaAQ9JuM4PfdWZ2lrRa.jpg",
  },

  {
    thumbnail:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/y55oBgf6bVMI7sFNXwJDrSIxPQt.jpg",
  },

  {
    thumbnail:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
  },

  {
    thumbnail:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg",
  },

  {
    thumbnail:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  },

  {
    thumbnail:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uOYWdGpymxSgPMkHo3SgINpWUgk.jpg",
  },
];

const Banner = () => {
  const settings = {
    infinite: true,
    loop: true,
    autoplay: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="banner">
      <Link to="description" smooth duration={1000}>
        <span>
          <span />
        </span>
      </Link>
      <Slider {...settings}>
        {items.map((item, i) => (
          <div key={i} className="slider__element">
            <img className="banner__image" src={item.thumbnail} alt="" />
          </div>
        ))}
      </Slider>
      <div className="banner__fadeBottom" />
    </section>
  );
};

export default Banner;
