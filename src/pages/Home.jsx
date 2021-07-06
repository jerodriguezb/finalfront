import React from "react";
import Carousel from "../components/Carousel";
import Principal from "../components/Principal";
import Marquesina from "../components/Marquesina";
import Footer from "../components/Footer";

import "../css/home.css";
import "../css/carousel.css";
import "../css/marquesina.css";
import "../css/footer.css";

const Home = () => {
  return (
    <>
      <Carousel />
      <Principal />
      <Marquesina />
      <Footer />
    </>
  );
};

export default Home;
