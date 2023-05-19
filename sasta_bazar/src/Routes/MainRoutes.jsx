import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import Mens from "../Pages/Mens";
import MobileAccessories from "../Pages/MobileAccessories";

import ShoppingPage from "../Pages/Shopping/ShoppingPage";
// import SignleProductPage from "./SignleProductPage";

import SignleMenProductPage from "../Pages/SignleMenProductPage";
import SignleWomenProductPage from "../Pages/SignleWomenProductPage";
import SingleMobileAccessoriesProductPage from "../Pages/SingleMobileAccessoriesProductPage";
import Cart from "../Pages/Cart";
import { PrivateRoutes } from "../Components/PrivateRoutes";
import Womens from "../Pages/Womens";
import ShopIndex from "../Components/ShoppingCom/ShopIndex";
import Payment from "../Pages/Payment";
import { NewProduct } from "../Admin/Components/AddProductPage/NewProduct";
import Admin_Home from "../Admin/Components/Admin_Home/Admin_Home";
import { Product } from "../Admin/Components/ProductListPage/Product";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import { Admin_Userlist } from "../Admin/Components/Admin_User_List/Admin_Userlist";
import SearchData from "../Pages/SearchData";
import SingleAllProductData from "../Pages/SingleAllProductData";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/mens/:id" element={<PrivateRoutes><SignleMenProductPage /></PrivateRoutes>} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/womens/:id" element={<PrivateRoutes> <SignleWomenProductPage /> </PrivateRoutes>} />
        <Route path="/searchdata/:id" element={<PrivateRoutes><SingleAllProductData /></PrivateRoutes>} />
        <Route path="/mobile" element={<MobileAccessories />} />
        <Route path="/searchdata" element={<SearchData />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />

        <Route
          path="/mobile/:id"
          element={<PrivateRoutes> <SingleMobileAccessoriesProductPage /></PrivateRoutes>}
        />
        <Route
          path="/cart"
          element={
            <PrivateRoutes>
              <Cart />
            </PrivateRoutes>
          }
        />
        <Route
          path="/shop"
          element={<ShopIndex />} />
        <Route path="*" element={<h1>Error 404 Page not found</h1>} />
        <Route path="/admin" element={<Admin_Home />} />
        <Route path="/admin_add_product" element={<NewProduct />} />
        <Route path="/admin_product_list" element={<Product />} />
        <Route path="/admin_user_list" element={<Admin_Userlist />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
