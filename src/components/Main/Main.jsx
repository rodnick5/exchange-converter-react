import React, { useEffect, useState } from "react";
import Exchange from "../Exchange/Exchange";
import Header from "../Header/Header";

const Main = () => {
  const [exchangeCourse, setExchangeCourse] = useState([
    { ccy: "USD", sale: "32.65" },
  ]);

  useEffect(() => {
    fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=11")
      .then((response) => response.json())
      .then((response) => response.filter((item) => item.ccy !== "BTC"))
      .then((response) =>
        setExchangeCourse([...response, { ccy: "UAH", sale: "1" }])
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header exchangeCourse={exchangeCourse} />
      <Exchange exchangeCourse={exchangeCourse} />
      <div className="made-by-rodnick">
        <p>
          Made by <span className="made-by-span">rodnick5</span>
        </p>
      </div>
    </>
  );
};

export default Main;