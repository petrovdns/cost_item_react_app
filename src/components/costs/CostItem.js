import { useState } from "react";
import Card from "../UI/Card";
import "./CostItem.css";
import CostDate from "./CostaDate";

function CostItem(props) {

  const [amount, setAmount] = useState(props.amount);

  function clickListener() {
    setAmount(prevVal => prevVal + 1);
  }

  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{props.description}</h2>
        <div className="cost-item__price">$ {amount}</div>
      </div>
      <button onClick={clickListener}>Click</button>
    </Card>
  );
}

export default CostItem;
