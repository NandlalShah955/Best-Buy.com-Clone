import React, { useContext, useState } from "react";
import CartItems from "../Components/CartItems/CartItems";
import OrderSummary from "../Components/OrderSummary/OrderSummary";
import { AppContext } from "../Context/AppContext";
import styles from "./Cart.module.css";

const Cart = () => {

  const{cartData}=useContext(AppContext)

 
  return (
    <div className={styles.cart}>
      <CartItems cartData={cartData}  />
      <OrderSummary />
    </div>
  );
};

export default Cart;