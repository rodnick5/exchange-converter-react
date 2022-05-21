import React from "react";
import RUR from "./flags/RUR.svg";
import EUR from "./flags/EUR.svg";
import USD from "./flags/USD.svg";
import UAH from "./flags/UAH.svg";

const icons = {
  RUR,
  EUR,
  USD,
  UAH,
};

const Ico = ({ name, width, height = "auto" }) => {
  return <img src={icons[name]} alt="flag" width={width} height={height} />;
};

export default Ico;