import Card from "../UI/Card";
import "./CostsItemList.css";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import CostList from "./CostsList";
import "./CostsList.css";
import CostsDiagram from "./CostsDiagram";

function CostsItemList(props) {
  const [selectedYear, setSelectedYear] = useState("2025");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredListItem = props.costs.filter(object => object.date.getFullYear().toString() === selectedYear);

  return (
      <Card className="costs-list">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredListItem}/>
        <CostList costs={filteredListItem}/>
      </Card>
  );
}

export default CostsItemList;
