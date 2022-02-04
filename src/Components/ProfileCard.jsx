import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../Assets/Ellipse.png";
import Twitch from "../Assets/Twitch.png";
import Profilepic from "../Assets/Profilepic.png";
import Steam from "../Assets/Steam.png";
import gamelogo from "../Assets/gamelogo.png";

function ProfileCard() {
  return (
    <div className="px-5 card">
      <div className="row mt-2">
        <div data-aos="fade-right" className="col-lg-3  col-md-4 col-sm-6 ">
          <img src={Profilepic} alt="" />
        </div>
        <div data-aos="fade-left" className="col-lg-8  col-md-8 col-sm-6">
          <h2 className="profile-head">Mutaex</h2>
          <div className="profile-small">mutaexgaming@gmail.com</div>
          <div className="profile-small"></div>
        </div>
      </div>
      <Row className="mt-4">
        <Row data-aos="fade-right" className="small-heading">
          Linked Accounts
        </Row>
        <div className="account d-flex mt-2">
          <div data-aos="fade-right" className="img1">
            <img src={gamelogo} alt="" />
            <span className="profile-side-text">Metsx5667</span>
          </div>
          <a data-aos="fade-left" href="#" className="small-heading anchor">
            LINK
          </a>
        </div>
        {/* <div className="account d-flex">
          <div data-aos="fade-right" className="img1">
            <img src={Twitch} alt="" />
            <span className="profile-side-text">Metsx5667</span>
          </div>
          <a data-aos="fade-left"  href="#" className="small-heading anchor">
            LINK
          </a>
        </div> */}
        <div className="account d-flex">
          <div data-aos="fade-right" className="img1">
            <img src={Steam} alt="" />
            <span className="profile-side-text">Metsx5667</span>
          </div>
          <a data-aos="fade-left" href="#" className="small-heading anchor">
            UNLINK
          </a>
        </div>
      </Row>
    </div>
  );
}

export default ProfileCard;
