import React from "react";
import DiscordIco from "../Assets/Icons/DiscordIco";
// import SteamIco from "../Assets/Icons/SteamIco";
import TiktokIco from "../Assets/Icons/TiktokIco";
// import StoreIcon from "../Assets/cart.png";
// import StoreIco from "../Assets/store.svg";
import { FaShoppingCart } from "react-icons/fa";

function ButtonIcon({ icon, content, href }) {
  var Icon;
  if (icon === "1") {
    Icon = <DiscordIco />;
  } else if (icon === "2") {
    Icon = <FaShoppingCart className="cart"></FaShoppingCart>;
  } else if (icon === "3") {
    Icon = <TiktokIco />;
  } else {
    Icon = <></>;
  }

  return (
    <div className="ButtonIcon">
      {Icon}
      <a href={href}>{content}</a>
    </div>
  );
}

export default ButtonIcon;
