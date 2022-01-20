import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { listProductDetails } from "../actions/productsAction";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import SpecificationAndReviews from "../components/Product";
import RelatedProduct from "../components/RelatedProduct";
import StayInTouch from "../components/StayInTouch";
import "./ProductDetailsScreen.css";

import { addToCart } from "../actions/cartActions";

const ProductDetailsScreen = ({ history, match }) => {
  const id = match.params.id;

  const { products } = useSelector((state) => state.productsReducer);

  // const product = products?.find(
    // (product) => product._id === id
  // )

  const dispatch = useDispatch();

  let slider1;
  let slider2;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const {
    product: {product}
  } = useSelector((state) => state.productDetails);
  // console.log("product", product);

  useEffect(() => {
    dispatch(listProductDetails(id));
    setNav1(slider1);
    setNav2(slider2);
  }, [dispatch, id, slider1, slider2]);

  const addToCartHandler = (qty) => {
    dispatch(addToCart(id, qty));
  };
  return (
    <>
      <Header />
      <section className="productDetailsSection">
        <div className="productDetailsWrapper container">
          <div className="productDetailsContent">
            <div className="productDetailsLeft">
              <div className="productSlider">
                <div className="productSliderOne">
                  <Slider asNavFor={nav2} ref={(slider) => (slider1 = slider)}>
                    {/* {product?.productInfo?.image?.map(image => (
                    <div>
                      <img src={image} alt="" />
                    </div>
                  ))} */}
                    <div>
                      <img src={`/${product?.image}`} alt={product?.name} />
                    </div>
                  </Slider>
                </div>
                <div className="productSliderTwo">
                  <Slider
                    asNavFor={nav1}
                    ref={(slider) => (slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    arrows={false}
                  >
                    <div>
                      <img src={`/${product?.image}`} alt="" />
                    </div>
                    <div>
                      <img src={`/${product?.image}`} alt="" />
                    </div>
                    <div>
                      <img src={`/${product?.image}`} alt="" />
                    </div>
                    <div>
                      <img src={`/${product?.image}`} alt="" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div className="productDetailsRight">
              <div className="productDetailsName">
                <h4>{product?.name}</h4>
              </div>
              <div className="productDetailsPrice">
                <div>
                  <h5>
                    Price <br /> {product?.price}
                  </h5>
                  {/* <h6>{product.discountedPrice}</h6> */}
                  <span> {product?.discount} </span>
                </div>
              </div>
              <div className="productDetailsStock">
                {product?.countInStock === 0 ? <h6 style={{color: '#F54748'}}>Out Of Stock</h6> : <h6>In Stock</h6>}
                <div>
                  <h5>4.5/5</h5>
                  <div className="review">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  {/* <Link to="/">See reviews</Link> */}
                </div>
              </div>
              <div className="productDetailsSize">
                <h4>Size:</h4>
                {/* <div className="size">
                  {product.sizes.map((size) => (
                    <div>
                      <button>{size}</button>
                    </div>
                  ))}
                </div> */}
              </div>
              <div className="productDetailsDescription">
                <h4>Description</h4>
                <p>{product?.description}</p>
              </div>
              {/* <div className="buyAdd">
                <button className="btn">Buy Now</button>
                <button
                  onClick={() => addToCartHandler(1)}
                  className="btn add"
                >
                  Add to Cart
                </button>
              </div> */}
              <div className="allButtons">
                <button className="buyBtn">Buy now</button>
                <button onClick={() => addToCartHandler(1)} className="cartBtn">
                  Add to cart
                </button>
                <button className="wishlistBtn">
                  <img src="/icons/wishlist.png" alt="" /> <span>37.5 K</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="specificationAndReviewsSection">
        <div className="specificationAndReviewsWrapper container">
          <ul className="specificationReviews">
            <li>
              <Link to="/">specification</Link>
            </li>
            <li>
              <Link to="/">reviews</Link>
            </li>
          </ul>
          <div className="specificationAndReviewsContent">
            <div className="specificationAndReviewsLeft">
              <ul className="attributes">
                {/* {product?.productInfo?.info?.name.map(name => (
                  <li>{name}</li>
                ))} */}
                <li>Style:</li>
                <li>Name:</li>
                <li>Colors:</li>
                <li>Sizes:</li>
                <li>Material:</li>
                <li>Waistline:</li>
                <li>Nickline:</li>
                <li>Price:</li>
                <li>Dress length:</li>
                <li>Gender:</li>
              </ul>
              <ul className="attributes">
                {/* {product?.productInfo?.info?.values.map(value => (
                  <li>{value}</li>
                ))} */}
                <li>Winter</li>
                <li>Abc</li>
                <li>Yellow, Pink, Red, Blue</li>
                <li>S, M, L, XL</li>
                <li>Woolen</li>
                <li>Empire</li>
                <li>Turtle Neck</li>
                <li>$ 23423</li>
                <li>Above knee</li>
                <li>Women</li>
              </ul>
            </div>
            <div className="specificationAndReviewsRight">
              <img src="/images/product_video.png" alt="Product Video" />
            </div>
          </div>
          {/* <p>{product?.productInfo?.longdescription}</p> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            dicta in soluta? Dolore maiores natus pariatur magni doloremque?
            Iure adipisci voluptates nihil itaque fugit aut temporibus placeat
            deleniti repudiandae. Cum nam inventore nostrum quod sapiente,
            similique cumque porro, repellat odit exercitationem rem cupiditate
            non officiis hic suscipit repudiandae alias ex.
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, soluta!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, soluta!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, soluta!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, soluta!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, soluta!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, soluta!
            </li>
          </ul>
        </div>
      </section>
      {/* <section className="buyerQaSection">
        <div className="buyerQaWrapper container">
          <div className="buyerQaImages">
            <div>
              <img src="/images/product_1.png" alt="" />
            </div>
            <div>
              <img src="/images/product_2.png" alt="" />
            </div>
            <div>
              <img src="/images/product_3.png" alt="" />
            </div>
            <div>
              <img src="/images/product_4.png" alt="" />
            </div>
          </div>
          <div className="buyerQaContent">
            <h3>Buyer Question & Answer (18)</h3>
            <div className="buyerQa">
              <div className="questionContent">
                <img src="/icons/question.png" alt="" />
                <p className="question">Lorem ipsum dolor sit amet?</p>
              </div>
              <div>
                <div className="answerContent">
                  <img src="/icons/answer.png" alt="" />
                  <p className="answer">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Asperiores facere non ullam explicabo impedit magnam aut
                    dolor esse iste neque!
                  </p>
                </div>
                <Link to="/">View more</Link>
              </div>
            </div>
            <div className="buyerQa">
              <div className="questionContent">
                <img src="/icons/question.png" alt="" />
                <p className="question">Lorem ipsum dolor sit amet?</p>
              </div>
              <div>
                <div className="answerContent">
                  <img src="/icons/answer.png" alt="" />
                  <p className="answer">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Asperiores facere non ullam explicabo impedit magnam aut
                    dolor esse iste neque!
                  </p>
                </div>
                <Link to="/">View more</Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <RelatedProduct />
      <StayInTouch />
      <Footer />
    </>
  );
};

export default ProductDetailsScreen;
