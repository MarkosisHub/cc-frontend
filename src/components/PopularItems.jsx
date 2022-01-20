import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./PopularItems.module.css";

const PopularItems = () => {
  const { products } = useSelector((state) => state.productsReducer);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  const handleSort = (data) => {
    if (data === "all categories") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products?.filter(
          (product) => product?.category?.trim()?.toLowerCase() === data
        )
      );
    }
  };

  console.log("filteredProducts", filteredProducts);
  console.log("products", products);

  return (
    <section className={classes.popularItemSection}>
      <div className={`${classes.popularItemWrapper} container`}>
        <h3>POPULAR ITEMS</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          ullam voluptates eius voluptatem omnis reprehenderit iure consequuntur
          at. Hic vel maxime eos.
        </p>
        <div className={classes.popularItemContent}>
          <div className={classes.navItem}>
            <button onClick={() => handleSort("all categories")}>
              ALL CATEGORIES
            </button>
            <button onClick={() => handleSort("tops")}>TOPS</button>
            <button onClick={() => handleSort("bottoms")}>BOTTOMS</button>
            <button onClick={() => handleSort("jewelry")}>JEWELRY</button>
            <button onClick={() => handleSort("accesories")}>ACCESORIES</button>
            <button onClick={() => handleSort("kids")}>KIDS</button>
          </div>
        </div>
        <div className={classes.itemCard}>
          {filteredProducts?.map((product) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className={classes.card}
            >
              <div className={classes.imageCard}>
                {/* <img src={product?.productInfo?.image[0]} alt={product.name} /> */}
                {/* test image */}
                <img src={`/${product.image}`} alt="" />
                <div className={classes.itemOverlay}>
                  <div className={classes.addToCart}>
                    <img src="/icons/cart_light.png" alt="Cart" />
                    <p>ADD TO CART</p>
                  </div>
                  <h6>Buy Now</h6>
                </div>
              </div>
              <div className={classes.itemContainer}>
                <div className={classes.left}>
                  <h5>{product?.name}</h5>
                  <p>${product?.price}</p>
                </div>
                <div className={classes.right}>
                  {product.discount && product.discount}%
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={classes.browseAll}>
          <button className={classes.browseBtn}>
            Browse All <img src="/icons/right_arrow.png" alt="Arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
