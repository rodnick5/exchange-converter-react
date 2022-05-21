import React from "react";
import Ico from "../../assets/Ico";

const CurrencyExchangeItem = ({ buy, sale, ccy }) => {
  return (
    <li className="currency-exchange-list-item">
      <Ico name={ccy} width={20} />
      <p className="list-item-text">
        {ccy}: {Number(sale).toFixed(2)}
      </p>
    </li>
  );
};

export default CurrencyExchangeItem;