import React from "react";
import { Container, Row } from "react-bootstrap";
import ButtonIcon from "../Utils/ButtonIcon";
import Fade from "react-reveal/Fade";
import BgGif from "./BgGif";
import bgGif from "../Assets/bggif1.gif";

function YoutubeChannels() {
  return (
    <div className="YouTubeSection pt-4 pb-1">
      <BgGif></BgGif>
      <Container>
        <Fade bottom>
          <Row className="py-5 d-flex justify-content-center borders-top borders-bottom border-secondary">
            <div className="heading">Introducing Affinity RSA</div>
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/XyR8mmDAIYM"
            ></iframe>
            <div className="desc my-4 text-muted">
              CEEG Is a top tier builder for the clan "ABU$E" on our Vital 2x
              Large server. He makes excellent content and has recently even
              started up a community discord for Vital Builders. Follow him on
              his journey to posting more build content and content from his
              group on our 2x Large server.
            </div>

            <div className="d-flex justify-content-center">
              <a>
                <ButtonIcon
                  href="https://www.youtube.com/channel/UCAy_DZ8yHrfKYHX40HKXT2A"
                  icon="1"
                  content="Dining’s Youtube Channel"
                ></ButtonIcon>
              </a>
            </div>
          </Row>
        </Fade>
        <BgGif></BgGif>
        <Fade bottom>
          <Row className="pt-5 pb-1 d-flex justify-content-center borders-bottom border-secondary">
            <div className="heading">1100 Rocket Online Raid</div>
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/UYG0FNq92hk"
            ></iframe>
            <div className="desc my-4 text-muted">
              CEEG Is a top tier builder for the clan "ABU$E" on our Vital 2x
              Large server. He makes excellent content and has recently even
              started up a community discord for Vital Builders. Follow him on
              his journey to posting more build content and content from his
              group on our 2x Large server.
            </div>
            <div className="d-flex justify-content-center">
              <a>
                <ButtonIcon
                  href="https://www.youtube.com/channel/UCAy_DZ8yHrfKYHX40HKXT2A"
                  icon="1"
                  content="CEEG’s Youtube Channel"
                ></ButtonIcon>
              </a>
            </div>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}

export default YoutubeChannels;
