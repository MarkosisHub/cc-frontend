import React from "react";
import { Link } from 'react-router-dom'
import classes from "./TopWears.module.css";

const TopWears = () => {
  return (
    <section className={classes.topWearsSection}>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/top_wears_bg.png"
          })`,
        }}
        className={`${classes.topWearsWrapper} container`}
      >
        <div className={classes.topWears}>
          <div>
            <h2>Tops</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              modi.
            </p>
            <Link to="/products/tops" className="btn">Shop now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopWears;
