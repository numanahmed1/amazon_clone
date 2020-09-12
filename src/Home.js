import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="hone_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id="9604001"
            title="COWIN E7 PRO [Upgraded] Active Noise Cancelling Headphones Bluetooth Headphones with Microphone/Deep Bass Wireless Headphones Over Ear 30 Hours Playtime for..."
            price={79.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61bMV3oE-8L._AC_SL1010_.jpg"
            rating={5}
          />
          <Product
            id="96040033"
            title="DJI Mavic Mini - Drone FlyCam Quadcopter UAV with 2.7K Camera 3-Axis Gimbal GPS 30min Flight Time, less than 0.55lbs, Gray"
            price={399.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71Rl8Rfd8vL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="96040893"
            title="Kids Headphones - noot products K11 Foldable Stereo Tangle-Free 3.5mm Jack Wired Cord On-Ear Headset for Children/Teens/Boys/Girls"
            price={18.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61514mttMWL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="9604047"
            title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
            price={64.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="9604046"
            title="
            Mkeke Compatible with iPhone XR Case,Clear Anti-Scratch Shock Absorption Cover Case for iPhone XR"
            price={7.11}
            image="https://images-na.ssl-images-amazon.com/images/I/71j2Zqi6BGL._AC_SL1250_.jpg"
            rating={3}
          />
          <Product
            id="9604045"
            title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
            price={610}
            image="https://images-na.ssl-images-amazon.com/images/I/51odsYyURHL._SL1000_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="9604044"
            title="Canon PowerShot SX540 Digital Camera w/ 50x Optical Zoom - Wi-Fi & NFC Enabled (Black), 1 - 1067C001"
            price={279.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81l6xdQOHyL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="9604048"
            title="Holy Stone HS720 Foldable GPS Drone with 4K UHD Camera for Adults, Quadcopter with Brushless Motor, Auto Return Home, Follow Me"
            price={240.11}
            image="https://images-na.ssl-images-amazon.com/images/I/610yz6pueXL._AC_SL1200_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
