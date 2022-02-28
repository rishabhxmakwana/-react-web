import React from "react"
import {NavLink} from 'react-router-dom'
import Web from "../src/images/img1.jpeg"
import Common from "./Common"
import CountUp from 'react-countup';
import Countercard from "./Countercard"
import CarouselContainer from "./Carousel"

const Home = () => {
  return (
    <>
      <Common
      name="The platform is built for today's world of work"
      imgsrc={Web}
      visit="/Service"
      btname="Get Started"
      />
      <CarouselContainer />
      <Countercard />
    </>

  );
};

export default Home;
