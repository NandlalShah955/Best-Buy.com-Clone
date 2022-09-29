import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
//  import { Home_carosul } from "../Components/Home_carosul";
const Home = () => {
  return (
    <>
      <div className={styles.home_a}>
        <div className={styles.home_a_left}>
          <div className={styles.home_left_text}>
            <h1>Save up to $800</h1>
            <p>on select Samsung,Sony and LG TVs.</p>

            <button>Shop Now</button>
          </div>

          <div className={styles.h_a_left_img}>
            <img src={require("./Footballl image.jpg")} alt="" />
          </div>
          {/* <div className={styles.h_a_left_over}>
           
            
          </div> */}
        </div>
        <div className={styles.home_a_right}>
          <div className={styles.h_a_right_top}>
            <h3>Today's popular picks</h3>
            <div className={styles.pop_products}>
              <div className={styles.pop_item}>
                <div className={styles.pop_item_image}>
                  <img
                    src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6468/6468484_sd.jpg;maxHeight=640;maxWidth=550"
                    alt="iPad"
                  />
                </div>
                <div className={styles.pop_item_title}>
                  Frigidaire - 25.6 Cu. Ft. Side-by-Side Refrigerator -
                  Stainless steel
                </div>
              </div>
              <div className={styles.pop_item}>
                <div className={styles.pop_item_image}>
                  <img
                    src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443500_sd.jpg;maxHeight=640;maxWidth=550"
                    alt="iWatch"
                  />
                </div>
                <div className={styles.pop_item_title}>
                  Samsung - 17.5 cu. ft. 3-Door French Door Counter Depth
                  Refrigerator with WiFi and Twin Cooling Plus® - Stainless
                  steel
                </div>
              </div>
              <div className={styles.pop_item}>
                <div className={styles.pop_item_image}>
                  <img
                    src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6506/6506246_sd.jpg;maxHeight=640;maxWidth=550"
                    alt="macbook"
                  />
                </div>
                <div className={styles.pop_item_title}>
                  Insignia -4.9 Cu.Ft.Mini Fridge with Bottom
                </div>
              </div>
              <div className={styles.pop_item}>
                <div className={styles.pop_item_image}>
                  <img
                    src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6257/6257844_sd.jpg;maxHeight=640;maxWidth=550"
                    alt="iPhone"
                  />
                </div>
                <div className={styles.pop_item_title}>
                  Frigidaire-Gallery 25.6 CU.Ft.Side-by-Side
                </div>
              </div>
            </div>
          </div>
          <div className={styles.h_a_right_bottom}>
            <div className={styles.h_a_r_b_1}>
              <h3>
                <span>Outlet</span>Deals
              </h3>
              <div className={styles.h_r_b_img}>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/ClearanceOpenBox_White-217158.png;maxHeight=230;maxWidth=330"
                  alt="text"
                />
              </div>

              <p className={styles.new3}> View outlet deals</p>
            </div>
            <div className={styles.h_a_r_b_2}>
              <h3>
                <span>Deals </span> of the Day
              </h3>
              <div className={styles.h_r_b_img}>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6474/6474398_sd.jpg;maxHeight=640;maxWidth=550"
                  alt="comics"
                />
              </div>
              <p className={styles.new}>WD-BLACK SN580 1TB Internal SSD PCle</p>
              <br />
              <p className={styles.pr}>$103.00</p>
              <p className={styles.cr}>$269.99</p>
              <p className={styles.new2}>See bonus deals</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homenew_arriv}>
        <h3 className={styles.newhai}>New Arrivals</h3>
        <div className={styles.homenew_arri_flex}>
          <div className={styles.homenew_arri_flex_box}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6513/6513058_sd.jpg;maxHeight=400;maxWidth=400"
              alt=""
            />
            <p>McFarlane Toys-Avatar 7 Neytiri Classic Figure</p>
          </div>
          <div className={styles.homenew_arri_flex_box}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900964_sd.jpg;maxHeight=400;maxWidth=400"
              alt=""
            />
            <p>Apple-Airpods Pro(2nd generation)-White</p>
          </div>
          <div className={styles.homenew_arri_flex_box}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487406_sd.jpg;maxHeight=400;maxWidth=400"
              alt=""
            />
            <p>Apple-iphone 14 Pro Max 128 GB-Deep Purple (Verizon)</p>
          </div>
          <div className={styles.homenew_arri_flex_box}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6518/6518408_sd.jpg;maxHeight=400;maxWidth=400"
              alt=""
            />
            <p>
              Sealy-Cozy Cool Hybrid 2-Stage Coil and Gel Crib/Toddler/Mattress
            </p>
          </div>
          <div className={styles.homenew_arri_flex_box}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6518/6518226_sd.jpg;maxHeight=200;maxWidth=300"
              alt=""
            />
            <p>CORSAIR XTM70 Extreme Performance Thermal Paste</p>
          </div>
        </div>
      </div>

      <div className={styles.home_e2}>
        <div className={styles.home__e2_content}>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/total-tech-stacked-reverse-sol86118-059fc768-50d8-43ab-b62a-3bded1b62731.png"
              alt=""
            />
            <button>Learn More</button>
          </div>
          <div className={styles.vertical_border}></div>
          <div>
            <h2>The membership you and your tech deserve.</h2>
            <p>
              Best Buy Totaltech™ provides 24/7/365 tech support, up to 24
              months of product protection with active membership, free standard
              installation and so much more. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>

      {/* put that image above here  */}
      <h2 className={styles.inspiredtext}>
        Deals inspired by your shopping
        <span>(6 items)</span>
      </h2>
      <div className={styles.home_dealsinpired}>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6397/6397576_sd.jpg;maxHeight=272;maxWidth=400"
            alt=""
          />
          <p>Samsung - 27.4 Cu. Ft. Side-by-Side Refrigerator - Stainless...</p>
          <h4>$1,399.99</h4>
          <p>$149.99</p>
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6468/6468484_sd.jpg;maxHeight=640;maxWidth=550"
            alt=""
          />
          <p>
            WD - WD_BLACK SN850 1TB Internal SSD PCIe Gen 4 x4 Officially...
          </p>
          <h4>$149.99</h4>
          <p>$249.99</p>
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505896_sd.jpg;maxHeight=272;maxWidth=400"
            alt=""
          />
          <p>WD - WD_BLACK SN850 2TB Internal SSD PCIe Gen 4 x4 Officially..</p>
          <h4>$259.99</h4>
          <p>$369.99</p>
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5161/5161200_sd.jpg;maxHeight=272;maxWidth=400"
            alt=""
          />
          <p>
            Insignia™ - 18 Cu. Ft. Top-Freezer Refrigerator - Stainless steel...
          </p>
          <h4>$599</h4>
          <p>$679</p>
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443500_sd.jpg;maxHeight=272;maxWidth=400"
            alt=""
          />
          <p>Samsung - 17.5 cu. ft. 3-Door French Door Counter Depth..</p>
          <h4>$1399.99</h4>
          <p>1529</p>
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6191/6191432_sd.jpg;maxHeight=272;maxWidth=400"
            alt=""
          />
          <p>Amana - 24.5 Cu. Ft. Side-by-Side Refrigerator with Water..</p>
          <h5>See price in cart</h5>
        </div>
      </div>

      {/* put home g grid box below here  */}

      <div className={styles.home_g}>
        <h3>Our featured offers</h3>
        <div className={styles.home_g_gridBox}>
          <div className={`${styles.gridItem} ${styles.border_b_r}`}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_MMT-591740_der-4dea32e8-129f-4a98-9b48-65e99374ad3f.jpg;maxHeight=504;maxWidth=740"
              alt=""
            />
            <Link to="">
              <h3>Gather in style this season.</h3>
            </Link>
            <p>Find deals on major appliances to upgrade your space.</p>
          </div>
          <div className={`${styles.gridItem} ${styles.border_b_r}`}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-grilling-mmt585033-f86aea53-dc73-42f0-994f-e49f78a888f1.jpg;maxHeight=504;maxWidth=740"
              alt=""
            />
            <Link to="">
              <h3>Win on the road and in the parking lot.</h3>
            </Link>
            <p>
              It’s football time. Explore portable, game-ready grills from
              Weber, Traeger, Pit Boss and Everdure.
            </p>
          </div>
          <div className={`${styles.gridItem} ${styles.border_b}`}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_MMT-591613_der-8a7c5535-0e45-49f6-8c0f-de70ad8d8db6.jpg;maxHeight=504;maxWidth=740"
              alt=""
            />
            <Link to="">
              <h3>Introducing Marshmello x CRUX.</h3>
            </Link>
            <p>Satisfy your cravings with CRUX appliances and accessories.</p>
          </div>
        </div>
      </div>

      <div className={styles.home_c}>
        <div className={styles.home_c_box}>
          <div className={styles.box_content}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-confident-210831-c34d2a74-8b79-41cd-8161-b9987666f7d6.png;maxHeight=72;maxWidth=72"
              alt="person"
            />
            <div>
              <h3>Shop safely and confidently.</h3>
              <Link to="#">See our safety procedures</Link>
            </div>
          </div>
        </div>
        <div className={styles.home_c_box}>
          <div className={styles.box_content}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-expert-210831-70c599ed-fc34-47d8-9b93-85f899d93c8f.png;maxHeight=72;maxWidth=72"
              alt="woman"
            />
            <div>
              <h3>Get help shopping from home.</h3>
              <Link to="#">Shop with an Expert</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.home_e}>
        <div className={styles.home_e1}>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-37875-app-curbside-vpe_der-149659.png;maxHeight=144;maxWidth=144"
              alt=""
            />
            <div>
              <h3>Ready in one hour</h3>
              <p>with Store or Curbside Pickup.</p>
            </div>

            <div className={styles.borderlefthaiy}></div>
          </div>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=144;maxWidth=144"
              alt=""
            />
            <div>
              <h3>Free next-day delivery</h3>
              <p>on thousands of items.</p>
            </div>
          </div>
          <div className={styles.borderlefthaiy}></div>

          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=144;maxWidth=144"
              alt=""
            />
            <div>
              <h3>Same-day delivery.</h3>
              <p>Order by 3 p.m., get it by 8 p.m.</p>
              <p>Order by 2 p.m. Sunday.</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className={styles.liketext}>
        You may also like
        <span>(6 items)</span>
      </h2>
      <div className={styles.home_dealsinpired}>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6474/6474699_sd.jpg;maxHeight=272;maxWidth=400"
            alt=""
          />
          <p>
            Seagate - FireCuda 530 2TB Internal SSD PCIe Gen 4 x4 NVMe with...
          </p>
          <h4>$249.99</h4>
          <p>$449.99</p>
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6485/6485007_sd.jpg;maxHeight=272;maxWidth=400"
            alt=""
          />
          <p>Samsung - 980 PRO Heatsink 1TB Internal SSD PCIe Gen 4 x4...</p>
          <h4>$149.99</h4>
          <p>$249.99</p>
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6402/6402043_sd.jpg;maxHeight=272;maxWidth=400"
            alt=""
          />
          <p>
            Danby - 7 Cu. Ft. Top-Freezer Refrigerator - Black/stainless steel
            look
          </p>
          <h4>$259.99</h4>
          <p>$369.99</p>
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6485/6485009_sd.jpg;maxHeight=272;maxWidth=400"
            alt=""
          />
          <p>Samsung - 980 PRO Heatsink 2TB Internal SSD PCIe Gen 4 x4...</p>
          <h4>$249.99</h4>
          <p>$299.99</p>
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6431/6431939_sd.jpg;maxHeight=272;maxWidth=400"
            alt=""
          />
          <p>Samsung - 980 PRO 1TB Internal Gaming SSD PCIe Gen 4 x4 NVMe</p>
          <h4>$139.99</h4>
          <p>159.99</p>
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6506/6506246_sd.jpg;maxHeight=272;maxWidth=400"
            alt=""
          />
          <p>
            Frigidaire - 25.6 Cu. Ft. Side-by-Side Refrigerator - Stainless..
          </p>
          <h4>$1199.99</h4>
          <p>1349.99</p>
        </div>
      </div>

     
      <div className={styles.home_f}>
        <div
          className={styles.flexItem}
          style={{
            backgroundColor: "#E0E6EF",
          }}
        >
          <h3>We’re driven by our impact</h3>
          <div className={styles.home_f_gridBox}>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77071-explore-visibility-220915-8078e275-af0e-4488-bd04-2419e4205ebc.jpg;maxHeight=432;maxWidth=432"
                  alt="product"
                />
              </div>
              <p>More visibility. More leadership.</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-75623-explore-ttc-220725-2f672aa8-0203-4705-a230-641553d4a672.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>More visibility. More leadership.</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77071-explore-sustainability-220915-8b0a7765-63e4-4934-b39f-0bbf363f371e.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>Sustainability is part of our ecosystem</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77071-explore-blueshirt-220915-f5f9b0c9-cb33-4580-a519-e778bada05d9.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>We’re committed to making a difference</p>
            </Link>
          </div>
        </div>

        <div
          className={styles.flexItem}
          style={{
            backgroundColor: "white",
            border: "1px solid #c5cbd5",
          }}
        >
          <h3>Get inspired by Roku Idea House</h3>
          <div className={styles.home_f_gridBox}>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77375-explore-ring-526ac4b4-ff49-4461-a1e1-8311d59ae23b.jpg;maxHeight=432;maxWidth=432"
                  alt="product"
                />
              </div>
              <p>Secure your home with Ring</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77375-explore-home-expert-333f2f49-4384-4080-aa2d-70360ced9543.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>Make the most of your home office</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77375-explore-entertainment-41036d38-d4ad-46a2-a191-254396b279c0.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>Create family room fun</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77375-explore-appls-7aa45210-b3f8-4ec1-bb91-5e3f95cff9db.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>Reimagine your laundry room</p>
            </Link>
          </div>
        </div>

        <div
          className={styles.flexItem}
          style={{
            backgroundColor: "#F0F2F4",
          }}
        >
          <h3>Let’s work together</h3>
          <div className={styles.home_f_gridBox}>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73227-flex-help-220425-d8f91c99-3a5a-407f-8435-9af6d0e65d3e.jpg;maxHeight=432;maxWidth=432"
                  alt="product"
                />
              </div>
              <p>Free home consultation</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73227-flex-tv-install-220425-fc73bc82-5ae4-4f5f-b517-9ed6030d4ba8.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>Totaltech membership</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73227-flex-cc-220425-edd4870c-fbc5-4237-b8ba-4fabaaf90718.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>My Best Buy® Credit Card</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73227-flex-hm-consult-220425-86b9c3f3-3a19-4656-be59-a24bec08934d.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>Best Buy Home Guidebook</p>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.home_h}>
        <div></div>
        
        {/* {viewed_products.length > 0 && (
          <>
            <h3>Related to items you've viewed (6 items)</h3>
            <div className={styles.home_h_products}>
              <Home_carosul data={viewed_products} />
            </div>
          </>
        )} */}
      </div>
      <div className={styles.home_i}>
        <div>
          <img src="" alt="" />
          <h3></h3>
          <p></p>
        </div>

        <div>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-37400-pol-dotd-190823_der-98962.png;maxHeight=280;maxWidth=412"
              alt=""
            />
          </div>

          <Link to="#">
            <h3>Great deals. Every day.</h3>
          </Link>
        </div>

        <div>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-37504-pol-outlet-190823-98410.png;maxHeight=280;maxWidth=412"
              alt=""
            />
          </div>
          <Link to="#">
            <h3>Save when you shop the Best Buy Outlet Deals</h3>
          </Link>
        </div>
      </div>

      <div className={styles.discount_offered}>
        <div>
          <div className={styles.discount_offered_img}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-66611-cb-fs-211018-6dd3346e-0ef8-458c-b16d-5ff2264fbb11.png"
              alt=""
            />
          </div>
          <div className={styles.figure}>
            <h3>Apply today and get</h3>
            <h1>10% back</h1>
          </div>
          <div className={styles.disc}>
            <p>
              in rewards on your first day of purchases when you are approved
              for the Card.
            </p>
          </div>
          <button>Learn More</button>
        </div>
      </div>


      <h2 className={styles.liketext}>
       Featured products
        <span>(6 items)</span>
      </h2>
      <div className={styles.home_dealsinpired}>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510927_sd.jpg;maxHeight=150;maxWidth=225"
            alt=""
          />
          <p>
          Samsung - 55" Odyssey Ark 4K UHD 165Hz 1ms Quantum Mini-LED Multiview Curved...
          </p>
          <h4>$3499.99</h4>
         
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501588_sd.jpg;maxHeight=150;maxWidth=225"
            alt=""
          />
          <p>Samsung - Galaxy Book2 Pro 13.3" AMOLED Laptop - Intel 12th Gen Core i5 Evo...</p>
          <h4>$1099.99</h4>
      
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502273_sd.jpg;maxHeight=150;maxWidth=225"
            alt=""
          />
          <p>
          Arlo - Essential Spotlight 4 Cameras and Yard Sign, Indoor/Outdoor, Wireless,...
          </p>
          <h4>$349.99</h4>
          <p>$449.99</p>
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502942_sd.jpg;maxHeight=150;maxWidth=225"
            alt=""
          />
          <p>HP - Spectre x360 2-in-1 13.5" 3K2K Touch-Screen Laptop - Intel Evo Core i7 </p>
          <h4>$1749.99</h4>
      
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6456/6456123_sd.jpg;maxHeight=150;maxWidth=225"
            alt=""
          />
          <p>Ring - Floodlight Cam Wired Pro Outdoor Wireless 1080p Surveillance Camera - Black
</p>
          <h4>$249.99</h4>
         
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6504/6504380_sd.jpg;maxHeight=150;maxWidth=225"
            alt=""
          />
          <p>
          Dell - Inspiron 2-in-1 16” FHD+ Touch Laptop – 12th Gen Intel Evo i7 – 16GB..
          </p>
          <h4>$1199.99</h4>
          <p>1349.99</p>
        </div>
      </div>


      <div className={styles.home_h}>
        {/* {featured_products.length > 0 && (
          <>
            <h3>Featured products (6 items)</h3>
            <div className={styles.home_h_products}>
              <Home_carosul data={featured_products} />
            </div>
          </>
        )} */}
      </div>
    </>
  );
};

export default Home;
