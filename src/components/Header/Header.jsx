import React from "react";
import CurrencyExchangeItem from "./CurrencyExchangeItem";

const Header = ({ exchangeCourse }) => {
  return (
    <header className="header">
      <ul className="currency-exchange-list">
        {exchangeCourse.map((item) => {
          if (item.ccy !== "UAH") {
            return (
              <CurrencyExchangeItem
                sale={item.sale}
                ccy={item.ccy}
                key={item.ccy}
              />
            );
          }
        })}
      </ul>
    </header>
  );
};

export default Header;