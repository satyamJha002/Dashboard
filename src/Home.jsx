import React from "react";
import { RiExchangeDollarFill } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import Barchart from "./Barchart";

function Home() {
  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <RiExchangeDollarFill className="card_icon" />
            <small style={{ marginLeft: "20px" }}>
              Transactions <br />
              <span style={{ fontSize: "32px" }}>
                <strong>$198k</strong>
              </span>
              <br />
              <span>
                <small style={{ color: "green", fontWeight: "bold" }}>
                  ⤴ 37.2%
                </small>
                this month
              </span>
            </small>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <CgNotes className="card_icon_1" />
            <small style={{ marginLeft: "20px" }}>
              Orders <br />
              <span style={{ fontSize: "32px" }}>
                <strong>$2.4k</strong>
              </span>
              <br />
              <span>
                <small style={{ color: "red", fontWeight: "bold" }}>⤵ 2%</small>
                this month
              </span>
            </small>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <IoWalletOutline className="card_icon_2" />
            <small style={{ marginLeft: "20px" }}>
              Balance <br />
              <span style={{ fontSize: "32px" }}>
                <strong>$2.4k</strong>
              </span>
              <br />
              <span>
                <small style={{ color: "red", fontWeight: "bold" }}>⤵ 2%</small>
                this month
              </span>
            </small>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <BsHandbag className="card_icon_3" />
            <small style={{ marginLeft: "20px" }}>
              Total Sales <br />
              <span style={{ fontSize: "32px" }}>
                <strong>$89k</strong>
              </span>
              <br />
              <span>
                <small style={{ color: "green", fontWeight: "bold" }}>
                  ⤴ 11%
                </small>
                this week
              </span>
            </small>
          </div>
        </div>
      </div>
      <Barchart />
    </main>
  );
}

export default Home;
