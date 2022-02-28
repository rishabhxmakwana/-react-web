import React from "react"
import CountUp from 'react-countup';

const Countercard = () => {
  return (
        <div className="container my-5">
          <div className="card text-center my-5">
            <div className="Ccard card-body">
            <h6>Number of Daily Users</h6>
          <CountUp
            end={60}
            duration={4}
            suffix=" +"
          />
            </div>
          </div>
        </div>

  )
}

export default Countercard;
