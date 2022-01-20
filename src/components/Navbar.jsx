import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {useDispatch,useSelector} from 'react-redux'
// import {listProducts} from '../actions/productsAction'
import axios from "axios";
import classes from "./Navbar.module.css";

const Navbar = () => {
  // const dispatch = useDispatch()
  //get products from store
  // const state = useSelector(state => state.productsReducer)
  // console.log('products',state);

  const [tops, setTops] = useState(false);
  const [bottoms, setBottoms] = useState(false);
  const [jewelry, setJewelry] = useState(false);
  const [accessories, setAccessories] = useState(false);
  const [kids, setKids] = useState(false);

  const handleTops = (e) => {
    e.preventDefault();
    setTops(!tops);
    setBottoms(false);
    setJewelry(false);
    setAccessories(false);
    setKids(false);
  };

  const handleBottoms = (e) => {
    e.preventDefault();
    setBottoms(!bottoms);
    setTops(false);
    setJewelry(false);
    setAccessories(false);
    setKids(false);
  };

  const handleJewelry = (e) => {
    e.preventDefault();
    setJewelry(!jewelry);
    setTops(false);
    setBottoms(false);
    setAccessories(false);
    setKids(false);
  };

  const handleAccessories = (e) => {
    e.preventDefault();
    setAccessories(!accessories);
    setTops(false);
    setBottoms(false);
    setJewelry(false);
    setKids(false);
  };

  const handleKids = (e) => {
    e.preventDefault();
    setKids(!kids);
    setTops(false);
    setBottoms(false);
    setJewelry(false);
    setAccessories(false);
  };
  //get products
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    // dispatch(listProducts())
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => setProducts(res.data.products))
      .then((err) => console.log(err));
  }, []);
  console.log("products", products);

  return (
    <>
      <div className={classes.navbarWrapper}>
        <nav className={`${classes.navbar} container`}>
          {/* <Link to="/"> </Link>
          <Link to="/"> </Link>
          <Link to="/abc">TRAININGS</Link>
          <Link to="/abc">EVENTS</Link>
          <Link to="/abc">OUR STORY</Link> */}
          <ul className={classes.mainNav}>
            <li>
              <button onClick={handleTops}>
                Tops <i className="fas fa-angle-down"></i>
              </button>
              {tops && (
                <ul className={classes.dropdownNav}>
                  <li className={classes.topsMen}>
                    <Link to="/">
                      MEN <i className="fas fa-angle-right"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link to="/products/t-shirt">T-SHIRT</Link>
                      </li>
                      <li>
                        <Link to="/products/jumpers">JUMPERS</Link>
                      </li>
                      <li>
                        <Link to="/products/hoodies">HOODIES</Link>
                      </li>
                      <li>
                        <Link to="/products/shirts">SHIRTS</Link>
                      </li>
                      <li>
                        <Link to="/products/muscle tees & tanks">
                          MUSCLE TEES & TANKS
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/basic">BASIC</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={classes.topsWomen}>
                    <Link to="/">
                      WOMEN <i className="fas fa-angle-right"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link to="/products/t-shirt">T-SHIRT</Link>
                      </li>
                      <li>
                        <Link to="/products/jumpers">JUMPERS</Link>
                      </li>
                      <li>
                        <Link to="/products/hoodies">HOODIES</Link>
                      </li>
                      <li>
                        <Link to="/products/shirts">SHIRTS</Link>
                      </li>
                      <li>
                        <Link to="/products/MUSCLE TEES & TANKS">
                          MUSCLE TEES & TANKS
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/basic">BASIC</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={handleBottoms}>
                Bottoms <i className="fas fa-angle-down"></i>
              </button>
              {bottoms && (
                <ul className={classes.dropdownNav}>
                  <li className={classes.bottomsMen}>
                    <Link to="/">
                      MEN <i className="fas fa-angle-right"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link to="/products/pants">PANTS</Link>
                      </li>
                      <li>
                        <Link to="/products/shorts">SHORTS</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={classes.bottomsWomen}>
                    <Link to="/">
                      WOMEN <i class="fas fa-angle-right"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link to="/products/pants">PANTS</Link>
                      </li>
                      <li>
                        <Link to="/products/shorts">SHORTS</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={handleJewelry}>
                Jewelry <i className="fas fa-angle-down"></i>
              </button>
              {jewelry && (
                <ul className={classes.dropdownNav}>
                  <li className={classes.jewelryMen}>
                    <Link to="/">
                      MEN <i className="fas fa-angle-right"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link to="/products/chains">CHAINS</Link>
                      </li>
                      <li>
                        <Link to="/products/bracelets">BRACELETS</Link>
                      </li>
                      <li>
                        <Link to="/products/watches">WATCHES</Link>
                      </li>
                      <li>
                        <Link to="/products/rings">RINGS</Link>
                      </li>
                      <li>
                        <Link to="/products/earring">EARRING</Link>
                      </li>
                      <li>
                        <Link to="/products/girls">GRILLS</Link>
                      </li>
                      <li>
                        <Link to="/products/penonts">PENONTS</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={classes.jewelryWomen}>
                    <Link to="/">
                      WOMEN <i className="fas fa-angle-right"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link to="/products/chains">CHAINS</Link>
                      </li>
                      <li>
                        <Link to="/products/bracelets">BRACELETS</Link>
                      </li>
                      <li>
                        <Link to="/products/watches">WATCHES</Link>
                      </li>
                      <li>
                        <Link to="/products/rings">RINGS</Link>
                      </li>
                      <li>
                        <Link to="/products/earring">EARRING</Link>
                      </li>
                      <li>
                        <Link to="/products/grills">GRILLS</Link>
                      </li>
                      <li>
                        <Link to="/products/penonts">PENONTS</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={handleAccessories}>
                Accessories <i className="fas fa-angle-down"></i>
              </button>
              {accessories && (
                <ul className={classes.dropdownNav}>
                  <li className={classes.accessoriesMen}>
                    <Link to="/">
                      MEN <i className="fas fa-angle-right"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link to="/products/hats">HATS</Link>
                      </li>
                      <li>
                        <Link to="/products/beanies">BEANIES</Link>
                      </li>
                      <li>
                        <Link to="/products/belts">BELTS</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={classes.accessoriesWomen}>
                    <Link to="/">
                      WOMEN <i className="fas fa-angle-right"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link to="/products/hats">HATS</Link>
                      </li>
                      <li>
                        <Link to="/beanies">BEANIES</Link>
                      </li>
                      <li>
                        <Link to="/belts">BELTS</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={handleKids}>
                Kids <i className="fas fa-angle-down"></i>
              </button>
              {kids && (
                <ul className={classes.dropdownNav}>
                  <li>
                    <Link to="/tops">TOPS</Link>
                  </li>
                  <li>
                    <Link to="/bottoms">BOTTOMS</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
