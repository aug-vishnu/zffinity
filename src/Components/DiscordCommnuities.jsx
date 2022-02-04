import React from "react";
import { Nav } from "react-bootstrap";
import Logo1 from "../Assets/Ellipse.png";
import LogoGirl from "../Assets/imageBoy.png";
import Fade from "react-reveal/Fade";
import BgGif from "./BgGif";

function DiscordCommnuities() {
  return (
    <div className="container">
      <BgGif></BgGif>

      {/* <Container> */}
      <div className="heading">Join Discord Communities</div>
      <Fade cascade bottom>
        <div className="row col-12 m-0 discordBar">
          <div className="col-lg-6 col-12 discord-card-container mt-2">
            <div className="row discord-item">
              <div className="col-2">
                <img src={Logo1} height="50px" width="50px" alt=".." />
              </div>
              <div className="col-lg-6 col-10">
                <h5 className="label">Affinity Community</h5>
                <small className="small-text d-flex">
                  <div className="online mr-2">
                    <i className="fa fa-circle me-2 text-success"> </i>1000
                    Online{" "}
                  </div>
                  <div className="offline mx-2">
                    <i className="fa fa-circle me-2 text-muted"> </i>20045
                    Members
                  </div>
                </small>
              </div>
              <div className="col-lg-4 col-12">
                <a href="https://discord.gg/affinity">
                  <button className="btn-join text-dark">Join Server</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 discord-card-container mx-auto mt-2">
            <div className="row discord-item">
              <div className="col-2">
                <img src={Logo1} height="50px" width="50px" alt=".." />
              </div>
              <div className="col-lg-6 col-10">
                <h5 className="label">Updates Affinity</h5>
                <small className="small-text d-flex">
                  <div className="online mr-2">
                    <i className="fa fa-circle me-2 text-success"> </i>1000
                    Online{" "}
                  </div>
                  <div className="offline mx-2">
                    <i className="fa fa-circle me-2 text-muted"> </i>20045
                    Members
                  </div>
                </small>
              </div>
              <div className="col-lg-4 col-12">
                <a href="https://discord.gg/Rms5cVFWSb">
                  <button className="btn-join text-dark">Join Server</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade cascade bottom>
        <div className="row col-12 m-0 discordBar ">
          <div className=" col-lg-6 col-12 discord-card-container mt-2">
            <div className="row discord-item">
              <div className="col-2">
                <img src={Logo1} height="50px" width="50px" alt=".." />
              </div>
              <div className="col-lg-6 col-10">
                <h5 className="label">Affinity plus Community</h5>
                <small className="small-text d-flex">
                  <div className="online mr-2">
                    <i className="fa fa-circle me-2 text-success"> </i>1000
                    Online{" "}
                  </div>
                  <div className="offline mx-2">
                    <i className="fa fa-circle me-2 text-muted"> </i>20045
                    Members
                  </div>
                </small>
              </div>
              <div className="col-lg-4 col-12">
                <a href="https://discord.gg/ZF9kJSktvp">
                  <button className="btn-join text-dark">Join Server</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 discord-card-container mx-auto mt-2">
            <div className="row discord-item">
              <div className="col-2">
                <img src={Logo1} height="50px" width="50px" alt=".." />
              </div>
              <div className="col-lg-6 col-10">
                <h5 className="label">Affinity 2021</h5>
                <small className="small-text d-flex">
                  <div className="online mr-2">
                    <i className="fa fa-circle me-2 text-success"> </i>1000
                    Online{" "}
                  </div>
                  <div className="offline mx-2">
                    <i className="fa fa-circle me-2 text-muted"> </i>20045
                    Members
                  </div>
                </small>
              </div>
              <div className="col-lg-4 col-12">
                <a href="https://discord.gg/AyvxB5MZBG">
                  <button className="btn-join text-dark">Join Server</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      {/* <BgGif></BgGif> */}

      <Fade bottom>
        <div className="mt-5 row visit-store-area  mb-5">
          <div className="col-lg-6 col-12 p-5">
            <p className="become-supporter">Become a supporter</p>
            <p className="supporter-text">
              Wanting to get a head of the queue? Visit our store to view all of
              our perks available for purchases
            </p>
            <Nav.Link href="https://store.affinityservers.com/">
              <p className="btn mt-3 btn-visit">Visit Store</p>
            </Nav.Link>
          </div>
          <div className="col-lg-6 col-12">
            <p className="img-girl">
              <img className="img-girl" src={LogoGirl} alt=".." />
            </p>
          </div>
        </div>
      </Fade>
      {/* </Container> */}
    </div>
  );
}

export default DiscordCommnuities;
