import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ButtonIcon from "../Utils/ButtonIcon";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import bgVdo from "../Assets/Website_background.mp4";
import bgVdom from "../Assets/mobilebg.mp4";
import { CgMouse } from "react-icons/cg";

function HeroSection() {
  return (
    <>
      <div className="HeroSection">
        <video
          autoPlay
          loop
          muted
          src={bgVdo}
          className="d-none d-sm-block"
          id="bgVdo"
          type="video/mp4"
        ></video>
        <video
          autoPlay
          loop
          muted
          src={bgVdom}
          className="d-sm-none"
          id="bgVdo"
          type="video/mp4"
        ></video>
        <Container>
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("COMPETITIVE RUST SERVERS BUILT BY THE COMMUNITY")
                  .start();
              }}
            />
          </h1>
          <p className="mt-4">
            Join us to experience some of the biggest raids from the biggest
            clans in Rust.
          </p>
          <div className="d-flex heroButtons justify-content-left">
            <Fade bottom cascade>
              <Row className="">
                <Col lg={4} className="d-flex justify-content-center">
                  <ButtonIcon
                    icon="1"
                    href="http://discord.gg/affinity"
                    content="Discord"
                  ></ButtonIcon>
                </Col>
                <Col lg={4} className="d-flex justify-content-center">
                  <ButtonIcon
                    icon="2"
                    href="https://store.affinityservers.com/"
                    content="Store"
                  ></ButtonIcon>
                </Col>
                <Col lg={4} className="d-flex justify-content-center">
                  <ButtonIcon
                    icon="3"
                    href="https://www.tiktok.com/@affinityrust"
                    content="TikTok"
                  ></ButtonIcon>
                </Col>
              </Row>
            </Fade>
          </div>
        </Container>
      </div>
      <a
        href="#ourServers"
        className="d-flex justify-content-center mouse-t mt-0"
      >
        {" "}
        <CgMouse className="mouse"></CgMouse> Scroll Down
      </a>
    </>
  );
}

export default HeroSection;
