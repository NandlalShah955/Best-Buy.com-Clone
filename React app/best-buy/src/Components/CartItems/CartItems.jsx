import { FormControlLabel, Radio } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import styles from "../../Pages/Cart.module.css";
const CartItems = ({ cartData}) => {
    const {handleQty,qty}=useContext(AppContext)
  return (
    <div className={styles.cartItems}>
      <h2>Your Cart</h2>
      {cartData.length > 0 ? (
        cartData.map((item) => {
          return (
            <div key={item.name}className={styles.cartItem}>
              <div className={styles.product_img_title}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
              <div className={styles.radio}>
                <div>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Pickup atAiea Aiea"
                  />
                  <p>Ready for pickup Today</p>
                  <p>Eligible for curbside pickup</p>
                </div>
                <div>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Shipping to 96939"
                  />
                  <p>Unavailable in this area</p>
                </div>
              </div>
              <div className={styles.qty_add_remove}>
                <div className={styles.qty}>
                  <span>{qty}</span>
                  <button className={styles.inc} onClick={()=>handleQty(+1)}>+</button>
                  <button className={styles.dec} onClick={()=>handleQty(-1)}>-</button>
                </div>
                <button>remove</button>
              </div>
              <div className={styles.cart_price}>
                <h3>${item.salePrice}</h3>
                <span>Save $200</span>
                <p>Was ${item.salePrice+200}</p>
              </div>
            </div>
          );
        })
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </div>
  );
};

export default CartItems;