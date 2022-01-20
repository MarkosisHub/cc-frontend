import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

import classes from "./RelatedProduct.module.css";

const RelatedProduct = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.productsReducer.products);

  const addToCartHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  return (
    <section className={classes.relatedProductSection}>
      <div className={`${classes.relatedProductWrapper} container`}>
        <div className={classes.relatedProductContent}>
          <div className={classes.itemCard}>
            {products?.map((product) => (
              <div key={product._id} className={classes.card}>
                <div className={classes.imageCard}>
                  <img src={`/${product.image}`} alt="Item" />
                  <div className={classes.itemOverlay}>
                    <div className={classes.addToCart}>
                      <img src="/icons/cart_light.png" alt="Cart" />
                      <button onClick={() => addToCartHandler(product._id, 1)}>
                        ADD TO CART
                      </button>
                    </div>
                    <h6>Buy Now</h6>
                  </div>
                </div>
                <div className={classes.itemContainer}>
                  <div className={classes.left}>
                    <h5>{product.name}</h5>
                    <p>$ {product.price}</p>
                  </div>
                  <div className={classes.right}>{product.discount}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProduct;
