import React from "react";
import { TiHome } from "react-icons/ti";
import { BiBorderAll } from "react-icons/bi";
import { CgMenuBoxed } from "react-icons/cg";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { MdOutlineColorLens } from "react-icons/md";
import { LiaTelegram } from "react-icons/lia";
import { IoMdLink } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiCreditCard } from "react-icons/pi";

function LeftSidebar() {
  return (
    <div className="leftsidebar">
      <header>
        <div className="sidebar-icon">
          <div className="sidebar-icon-store">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qQZI2KuDfyD8hW0Zkz9lWCcaKLOCRtnmkLjW7Mg1sNwID66PGDmHlRKQBFutGj20Mv0&usqp=CAU"
                alt="Nishyan"
              />
            </div>
            <div>
              <span>Nishyan</span>
              <p>Visit store</p>
            </div>
          </div>
          <div>
            <i>
              <RiArrowDropDownLine />
            </i>
          </div>
        </div>
        <div className="icons">
          <nav>
            <ul>
              <li>
                <i>
                  <TiHome />
                </i>
                Home
              </li>
              <li>
                <i>
                  <CgMenuBoxed />
                </i>
                Orders
              </li>
              <li>
                <i>
                  <BiBorderAll />
                </i>
                Products
              </li>
              <li>
                <i>
                  <CiDeliveryTruck />
                </i>
                Delivery
              </li>
              <li>
                <i>
                  <HiOutlineSpeakerWave />
                </i>
                Marketing
              </li>
              <li>
                <i>
                  <TbBrandGoogleAnalytics />
                </i>
                Analytics
              </li>
              <li>
                <i>
                  <MdOutlinePayments />
                </i>
                Payment
              </li>
              <li>
                <i>
                  <LiaTelegram />
                </i>
                Tools
              </li>
              <li>
                <i>
                  <CiDiscount1 />
                </i>
                Discounts
              </li>
              <li>
                <i>
                  <GoPeople />
                </i>
                Audience
              </li>
              <li>
                <i>
                  <MdOutlineColorLens />
                </i>
                Appearance
              </li>
              <li>
                <i>
                  <IoMdLink />
                </i>
                Plugins
              </li>
            </ul>
          </nav>
        </div>
        <div className="bottom-nav">
          <div>
            <i>
              <PiCreditCard />
            </i>
          </div>

          <div>
            <p>Available credits</p>
            <p>222.10</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default LeftSidebar;
