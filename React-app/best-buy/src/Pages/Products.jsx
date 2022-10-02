import React, { useState,useEffect, useContext } from "react";
import FilterComponents from "../Components/FilterComponents/FilterComponents";
import { Skeleton } from "@mui/material";
import SelectSmall from "../Components/SelectComponents/SelectSmall";
import styles from "./Products.module.css";
import StarIcon from "@mui/icons-material/Star";
import { Link,useNavigate } from "react-router-dom";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Checkbox, FormControlLabel, } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Pagination from "../Components/Pagination/Pagination";
import { AppContext } from "../Context/AppContext";


const Products = () => {
const [error,setError]=useState(false)
const [loading,setLoading]=useState(false)  
const [data,setData]=useState([])
const [total,setTotal]=useState(10)
const [page,setPage]=useState(1)
const Onchange=(val)=>{
    setPage(val)
}
const {cartData,setCartData}=useContext(AppContext)
const {auth}=useContext(AppContext)
const navigate=useNavigate()

useEffect(()=>{

setLoading(true)
  fetch(`https://api.bestbuy.com/v1/products(categoryPath.id=pcmcat138500050001)?pageSize=10&page=${page}&format=json&apiKey=qrAh5zmG2kBzhl9ql2vJjtDd`)
    .then((res)=>res.json())
    .then((res)=>{
        // console.log(res.products)

        setData(res.products)
        setTotal(res.totalPages)
   setLoading(false)
      })
    .catch((err)=>setError(true))
},[page])
  
// if(loading){
// return (
// <>

// <CircularProgress height={50}/>

// </>
// )
// }



return (
    <>
    <div className={styles.productsMain}>
      <FilterComponents />
      <div className={styles.productsRightBox}>
        <div className={styles.products_right_top}>
          <p>10 items</p>
          <div>
            <span>Sort By :</span>
            <SelectSmall />
          </div>
        </div>
        {loading ? (
          <h2 style={{ textAlign: "center" }}><Skeleton />
<Skeleton animation="wave" />
<Skeleton animation="wave" />
<Skeleton animation="wave" />
<Skeleton animation="wave" />
<Skeleton animation="wave" />
<Skeleton animation="wave" />
<Skeleton animation="wave" />
<Skeleton animation="wave" />
<Skeleton animation="wave" />
<Skeleton animation="wave" /><Skeleton animation="wave" />
<Skeleton animation="wave" />
<Skeleton animation="wave" />
<Skeleton animation="wave" /><Skeleton animation="wave" />

<Skeleton animation="wave" /><Skeleton animation="wave" />
<Skeleton animation="wave" /><Skeleton animation="wave" />

<Skeleton animation="wave" />
<Skeleton animation="wave" />
<Skeleton animation={false} /></h2>
        ) : error ? (
          <h2>something went wrong</h2>
        ) : (
          data.length > 0 &&
          data.map((item) => {
            return (
              <div className={styles.prodFlexBox} key={item.sku}>
                <Link to={`/${item.category}/${item.id}`}>
                  <div className={styles.prodImage}>
                    <img src={item.image} alt="laptop" />
                  </div>
                </Link>
                <div className={styles.prodDetails}>
                  <Link to={`/${item.category}/${item.id}`}>{item.name}</Link>
                  <div className={styles.model}>
                    <span>
                      {" "}
                      <b>Model</b>:{item.modelNumber}
                    </span>
                    <span>
                      {" "}
                      <b>SKU</b> :{item.sku}
                    </span>
                  </div>
                  <div className={styles.rating}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <span>({item.customerReviewCount>0?item.customerReviewCount + " reviews":""})</span>
                  </div>
                  <h5 className={styles.strong}>Get it today</h5>
                  <div className={styles.pickup}>
                    <LocalOfferOutlinedIcon />
                    <div>
                      <b>Pickup: </b>Available today at Aiea
                      <p style={{ fontSize: "11px" }}>
                        Act Fast – Only 2 left at your store!
                      </p>
                      <Link to="#">See all pickup locations</Link>
                    </div>
                  </div>
                  <div className={styles.shopping}>
                    <LocalShippingOutlinedIcon />
                    <div>
                      <b>Shipping: </b>Unavailable in your area
                      <p style={{ fontSize: "11px" }}>
                        This item is only available in certain markets.
                      </p>
                      <Link to="#">Estimates for 96939</Link>
                    </div>
                  </div>
                  <div className={styles.compare_save}>
                    <FormControlLabel control={<Checkbox />} label="Compare" />
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<BookmarkBorderIcon />}
                          checkedIcon={<BookmarkIcon />}
                        />
                      }
                      label="Save"
                    />
                  </div>
                </div>
                <div className={styles.prodToCart}>
                  <div className={styles.priceDiv}>
                    <h2>${item.salePrice}</h2>
                    <p>
                      <span
                        style={{
                          background: "#BB0628",
                          color: "#ffff",
                          padding: "3px",
                        }}
                      >
                        Save $200
                      </span>
                      <span>Was $ {item.salePrice+200}</span>
                    </p>
                  </div>
                  <div className={styles.security}>
                    <b>Free 6-month security software</b>
                    <span>A $29.99 value</span>
                  </div>
                  <button onClick={()=>{
                    setCartData([...cartData,{...item,qty:1}])
                    // <Alert severity="success"></Alert>
                
            { if(auth===true){
             alert("item added successfully")
             }
             else{
              alert("login first") 
              navigate('/signin')
              // {
              //   <Link to='/login'></Link>
              // }
              <Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  This is a success alert — <strong>check it out!</strong>
</Alert>
             }
             }
                    
                  }}>
                    <ShoppingCartIcon /> <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      
    </div>
    <Pagination current={page} setPage={setPage} page={page} total={total} Onchange={Onchange}/>
    </> 
  );
   
};

export default Products;