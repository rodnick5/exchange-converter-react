import React, { useEffect, useState } from "react";
import ExchangeItem from "./ExchangeItem";

const Exchange = ({ exchangeCourse }) => {
  const [buyingCurrencyInput, setBuyingCurrencyInput] = useState("1");
  const [sellingCurrencyInput, setSellingCurrencyInput] = useState("1");
  const [currentBuyingExchange, setCurrentBuyingExchange] = useState("1");
  const [currentSellingExchange, setCurrentSellingExchange] = useState("1");

  useEffect(() => {
    setCurrentBuyingExchange(exchangeCourse[0].sale);
    setCurrentSellingExchange(exchangeCourse[0].sale);
  }, [exchangeCourse]);

  useEffect(() => {
    getExchangeSelling();
  }, [currentBuyingExchange]);

  useEffect(() => {
    getExchangeBuying();
  }, [currentSellingExchange]);

  function getExchangeBuying(number = buyingCurrencyInput) {
    const exchange = number / (currentSellingExchange / currentBuyingExchange);
    setBuyingCurrencyInput(number);
    setSellingCurrencyInput(exchange.toFixed(2));
  }
  function getExchangeSelling(number = sellingCurrencyInput) {
    const exchange = number / (currentBuyingExchange / currentSellingExchange);
    setSellingCurrencyInput(number);
    setBuyingCurrencyInput(exchange.toFixed(2));
  }

  return (
    <div className="exchange-block-wrapper">
      <ExchangeItem
        inputValue={buyingCurrencyInput}
        exchangeCourse={exchangeCourse}
        selectOnChange={setCurrentBuyingExchange}
        inputOnChange={getExchangeBuying}
        inputInfo={{
          name: "buyingCurrencyInput",
          id: "buyingCurrencyInputID",
        }}
        selectInfo={{
          name: "buyingCurrencySelect",
          id: "buyingCurrencySelectID",
        }}
      />
      <div className="exchange-convertation-img-wrapper">
        <img
          src={require("../../assets/convertation/convert-icon.png")}
          alt="convertation"
          className="exchange-convertation-img"
        />
      </div>

      <ExchangeItem
        inputValue={sellingCurrencyInput}
        exchangeCourse={exchangeCourse}
        selectOnChange={setCurrentSellingExchange}
        inputOnChange={getExchangeSelling}
        inputInfo={{
          name: "sellingCurrencyInput",
          id: "sellingCurrencyInputID",
        }}
        selectInfo={{
          name: "sellingCurrencySelect",
          id: "sellingCurrencySelectID",
        }}
      />
    </div>
  );
};

export default Exchange;