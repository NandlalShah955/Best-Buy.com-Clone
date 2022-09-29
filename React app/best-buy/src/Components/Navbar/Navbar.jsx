import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import { AppContext } from "../../Context/AppContext";
import { useState } from "react";



const Navbar = () => {
  const {cartData,auth}=useContext(AppContext)
 const [isShown,setisShown]=useState(false)
 
 
 const handleshowdiv=()=>{
  
  setisShown(true)
}
const handlehidediv=()=>{
  setisShown(false)
}
  
 
 
 return (
    <div className={styles.navbar}>
      <div className={styles.nav_top}>
        <Link to="/">
          <div className={styles.compny_logo}>
            <img
              src="https://logodownload.org/wp-content/uploads/2020/05/best-buy-logo.png"
              alt=""
            />
          </div>
        </Link>
        <div className={styles.hamburger}>
          <MenuIcon />
          <h3>MENU</h3>
        </div>
        <div className={styles.search_bar}>
          <input type="text" placeholder="Search Best Buy" />
          <Link to="/products"><SearchIcon /></Link>
        </div>
        <div className={styles.store_time}>
          <StoreOutlinedIcon />
          <h3>Aiea</h3>
        </div>
      
        {auth===false?
          <Link to="/cart"><div className={styles.cart}>
            <ShoppingCartOutlinedIcon />
            <h3>Cart</h3>
            
          </div></Link>:<Link to="/cart">
          <div className={styles.cart}>
            <ShoppingCartOutlinedIcon />
            <h3>Cart</h3>
            <span style={{marginLeft:"5px",borderRadius:"50%",backgroundColor:"white",color:"blue"}}>{cartData.length}</span>
            
          </div>
        </Link>
        }
        
      </div>
      <div className={styles.nav_bottom}>
        <div className={styles.nav_bottom_left}>
          <Link to="/a">Top Deals</Link>
          <Link to="/b">Deal of the Day</Link>
          <Link to="/c">Totaltech Membership</Link>
          <Link to="/d">Credit Cards</Link>
          <Link to="/e">Gift Cards</Link>
          <Link to="/f">Gift Ideas</Link>
          <Link to="/" >Health & Wellness</Link>
          <Link to="" onClick={handleshowdiv}>
            More <span >⌵</span>
          </Link>
        </div>

       



        <div className={styles.nav_bottom_right}>
          {auth===false?<Link to="/signin" className={styles.account_nav_bottom}>
            <span>
              <AccountCircleOutlinedIcon />
            </span>{" "}
            Account <span>⌵</span>
          </Link>:null}
          
          <Link to="/i">
            Recently Viewed <span>⌵</span>
          </Link>
          <Link to="/j">
            Order Status <span>⌵</span>
          </Link>
          <Link to="/k">
            Saved Items <span>⌵</span>
          </Link>
        </div>
      </div>
      <MobileView />
    </div>
  
  
  
  
  
  
  
  
  );

  function MobileView() {
    return (
      <>
        <div className={styles.mob_nav_top}>
          <div className={styles.mob_nav_top_left}>
            <div className={styles.mob_compny_logo}>
              <img
                src="https://logodownload.org/wp-content/uploads/2020/05/best-buy-logo.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.mob_nav_top_right}>
            <LocalOfferOutlinedIcon />
            <AccountCircleOutlinedIcon />
            <ShoppingCartOutlinedIcon />
          </div>
        </div>
        <div className={styles.mob_nav_bottom}>
          <div className={styles.mob_menu}>
            <MenuIcon />
          </div>
          <div className={styles.mob_search_bar}>
            <input type="text" placeholder="Search Best Buy" />
            <SearchIcon />
          </div>
        </div>
        {isShown && <div className={styles.hidden}>

<p>
Best Buy Outlet
</p>
<div className={styles.topborder}></div>
<p>
Best Buy Business
</p>
<div className={styles.topborder}></div>
<p onClick={handlehidediv}>
  <span>X</span>
  
  Close
</p>
</div>}
      
      </>
    );
  }
};

export default Navbar;