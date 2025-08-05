import { useState } from "react";
import NewCost from "./components/NewCost/NewCost";
import CostsItemList from "./components/costs/CostsItemList";

const INIT_COSTS = [
    {
      date: new Date(2025, 12, 4),
      description: "Frigider",
      amount: 999.99,
    },
    {
      date: new Date(2025, 5, 16),
      description: "MackBock",
      amount: 1000.0,
    },
    {
      date: new Date(2025, 5, 25),
      description: "Iphone 16",
      amount: 1200.0,
    },
  ];

function App() {
  
  const [costs, setCosts] = useState(INIT_COSTS);

  const addCostHandler = (cost) => {
        setCosts([cost, ...costs]);
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <CostsItemList costs={costs}/>
    </div>
  );
}

export default App;
