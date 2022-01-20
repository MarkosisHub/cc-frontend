import React from "react";
import { Link } from "react-router-dom";
import classes from "./KidsBottom.module.css";

const KidsBottom = () => {
  return (
    <section className={classes.kidsBottomSection}>
      <div className={`${classes.kidsBottomWrapper} container`}>
        <div
          // style={{
          //   backgroundImage: `url(${
          //     process.env.PUBLIC_URL + "/images/kids_bg.png"
          //   })`,
          // }}
          className={classes.kidsBottomLeft}
        >
          <img src="/images/kids_bg.png" alt="" />
          <div className={classes.kidsBottomLeftContent}>
            <h2>Kids Fashion</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              modi.
            </p>
            <Link to="/products/kids" className="btn">
              Shop now
            </Link>
          </div>
        </div>
        <div
          // style={{
          //   backgroundImage: `url(${
          //     process.env.PUBLIC_URL + "/images/bottom_bg.png"
          //   })`,
          // }}
          className={classes.kidsBottomRight}
        >
          <img src="/images/bottom_bg.png" alt="" />
          <div className={classes.kidsBottomRightContent}>
            <h2>Bottom Wears</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              modi.
            </p>
            <Link to="/products/bottoms" className="btn">
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsBottom;
