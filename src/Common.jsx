import React from "react"
import {NavLink} from 'react-router-dom'
import Web from "../src/images/img1.jpeg"

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className= "container-fluid">
         <div className= "row">
           <div className= "col-10 mx-auto">
            <div className= "row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column Navbar">
              <h1>
                {props.name}
              </h1>
              <p className="my-3 ">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mt-3">
                <NavLink to={props.visit} className="btn-light btn-get-started">{props.btname}</NavLink>
              </div>
            </div >

            <div className ="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imgsrc} className="img-fluid" alt="Common img" />
            </div>
            </div>
           </div>
         </div>
        </div>
      </section>
    </>
  );
};

export default Common;
