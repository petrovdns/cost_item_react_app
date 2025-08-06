import { useState } from "react";
import CostForm from "./CostFrom";
import "./NewCost.css";

function NewCost(props) {
  const [isFormVisible, setIsFromVisible] = useState(false);

  const onSaveForm = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };

    props.onAddCost(costData);
    setIsFromVisible(false);
  };

  const isFormVisibleHandler = () => {
    setIsFromVisible(true);
  };

   const cancelFormVisibleHandler = () => {
    setIsFromVisible(false);
  };

  if (!isFormVisible) {
    return (
      <div className="new-cost">
        <button onClick={isFormVisibleHandler}>Adauga Nou Item</button>
      </div>
    );
  }

  return (
    <div className="new-cost">
      <CostForm onSaveForm={onSaveForm} onIsFormVisible={cancelFormVisibleHandler}/>
    </div>
  );
}

export default NewCost;
