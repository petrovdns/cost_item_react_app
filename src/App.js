import NewCost from "./components/NewCost/NewCost";
import CostsItemList from "./components/costs/CostsItemList";

function App() {
  const costs = [
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

  const addCostHandler = (cost) => {
        console.log(cost);
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <CostsItemList costs={costs}/>
    </div>
  );
}

export default App;
