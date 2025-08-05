import CostItem from "./CostItem";
import Card from "../UI/Card";
import "./CostsItemList.css";
import CostsFilter from "./CostsFilter";
import { useState } from "react";

function CostsItemList(props) {
  const [selectedYear, setSelectedYear] = useState("2025");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredListItem = props.costs.filter(object => object.date.getFullYear().toString() === selectedYear);

  let costsContent = <p>No purchase in the year</p>

  if(filteredListItem.length > 0) {
    costsContent = filteredListItem.map((object) => (
          <CostItem
            key={object.id}
            date={object.date}
            description={object.description}
            amount={object.amount}
          />
        ));
  };

  return (
      <Card className="costs-list">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {costsContent}
      </Card>
  );
}

export default CostsItemList;
