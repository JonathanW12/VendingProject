import React, { useState } from "react";
import VendingItem from "./vendingItem.js";
import "../css/VendingMachine.css";

function VendingMachine() {
  const [balance, setBalance] = useState(50);
  const [changeBack, setChangeBack] = useState("Tray for getting change back");
  const handleChange = (amount) => {
    if (amount > balance) {
      setChangeBack("You do not have sufficient funds");
      return;
    }
    setBalance(balance - amount);
    setChangeBack(`You get ${balance - amount} kr back in change`);
  };

  return (
    <div>
      <div className="balance">
        <p>Balance: </p>
        <input
          value={balance}
          onChange={(cash) => {
            setBalance(cash.target.value);
          }}
        />
        <p>kr</p>
      </div>
      <VendingItem
        productName="Haribo Bamser"
        productPrice={20}
        handleClick={(e) => handleChange(e)}
      />
      <VendingItem
        productName="Kims Chips"
        productPrice={10}
        handleClick={(e) => handleChange(e)}
      />
      <VendingItem
        productName="Mars Bar"
        productPrice={23}
        handleClick={(e) => handleChange(e)}
      />
      <VendingItem
        productName="Super Flyers"
        productPrice={14}
        handleClick={(e) => handleChange(e)}
      />
      <p className="tray">{changeBack}</p>
    </div>
  );
}

export default VendingMachine;
