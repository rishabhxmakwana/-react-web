import React from "react"
import {NavLink} from 'react-router-dom'
import Web from "../src/images/img0.jpeg"
import Common from "./Common"


const About = () => {
  return (
    <>
      <Common
        name="About Us"
        imgsrc={Web}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
};

export default About;
