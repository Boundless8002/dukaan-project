import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import { RiArrowUpDownFill } from "react-icons/ri";

function Search() {
  return (
    <>
      <h2 className="search-head">Transactions | This Month</h2>
      <div className="table-data">
        <div className="table-search">
          <div>
            <input type="text" placeholder="Search by order ID..." />
          </div>
          <div className="table-search-right">
            <div className="table-sort">
              <p>Sort</p>
              <i>
                <RiArrowUpDownFill />
              </i>
            </div>
            <div className="table-drop">
              <i>
                <GoDownload />
              </i>
            </div>
          </div>
        </div>
        {/* tabledata */}
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order date</th>
              <th>Order amount</th>
              <th>Transaction fees</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>₹1,278.23</td>
              <td>₹22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>₹1,278.23</td>
              <td>₹22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>₹1,278.23</td>
              <td>₹22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>₹1,278.23</td>
              <td>₹22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>₹1,278.23</td>
              <td>₹22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>₹1,278.23</td>
              <td>₹22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>₹1,278.23</td>
              <td>₹22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>₹1,278.23</td>
              <td>₹22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>₹1,278.23</td>
              <td>₹22</td>
            </tr>
          </tbody>
        </table>
        <div className="footer">
          <button>Previous</button>
          <p>1 ... 10 11 12 13 14 15 16 17 18</p>
          <button>Next</button>
        </div>
      </div>
    </>
  );
}

export default Search;
