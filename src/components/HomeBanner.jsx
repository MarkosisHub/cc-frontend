import React from "react";
import { Link } from 'react-router-dom'
import classes from "./HomeBanner.module.css";
// rgba(41, 40, 40, 0.44);

const HomeBanner = () => {
  return (
    <section
      className={classes.homeBannerSection}
      style={{
        backgroundImage: `linear-gradient(rgba(41, 40, 40, 0.44), rgba(41, 40, 40, 0.44)), url(${
          process.env.PUBLIC_URL + "/images/home_banner_bg.jpg"
        })`,
      }}
    >
      <div className={`${classes.homeBannerWrapper} container`}>
        <div className={classes.homeBannerContent}>
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            natus!
          </p>
          <Link to="/products/all products" className={`btn ${classes.shopBtn}`}>Shop now</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
