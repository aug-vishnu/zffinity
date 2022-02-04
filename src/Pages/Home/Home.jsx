import React from "react";
import NavBar from "../../Components/NavBar";
import HeroSection from "../../Components/HeroSection";
import OurServers from "../../Components/OurServers";
import YoutubeChannels from "../../Components/YoutubeChannels";
import DiscordCommnuities from "../../Components/DiscordCommnuities";
import StoreCta from "../../Components/StoreCta";
import Footer from "../../Components/Footer";
import Fade from "react-reveal/Fade";
import axios from "axios";
import BgGif from "../../Components/BgGif";

function Home() {
  axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  axios.defaults.headers.common["token"] =
    "PFyU8gPyRYO2onZFQHcmQwLBha9bJIGDvgszHOhJPcFC3V5aVM";
  return (
    <div className="Home">
      <NavBar></NavBar>
      <Fade>
        <HeroSection></HeroSection>
      </Fade>
      <BgGif></BgGif>
      <Fade left cascade>
        <OurServers></OurServers>
      </Fade>
      <Fade cascade>
        <YoutubeChannels></YoutubeChannels>
      </Fade>
      <Fade right cascade>
        <DiscordCommnuities></DiscordCommnuities>
      </Fade>
      {/* <BgGif></BgGif> */}
      <Fade>
        <StoreCta></StoreCta>
      </Fade>
      <Footer></Footer>
    </div>
  );
}

export default Home;
