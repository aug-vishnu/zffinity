import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../Assets/logo2.png";
import ButtonFab from "../Utils/ButtonFab";
import DiscordIco from "../Assets/Icons/DiscordIco";
import SteamIco from "../Assets/Icons/SteamIco";
import TiktokIco from "../Assets/Icons/TiktokIco";

function Footer() {
  return (
    <div>
      <Container
        fluid
        className="Footer text-center d-flex justify-content-center"
      >
        <Row className="d-flex justify-content-center links">
          <img className="" src={Logo} alt="" />
          <div className="desc text-muted pt-5 pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
          <Row className="d-flex mb-4  justify-content-between links ">
            <Col>
              <a href="#" className="footer-btn">
                About Us
              </a>
            </Col>
            <Col>
              <a href="#" className="footer-btn">
                Servers
              </a>
            </Col>
            <Col>
              <a href="#" className="footer-btn">
                Events
              </a>
            </Col>
            <Col>
              <a href="#" className="footer-btn">
                Contact Us
              </a>
            </Col>
          </Row>
          <Row className="d-flex justify-content-evenly btns">
            <Col className="d-flex justify-content-center ">
              <a href="http://discord.gg/affinity" className="btnFab">
                <DiscordIco></DiscordIco>
              </a>{" "}
            </Col>
            <Col className="d-flex justify-content-center ">
              <a
                href="https://youtube.com/channel/UCSmY3rlJ68aeAdoC71KnS2A"
                className="btnFab"
              >
                <SteamIco></SteamIco>
              </a>{" "}
            </Col>
            <Col className="d-flex justify-content-center ">
              <a href="https://www.tiktok.com/@affinityrust" className="btnFab">
                <TiktokIco></TiktokIco>
              </a>{" "}
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
