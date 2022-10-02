import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import styles from "../../Pages/Cart.module.css";

const OrderSummary = () => {
  const {cartData}=useContext(AppContext)
  const [totalCost, setTotalCost] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
//  console.log(cartData.requiredParts.salePrice)
//  const showpayment=()=>{
  

//  }

 console.log("hi")
useEffect(() => {
    // let total=cartData.reduce(function(sum,elem){
    //   return sum + Number(elem.)
    // })
    //  const lengthhai=cartData.length
    const t_c = cartData.reduce((total, a) => {
      return total + Number( a.salePrice)
    }, 0);
    // console.log(t_c)
    setTotalCost(t_c);
    setTax(t_c * 0.12);
    setTotal(t_c - 200 + tax);
   
  }, [cartData]);
  //  console.log(cartData.products.salePrice);
  return (
    <div className={styles.order_summary}>
      <h2>Order Summary</h2>
  
      <div className={styles.totalDiv}>
        <div>
          <p>Original Price</p>
          <p>${Math.round(totalCost)}</p>
        </div>
        <div>
          <p>Savings</p>
          <p>-$200.00</p>
        </div>
        <div>
          <p>Store Pickup</p>
          <p>FREE</p>
        </div>
        <div className={styles.tax}>
          <p>Estimated Sales Tax</p>
          <p>${Math.round(tax)}</p>
        </div>
      </div>
      <div className={styles.total}>
        <h3>Total</h3>
        <h3>${Math.round(total)}</h3>
      </div>
      
       <Link to="/products">
 <button className={styles.checkoutBtn} onClick={()=>
     alert("payment Done")
       }>Checkout</button>
     

       </Link>
       
      <button className={styles.paypalBtn}>
        <i>Paypal</i>
        <span>Checkout</span>
      </button>
      <p>
        <Link to="/signup">Sign in or create an account now</Link> to get My
        Best Buy™ Points
      </p>
    </div>
  );
};

export default OrderSummary;