import CostItem from "./CostItem";
import Card from "../UI/Card";
import "./CostsItemList.css";
import CostsFilter from "./CostsFilter";
import { useState } from "react";

function CostsItemList(props) {
  const [selectedYear, setSelectedYear] = useState("2024");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
      <Card className="costs-list">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {props.costs.map((object, index) => (
          <CostItem
            key={index}
            date={object.date}
            description={object.description}
            amount={object.amount}
          />
        ))}
      </Card>
  );
}

export default CostsItemList;
