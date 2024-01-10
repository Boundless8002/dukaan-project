import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

function Main() {
  return (
    <div>
      <main>
        <div className="top-part">
          <div>
            <p>Overview</p>
          </div>
          <div className="top-right">
            <p>Last Month</p>
            <i>
              <RiArrowDropDownLine />
            </i>
          </div>
        </div>
        <div className="record">
          <div>
            <p>Online orders</p>
            <p>231</p>
          </div>
          <div>
            <p>Amount Received</p>
            <p>₹ 23,92,312.19</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
