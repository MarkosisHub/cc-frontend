import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ReactTable from "./ReactTable";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import classes from "./AdminProductlistScreen.module.css";
import Loader from "../components/Loader";

const AdminProductlist = ({ history }) => {
  const [spinner, setSpinner] = useState(true);
  const { userInfo } = useSelector((state) => state.userSignin);
  const { products } = useSelector((state) => state.productsReducer);
  let location = useLocation();

  // if (!userInfo || !userInfo.isAdmin) {
  //   history.push("/");
  // } else {
  //   localStorage.setItem("path", location.pathname);
  //   setTimeout(() => setSpinner(false), 500);
  // }

  return (
    <>
      {/* {spinner ? (
        <Loader />
      ) : ( */}
      <section className={classes.adminProductListSection}>
        <AdminSidebar />
        <div className={classes.adminProductListRight}>
          <AdminNavbar history={history} />
          <div className={classes.adminAllProductList}>
            <div>
              <h4>ALL PRODUCT LIST</h4>
            </div>
            <Link to="/admin/productcreate" className={`btn ${classes.addBtn}`}>
              + Add New
            </Link>
          </div>
          <ReactTable products={products} />
        </div>
      </section>
      {/* )} */}
    </>
  );
};
export default AdminProductlist;
