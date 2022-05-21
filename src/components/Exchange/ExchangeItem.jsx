import React, { useState } from "react";
import Ico from "../../assets/Ico";

const ExchangeItem = ({
  inputValue,
  inputOnChange,
  selectOnChange,
  exchangeCourse,
  inputInfo,
  selectInfo,
}) => {
  const [flagImage, setFlagImage] = useState("USD");

  function flagSetter(value) {
    setFlagImage(exchangeCourse.find((item) => item.sale === value).ccy);
  }

  return (
    <div className="exchange-item">
      <input
        className="exchange-item-input"
        type="text"
        placeholder="0.00"
        name={inputInfo.name}
        inputMode="numeric"
        pattern={"[^0-9]"}
        id={inputInfo.id}
        value={inputValue}
        onChange={(e) => {
          const value = e.target.value.replace(
            /[A-Za-zА-Яа-яЁё/,`'":;{}]/g, "");
          inputOnChange(value);
        }}
      />
      <div className="exchange-select-wrapper">
        <Ico name={flagImage} width={30} height={20} />
        <select
          className="exchange-item-select"
          name={selectInfo.name}
          id={selectInfo.id}
          onChange={(e) => {
            selectOnChange(e.target.value);
            flagSetter(e.target.value);
          }}>
          {exchangeCourse.map((item) => (
            <option
              key={item.ccy}
              value={item.sale}
              className="exchange-select-option">
              {item.ccy}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExchangeItem;